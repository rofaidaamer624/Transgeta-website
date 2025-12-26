import { useState } from "react";
import styles from "./Testmonial.module.css";
import quoteIcon from "../../assets/images/abfc1ea0-56f6-47a8-b323-afbc9719c964/image (5).svg";
import sideLogo from "../../assets/images/abfc1ea0-56f6-47a8-b323-afbc9719c964/Untitled_design__14_-removebg-preview.png";
import { Carousel } from "react-bootstrap";
import { useTranslation } from "react-i18next";

type CSSVar = React.CSSProperties & {
  ["--side-logo"]?: string;
};

export default function Testmonial() {
  const [index, setIndex] = useState(0);
  const { t } = useTranslation();

  const testimonials = [
    {
      text: t("testimonials.items.0.text"),
      name: t("testimonials.items.0.name"),
      role: t("testimonials.items.0.role"),
    },
    {
      text: t("testimonials.items.1.text"),
      name: t("testimonials.items.1.name"),
      role: t("testimonials.items.1.role"),
    },
    {
      text: t("testimonials.items.2.text"),
      name: t("testimonials.items.2.name"),
      role: t("testimonials.items.2.role"),
    },
  ];

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const bgStyle: CSSVar = {
    "--side-logo": `url(${sideLogo})`,
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8 col-12">
            <h2 className={styles.title}>{t("testimonials.title")}</h2>
            <p className={styles.subtitle}>{t("testimonials.subtitle")}</p>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-xl-10 col-12">
            <div className={styles.wrapper} style={bgStyle}>
              <img src={quoteIcon} className={styles.quoteBg} alt="" aria-hidden="true" />

              <div className="row align-items-center gy-4">
                <div className="col-lg-3 col-12 text-center text-lg-start">
                  <div className={styles.quoteIconBox}>
                    <img src={quoteIcon} alt="quote" className={styles.quoteIcon} />
                  </div>
                </div>

                <div className="col-lg-9 col-12">
                  <Carousel
                    activeIndex={index}
                    onSelect={handleSelect}
                    indicators={false}
                    controls={false}
                    interval={5000}
                    pause="hover"
                  >
                    {testimonials.map((item, idx) => (
                      <Carousel.Item key={idx}>
                        <div className={styles.testimonialCard}>
                          <p className={styles.text}>“{item.text}”</p>

                          <div className={styles.footer}>
                            <div>
                              <h5 className={styles.name}>{item.name}</h5>
                              <span className={styles.role}>{item.role}</span>
                            </div>

                            <div className={styles.smallQuote}>
                              <img src={quoteIcon} alt="" aria-hidden="true" />
                            </div>
                          </div>
                        </div>
                      </Carousel.Item>
                    ))}
                  </Carousel>

                  <div className={styles.dots}>
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        className={`${styles.dot} ${index === i ? styles.active : ""}`}
                        onClick={() => setIndex(i)}
                        aria-label={`testimonial-${i}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
