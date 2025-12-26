import { FaRegCircleDot } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import styles from "./About.module.css";
import { MdGTranslate } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi2";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
  <section className={styles.aboutSection}>
  <div className="container">
    <div className="row align-items-center gy-5">

      {/* ✅ LEFT: Content */}
      <div className="col-lg-7 col-12">

        {/* Title Row */}
        <div className="d-flex align-items-center gap-3 mb-3">
          <span className={styles.dotIcon}>
            <FaRegCircleDot size={28} fill="#1b90c6" />
          </span>
          <h2 className="m-0 fw-bold">{t("about.sectionTitle")}</h2>
        </div>

        <h3 className={styles.question}>{t("about.question")}</h3>
        <p className={styles.answer}>{t("about.answer")}</p>

        <div className={styles.valuesBox}>
          <h5 className={styles.valuesTitle}>{t("about.valuesTitle")}</h5>

          <ul className="row p-0 m-0 list-unstyled">
            {[
              t("about.values.0"),
              t("about.values.1"),
              t("about.values.2"),
              t("about.values.3")
            ].map((item, index) => (
              <li
                key={index}
                className="col-md-6 col-12 d-flex align-items-start gap-2 my-2"
              >
                <FaCheckCircle fill="#1b90c6" size={18} className="mt-1" />
                <span className={styles.valueText}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.servicesText}>
          <div className="mb-3">
            <h5 className={styles.serviceHeading}>{t("about.translationTitle")}</h5>
            <p className={styles.serviceDesc}>{t("about.translationDesc")}</p>
          </div>

          <div>
            <h5 className={styles.serviceHeading}>{t("about.consultingTitle")}</h5>
            <p className={styles.serviceDesc}>{t("about.consultingDesc")}</p>
          </div>
        </div>

        <div className={`${styles.cardWrapper} mt-4`}>
          <div className={styles.serviceCard}>
            <div className={styles.iconBox}>
              <MdGTranslate size={36} className="txt-colored" />
            </div>
            <div>
              <h5 className="m-0 fw-bold">{t("about.card1Title")}</h5>
              <p className={styles.cardDesc}>{t("about.card1Desc")}</p>
            </div>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.iconBox}>
              <HiAcademicCap size={34} className="txt-colored" />
            </div>
            <div>
              <h5 className="m-0 fw-bold">{t("about.card2Title")}</h5>
              <p className={styles.cardDesc}>{t("about.card2Desc")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ RIGHT: Image */}
      <div className={`col-lg-5 col-12 ${styles.imageSide}`}>
        <img
          src="/images/graduation.png"
          alt="graduation"
          className={styles.aboutImage}
        />
      </div>

    </div>
  </div>
</section>

  );
}
