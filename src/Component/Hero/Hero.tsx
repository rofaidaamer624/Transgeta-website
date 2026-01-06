import styles from "./Home.module.css";
import logo from "../../assets/images/abfc1ea0-56f6-47a8-b323-afbc9719c964/tr-removebg-preview (1).png";
import heroBg from "../../assets/images/abfc1ea0-56f6-47a8-b323-afbc9719c964/hero-bg.jpg";

import CountUp from "react-countup";
import { GrCertificate } from "react-icons/gr";
import { FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <motion.section
      className={`${styles["hero-bg"]} ${styles.heroWrapper} text-white`}
      style={{ ["--hero-bg" as any]: `url(${heroBg})` }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={styles.overlay} />

      <div className="container position-relative">
        <div className="row justify-content-center text-center">
          <div className="col-xl-8 col-lg-9 col-12">

            <img src={logo} alt="TransGate" className={styles.heroLogo} />

            <h1 className={styles.heroTitle}>
              {t("hero.title.before")}{" "}
              <span className="txt-colored">{t("hero.title.brand")}</span>
            </h1>

            <div className={styles.heroStats}>
              <div className={styles.statCard}>
                <FaHandshake className={styles.statIcon} />
                <span className={styles.statNumber}>
                  <CountUp end={91} duration={3} suffix="+" />
                </span>
                <span className={styles.statLabel}>
                  {t("hero.stats.partnerships")}
                </span>
              </div>

              <div className={styles.statCard}>
                <GrCertificate className={styles.statIcon} />
                <span className={styles.statNumber}>
                  <CountUp end={7} duration={3} suffix="+" />
                </span>
                <span className={styles.statLabel}>
                  {t("hero.stats.experience")}
                </span>
              </div>
            </div>

            <p className={styles.heroDescription}>{t("hero.description")}</p>

            {/* ✅ CTA WhatsApp */}
            <a
              href="https://wa.me/201098396598?text=Hello%20I%20want%20to%20start%20now"
              target="_blank"
              rel="noopener noreferrer"
              className={`btn bg-colored text-white fw-semibold px-5 py-3 ${styles.heroBtn}`}
            >
              {t("hero.cta")}
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
