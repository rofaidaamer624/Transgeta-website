import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./BrandsCarousal.module.css";

const API_BASE_URL = "http://127.0.0.1:8000/api";
const FILE_BASE_URL = "http://127.0.0.1:8000";

interface Partner {
  id: number;
  name: string;
  website_url: string | null;
  sort_order: number | null;

  // بعض الـ APIs بترجع ده:
  logo_url?: string | null;

  // وبعضها (بعد التعديل اللي اتفقنا عليه) بترجع ده:
  logo_path?: string | null;
}

function getPartnerLogo(partner: Partner) {
  // 1) لو backend بيرجع logo_url كامل
  if (partner.logo_url && partner.logo_url.startsWith("http")) {
    return partner.logo_url;
  }

  // 2) لو backend بيرجع logo_path (اسم ملف فقط)
  if (partner.logo_path) {
    return `${FILE_BASE_URL}/files/partners/${partner.logo_path}`;
  }

  // 3) fallback
  return "/images/default-logo.png";
}

export default function BrandsCarousal() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/partners`)
      .then((response) => {
        const list =
          response.data?.data?.partners ||
          response.data?.data ||
          response.data ||
          [];
        setPartners(list);
      })
      .catch((e) => {
        console.error("Failed to load partners:", e);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // ✅ Loading UI
  if (loading) {
    return (
      <section className={styles.section}>
        <div className="container">
          <div className={styles.header}>
            <h2 className={styles.title}>Our Partners</h2>
            <p className={styles.subtitle}>
              Trusted by organizations around the world
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-12">
              <div className={styles.skeletonGrid}>
                {Array.from({ length: 6 }).map((_, idx) => (
                  <div key={idx} className={styles.skeletonCard}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ✅ Error UI
  if (error) {
    return (
      <section className={styles.section}>
        <div className="container text-center">
          <div className={styles.header}>
            <h2 className={styles.title}>Our Partners</h2>
            <p className={styles.subtitle}>
              Trusted by organizations around the world
            </p>
          </div>

          <div className={styles.errorBox}>
            <p className="m-0">Failed to load partners. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  if (!partners.length) return null;

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Our Partners</h2>
          <p className={styles.subtitle}>
            Trusted by organizations and institutions across multiple sectors
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-12">
            <Swiper
              className={styles.swiper}
              breakpoints={{
                0: { slidesPerView: 2, spaceBetween: 14 },
                768: { slidesPerView: 3, spaceBetween: 18 },
                992: { slidesPerView: 5, spaceBetween: 22 },
              }}
              modules={[Autoplay]}
              loop={true}
              loopAdditionalSlides={10}
              speed={4500} // ✅ smoother
              autoplay={{
                delay: 0, // ✅ continuous
                disableOnInteraction: false,
                pauseOnMouseEnter: true, // ✅ hover pause
              }}
              allowTouchMove={true}
            >
              {partners.map((partner) => (
                <SwiperSlide key={partner.id}>
                  <a
                    className={styles.partnerCard}
                    href={partner.website_url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (!partner.website_url) e.preventDefault();
                    }}
                  >
                    <div className={styles.logoBox}>
                      <img
                        src={getPartnerLogo(partner)}
                        alt={partner.name}
                        className={styles.logo}
                        loading="lazy"
                      />
                    </div>

                    {/* ✅ Partner Name */}
                    <p className={styles.partnerName}>{partner.name}</p>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
