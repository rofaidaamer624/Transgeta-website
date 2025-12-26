import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
import { FaHandshake, FaUserGraduate, FaUsers, FaLanguage } from "react-icons/fa";
import styles from "./Achievement.module.css";

export default function Achievement() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const achievements = [
    {
      icon: <FaHandshake size={24} />,
      value: 50,
      label: t("about-us.achievement.partners"),
      suffix: "+",
    },
    {
      icon: <FaUserGraduate size={24} />,
      value: 500,
      label: t("about-us.achievement.academicConsultations"),
      suffix: "+",
    },
    {
      icon: <FaUsers size={24} />,
      value: 900,
      label: t("about-us.achievement.clients"),
      suffix: "+",
    },
    {
      icon: <FaLanguage size={24} />,
      value: 700,
      label: t("about-us.achievement.translatedProjects"),
      suffix: "+",
    },
  ];

  return (
    <section className={`${styles.achievementSection} my-5 py-5 `}>
      <div className="container">
        <div className={`text-center mb-4 ${isArabic ? styles.rtl : ""}`}>
          <h2 className={styles.title}>{t("about-us.achievement.title")}</h2>
          <p className={styles.subtitle}>{t("about-us.achievement.subtitle")}</p>
        </div>

        <div className="row g-4">
          {achievements.map((item, index) => (
            <div className="col-lg-3 col-md-6 col-12" key={index}>
              <div className={styles.achievementCard}>
                <div className={styles.iconBox}>{item.icon}</div>

                <CountUp
                  className={styles.value}
                  start={0}
                  end={item.value}
                  duration={3}
                  delay={0.4}
                  separator=","
                  suffix={item.suffix}
                />

                <p className={styles.label}>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
