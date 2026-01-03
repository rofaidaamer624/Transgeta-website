import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../Component/Breadcrumb/Breadcrumb";
import { useTranslation } from "react-i18next";
import styles from "./SingleBlog.module.css";


import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";

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

const BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://api.transgateacd.com";
const FALLBACK_IMG = "/images/blogImage.jpg";

/* ✅ Helpers */
function normalizeText(text: string) {
  return text.replace(/\r\n/g, "\n").replace(/\r/g, "\n").trim();
}

function renderRichBody(body: string) {
  const lines = normalizeText(body).split("\n");

  const nodes: React.ReactNode[] = [];
  let paragraph: string[] = [];
  let listItems: string[] = [];

  const flushParagraph = () => {
    const txt = paragraph.join(" ").trim();
    if (txt) nodes.push(<p key={`p-${nodes.length}`}>{txt}</p>);
    paragraph = [];
  };

  const flushList = () => {
    if (listItems.length) {
      nodes.push(
        <ul key={`ul-${nodes.length}`}>
          {listItems.map((li, idx) => (
            <li key={idx}>{li}</li>
          ))}
        </ul>
      );
      listItems = [];
    }
  };

  const isH2 = (line: string) =>
    /^\d+\.\s+/.test(line) ||
    /^Conclusion\s*:/.test(line) ||
    /^Conclusion\b/.test(line) ||
    /^الخلاصة\s*:/.test(line);

  const isBullet = (line: string) => /^[-•]\s+/.test(line);

  const isH3 = (line: string) =>
    /:\s*$/.test(line) &&
    !isH2(line) &&
    !isBullet(line) &&
    line.length < 120;

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushList();
      flushParagraph();
      continue;
    }

    if (isH2(line)) {
      flushList();
      flushParagraph();
      nodes.push(<h2 key={`h2-${nodes.length}`}>{line}</h2>);
      continue;
    }

    if (isH3(line)) {
      flushList();
      flushParagraph();
      nodes.push(<h3 key={`h3-${nodes.length}`}>{line}</h3>);
      continue;
    }

    if (isBullet(line)) {
      flushParagraph();
      listItems.push(line.replace(/^[-•]\s+/, "").trim());
      continue;
    }

    flushList();
    paragraph.push(line);
  }

  flushList();
  flushParagraph();

  return nodes;
}

export default function SingleBlog() {
  const { id } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  // ✅ Fetch article
  useEffect(() => {
    async function fetchArticle() {
      if (!id) return;

try {
  setLoading(true);
  setError("");


  const res = await fetch(`${BASE_URL}/api/articles/${id}`, {
    headers: { Accept: "application/json" },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch article (status: ${res.status})`);
  }

  const json = await res.json();

  if (!json?.success || !json?.data) {
    throw new Error("Invalid API response");
  }

  const article = json.data.article ?? json.data;
  setArticle(article);

} catch (err: unknown) {
  if (err instanceof Error) {
    setError(err.message);
  } else {
    setError("Something went wrong");
  }
} finally {
  setLoading(false);
}

    }

    fetchArticle();
  }, [id]); 

  const title = isArabic ? article?.title_ar : article?.title_en;
  const summary = isArabic ? article?.summary_ar : article?.summary_en;
  const body = isArabic ? article?.body_ar : article?.body_en;

  const imageSrc = article?.image_url
    ? `${BASE_URL}/files/articles/${article.image_url}`
    : FALLBACK_IMG;

  const richBody = useMemo(() => {
    if (!body) return null;
    return renderRichBody(body);
  }, [body]);

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

              {/* ✅ Share Row */}
              <div className={styles.shareRow}>
                <span className={styles.shareText}>
                  {t("article.single.share")}
                </span>

                <div className={styles.shareIcons}>
                  <a className={styles.iconBtn} href="#" aria-label="Facebook">
                    <FaFacebookF />
                  </a>
                  <a className={styles.iconBtn} href="#" aria-label="Instagram">
                    <FaInstagram />
                  </a>
                  <a className={styles.iconBtn} href="#" aria-label="WhatsApp">
                    <FaWhatsapp />
                  </a>
                  <a className={styles.iconBtn} href="#" aria-label="Telegram">
                    <FaTelegramPlane />
                  </a>
                </div>
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

                {summary && <p className={styles.summary}>{summary}</p>}

                <div className={`${styles.content} ${styles.contentLine}`}>
                  {richBody ? (
                    richBody
                  ) : (
                    <p className="text-muted">{t("article.single.noContent")}</p>
                  )}
                </div>
              </article>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
