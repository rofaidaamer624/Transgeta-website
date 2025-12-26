import { useTranslation } from "react-i18next";
import styles from "./Ethics.module.css";
import { FaShieldAlt, FaBalanceScale, FaBookOpen, FaGlobe, FaInfoCircle } from "react-icons/fa";

export default function Ethics() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const principles = [
    { icon: <FaShieldAlt size={18} />, title: t("about-us.ethics.principles.p1.title"), desc: t("about-us.ethics.principles.p1.desc") },
    { icon: <FaBalanceScale size={18} />, title: t("about-us.ethics.principles.p2.title"), desc: t("about-us.ethics.principles.p2.desc") },
    { icon: <FaBookOpen size={18} />, title: t("about-us.ethics.principles.p3.title"), desc: t("about-us.ethics.principles.p3.desc") },
    { icon: <FaInfoCircle size={18} />, title: t("about-us.ethics.principles.p4.title"), desc: t("about-us.ethics.principles.p4.desc") }
  ];

  const translationArticleSections = [
    { title: t("about-us.ethics.translationArticle.s1.title"), body: t("about-us.ethics.translationArticle.s1.body") },
    { title: t("about-us.ethics.translationArticle.s2.title"), body: t("about-us.ethics.translationArticle.s2.body") },
    { title: t("about-us.ethics.translationArticle.s3.title"), body: t("about-us.ethics.translationArticle.s3.body") },
    { title: t("about-us.ethics.translationArticle.s4.title"), body: t("about-us.ethics.translationArticle.s4.body") },
    { title: t("about-us.ethics.translationArticle.s5.title"), body: t("about-us.ethics.translationArticle.s5.body") },
    { title: t("about-us.ethics.translationArticle.s6.title"), body: t("about-us.ethics.translationArticle.s6.body") }
  ];

  return (
    <section className={`${styles.section} py-5`}>
      <div className="container">

        {/* Header */}
        <div className={`text-center mb-5 ${isArabic ? styles.rtl : ""}`}>
          <h2 className={styles.title}>{t("about-us.ethics.title")}</h2>
          <p className={styles.subtitle}>{t("about-us.ethics.subtitle")}</p>
        </div>

        {/* Principles Cards */}
        <div className="row g-4 mb-5">
          {principles.map((item, idx) => (
            <div className="col-lg-3 col-md-6 col-12" key={idx}>
              <div className={styles.card}>
                <div className={styles.iconBox}>{item.icon}</div>
                <h5 className={styles.cardTitle}>{item.title}</h5>
                <p className={styles.cardDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Policy Box */}
        <div className={`row justify-content-center mb-5 ${isArabic ? styles.rtl : ""}`}>
          <div className="col-lg-10">
            <div className={styles.box}>
              <h3 className={styles.boxTitle}>{t("about-us.ethics.policyTitle")}</h3>
              <p className={styles.paragraph}>{t("about-us.ethics.p1")}</p>
              <p className={styles.paragraph}>{t("about-us.ethics.p2")}</p>
              <p className={styles.paragraph}>{t("about-us.ethics.p3")}</p>

              <div className={styles.highlight}>
                {t("about-us.ethics.highlight")}
              </div>
            </div>
          </div>
        </div>

        {/* Translation Article */}
        <div className={`row justify-content-center ${isArabic ? styles.rtl : ""}`}>
          <div className="col-lg-10">
            <div className={styles.articleHeader}>
              <div className={styles.articleIcon}><FaGlobe size={20} /></div>
              <div>
                <h3 className={styles.articleTitle}>{t("about-us.ethics.translationArticle.title")}</h3>
                <p className={styles.articleSub}>{t("about-us.ethics.translationArticle.subtitle")}</p>
              </div>
            </div>

            <div className={styles.articleBox}>
              {translationArticleSections.map((sec, i) => (
                <div className={styles.articleSection} key={i}>
                  <h4 className={styles.sectionTitle}>{sec.title}</h4>
                  <p className={styles.sectionBody}>{sec.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
