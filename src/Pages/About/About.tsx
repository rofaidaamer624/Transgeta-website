import Breadcrumb from "../../Component/Breadcrumb/Breadcrumb";
import styles from "./About.module.css";
import Achievement from "../../Component/Achievement/Achievement";
import CoreValue from "../../Component/CoreValue/CoreValue";
import Mission from "../../Component/Mission/Mission";
import Vision from "../../Component/Vision/Vision";
import AnimatedProgressBar from "../../Component/ProgressBar/ProgressBar";

import { FaBullseye, FaUserShield, FaClock, FaGraduationCap } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const coreValues = [
    {
      title: t("about-us.coreValues.accuracy"),
      icon: <FaBullseye size={22} />,
    },
    {
      title: t("about-us.coreValues.academicExcellence"),
      icon: <FaGraduationCap size={22} />,
    },
    {
      title: t("about-us.coreValues.deadlines"),
      icon: <FaClock size={22} />,
    },
    {
      title: t("about-us.coreValues.integrity"),
      icon: <FaUserShield size={22} />,
    },
  ];

  return (
    <>
      <Breadcrumb pageName={t("about-us.pageName")} />

      <section className={`py-5 ${styles.aboutSection}`}>
        <div className="container">

          {/* Hero Header */}
          <div className="row align-items-center g-4 mb-5">
            <div className="col-lg-5 d-lg-block d-none">
              <div className={`${styles.imageWrapper}`}>
                <img src="/images/aboutImg.jpg" className="w-100" alt="about" />
              </div>
            </div>

            <div className="col-lg-7">
              <div className={`${styles.aboutCard}`}>
                <div
                  className={`d-flex align-items-center gap-3 flex-wrap ${
                    isArabic ? "justify-content-end" : "justify-content-between"
                  }`}
                >
                  <div className="d-flex align-items-center gap-3">
                    <img src="/images/tr.jpg" className={`${styles.logo}`} alt="logo" />
                    <div>
                      <h2 className={`${styles.title}`}>{t("about-us.title")}</h2>
                      <p className={`${styles.subtitle}`}>{t("about-us.subtitle")}</p>
                    </div>
                  </div>
                </div>

                {/* About Content */}
                <div className={`mt-4 ${isArabic ? styles.rtl : ""}`}>
                  <p className={styles.paragraph}>{t("about-us.paragraph1")}</p>
                  <p className={styles.paragraph}>{t("about-us.paragraph2")}</p>
                  <p className={styles.paragraph}>{t("about-us.paragraph3")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="row mb-5">
            <div className="col-12">
              <h3 className={styles.sectionTitle}>{t("about-us.coreValuesTitle")}</h3>
            </div>

            {coreValues.map((value, index) => (
              <div className="col-lg-3 col-md-6 col-12 mb-3" key={index}>
                <div className={styles.valueCard}>
                  <div className={styles.valueIcon}>{value.icon}</div>
                  <h5 className="mt-3">{value.title}</h5>
                </div>
              </div>
            ))}
          </div>

          {/* Metrics (تحت بعض) */}
          <div className="row mb-5">
            <div className="col-lg-6 col-md-10 col-12">
              <div className={`${styles.metricsCard} ${isArabic ? styles.rtl : ""}`}>
                <h4 className={styles.metricsTitle}>{t("about-us.metricsTitle")}</h4>

                <div className="d-flex flex-column gap-3 mt-4">
                  <AnimatedProgressBar label={t("about-us.metrics.clientSatisfaction")} value={99} />
                  <AnimatedProgressBar label={t("about-us.metrics.onTimeDelivery")} value={100} />
                  <AnimatedProgressBar label={t("about-us.metrics.costEfficiency")} value={98} />
                  <AnimatedProgressBar label={t("about-us.metrics.responseTime")} value={100} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Existing sections */}
        <Achievement />
        <CoreValue />
        <Mission />
        <Vision />
      </section>
    </>
  );
}
