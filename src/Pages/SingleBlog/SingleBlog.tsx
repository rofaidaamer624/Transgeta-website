import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../Component/Breadcrumb/Breadcrumb";
import { useTranslation } from "react-i18next";
import styles from "./SingleBlog.module.css";

type Article = {
  id: number;
  title_ar: string;
  title_en: string;
  summary_ar: string;
  summary_en: string;
  body_ar: string;
  body_en: string;
  image_url: string | null;
  published_at: string;
};

const BASE_URL = "http://127.0.0.1:8000";
const FALLBACK_IMG = "/images/blogImage.jpg";

export default function SingleBlog() {
  const { id } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function fetchArticle() {
      if (!id) return;

      try {
        setLoading(true);
        setError("");

        const res = await fetch(`${BASE_URL}/api/articles/${id}`, {
          headers: { Accept: "application/json" },
        });

        if (!res.ok) throw new Error("Failed to fetch article");

        const json = await res.json();

        if (!json.success || !json.data) {
          throw new Error("Invalid API response");
        }

        setArticle(json.data);
      } catch (e) {
        console.error("Fetch Article Error:", e);
        setError(t("article.single.error"));
      } finally {
        setLoading(false);
      }
    }

    fetchArticle();
  }, [id, t]);

  const title = isArabic ? article?.title_ar : article?.title_en;
  const summary = isArabic ? article?.summary_ar : article?.summary_en;
  const body = isArabic ? article?.body_ar : article?.body_en;

  const imageSrc = article?.image_url
    ? `${BASE_URL}/files/articles/${article.image_url}`
    : FALLBACK_IMG;

  return (
    <>
      <Breadcrumb pageName={t("article.single.pageName")} />

      <section className={`${styles.section} py-5`}>
        <div className={`container ${isArabic ? styles.rtl : ""}`}>
          {/* ✅ Loading */}
          {loading && (
            <div className={styles.loadingBox}>
              <div className={styles.loader}></div>
              <p>{t("article.single.loading")}</p>
            </div>
          )}

          {/* ✅ Error */}
          {!loading && error && (
            <div className={styles.errorBox}>
              <h3>{t("article.single.somethingWrong")}</h3>
              <p>{error}</p>
            </div>
          )}

          {/* ✅ Article */}
          {!loading && !error && article && (
            <div className={styles.postWrapper}>
              {/* ✅ Cover */}
              <div className={styles.cover}>
                <img
                  src={imageSrc}
                  alt={title || "Article"}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = FALLBACK_IMG;
                  }}
                />
              </div>

              {/* ✅ Content Card */}
              <article className={styles.articleCard}>
                <p className={styles.date}>
                  {new Date(article.published_at).toLocaleDateString(
                    isArabic ? "ar-EG" : "en-US",
                    { year: "numeric", month: "long", day: "numeric" }
                  )}
                </p>

                <h1 className={styles.title}>{title}</h1>

                <p className={styles.summary}>{summary}</p>

                {/* ✅ Body text safe */}
                <div className={styles.content}>
                  {body
                    ? body.split("\r\n\r\n").map((para, idx) => (
                        <p key={idx}>{para}</p>
                      ))
                    : <p className="text-muted">{t("article.single.noContent")}</p>}
                </div>
              </article>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
