import { useEffect, useState } from "react";
import axios from "axios";
import BlogCrad from "../../Component/BlogCard/BlogCrad";
import Breadcrumb from "../../Component/Breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BASE_URL = "http://127.0.0.1:8000";
const FALLBACK_IMG = "/images/blogImage.jpg";

type Article = {
  id: number;
  title_ar: string;
  title_en: string;
  summary_ar: string;
  summary_en: string;
  published_at: string;
  image_url: string | null;
};

export default function Resources() {
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language === "ar";

  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/public/articles`, {
        headers: { Accept: "application/json" },
      })
      .then((res) => {
        setArticles(res.data?.data?.articles || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching articles:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Breadcrumb pageName={t("resources.pageName")} />

      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bolder display-6 mb-4">
            {t("resources.title")}
          </h2>

          {loading ? (
            <p className="text-center">{t("resources.loading")}</p>
          ) : (
            <div className="row justify-content-center">
              {articles.length === 0 ? (
                <p className="text-center text-muted">
                  {t("resources.noArticles")}
                </p>
              ) : (
                articles.map((article) => {
                  const imageSrc = article.image_url
                    ? `${BASE_URL}/files/articles/${article.image_url}`
                    : FALLBACK_IMG;

                  return (
                    <div
                      className="col-lg-4 col-md-6 col-sm-10 col-11 mb-4"
                      key={article.id}
                    >
                      <Link
                        to={`/articles/${article.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <BlogCrad
                          blogName={isArabic ? article.title_ar : article.title_en}
                          blogDate={new Date(article.published_at).toLocaleDateString(
                            isArabic ? "ar-EG" : "en-US",
                            { year: "numeric", month: "long", day: "numeric" }
                          )}
                          blogDesc={isArabic ? article.summary_ar : article.summary_en}
                          blogImage={imageSrc}
                        />
                      </Link>
                    </div>
                  );
                })
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
