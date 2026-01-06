import styles from "./Professionalism.module.css";
import { useTranslation } from "react-i18next";

export default function Professionalism() {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row justify-content-center text-center">

          {/* Logo Badge */}
          <div className="col-12 d-flex justify-content-center mb-4">
            <div className={styles.logoBadge}>
              <img src="/images/tr-removebg-preview.png" alt="TransGate" className={styles.logo} />
            </div>
          </div>

          {/* Title */}
          <div className="col-lg-10 col-12">
            <h2 className={styles.title}>
              {t("professionalism.title")}
            </h2>
          </div>

          {/* Description */}
          <div className="col-lg-9 col-12">
            <p className={styles.desc}>
              {t("professionalism.desc")}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
