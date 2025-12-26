import { SlBadge } from "react-icons/sl";
import { LuFileSearch } from "react-icons/lu";
import { FaStaffSnake } from "react-icons/fa6";
import { BsBoxSeamFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import styles from "./Mission.module.css";

export default function Mission() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const missionCards = [
    {
      icon: <SlBadge size={26} />,
      title: t("about-us.mission.cards.accurateTranslations"),
    },
    {
      icon: <LuFileSearch size={26} />,
      title: t("about-us.mission.cards.expertConsultations"),
    },
    {
      icon: <FaStaffSnake size={26} />,
      title: t("about-us.mission.cards.fullPotential"),
    },
    {
      icon: <BsBoxSeamFill size={26} />,
      title: t("about-us.mission.cards.supportiveEnvironment"),
    },
  ];

  return (
    <section id="mission" className={`${styles.section} py-5`}>
      <div className="container">
        {/* Header */}
        <div className={`text-center mb-5 ${isArabic ? styles.rtl : ""}`}>
          <h2 className={styles.title}>{t("about-us.mission.title")}</h2>
          <p className={styles.subtitle}>{t("about-us.mission.subtitle")}</p>
        </div>

        {/* Mission Body */}
        <div className={`row justify-content-center ${isArabic ? styles.rtl : ""}`}>
          <div className="col-lg-10">
            <div className={styles.missionBox}>
              <p className={styles.paragraph}>{t("about-us.mission.paragraph")}</p>

              {/* Bullets */}
              <ul className={styles.list}>
                <li>{t("about-us.mission.bullets.b1")}</li>
                <li>{t("about-us.mission.bullets.b2")}</li>
                <li>{t("about-us.mission.bullets.b3")}</li>
                <li>{t("about-us.mission.bullets.b4")}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="row g-4 mt-4">
          {missionCards.map((card, index) => (
            <div className="col-lg-3 col-md-6 col-12" key={index}>
              <div className={styles.card}>
                <div className={styles.iconBox}>{card.icon}</div>
                <h5 className={styles.cardTitle}>{card.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
