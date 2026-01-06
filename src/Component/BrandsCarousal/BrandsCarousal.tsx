import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./BrandsCarousal.module.css";
import { useTranslation } from "react-i18next";
import { getPartnerLogoUrl } from "../../utils/getPartnerLogoUrl";

const BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://api.transgateacd.com";

interface Partner {
  id: number;
  name: string;
  website_url: string | null;
  sort_order: number | null;
  logo_url?: string | null;
  logo_path?: string | null;
}

export default function BrandsCarousal() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/partners`)
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
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading partners</div>;
  if (!partners.length) return null;

  return (
    <section className={styles.section}>
      <div className={`container ${isArabic ? styles.rtl : ""}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t("partners.title")}</h2>
        </div>

        <Swiper
          className={styles.swiper}
          dir={isArabic ? "rtl" : "ltr"}
          breakpoints={{
            0: { slidesPerView: 2, spaceBetween: 12 },
            768: { slidesPerView: 3, spaceBetween: 16 },
            992: { slidesPerView: 5, spaceBetween: 18 },
          }}
          modules={[Autoplay]}
          loop
          speed={7000}
          autoplay={{ delay: 0, disableOnInteraction: false }}
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
                title={partner.name}
              >
                <div className={styles.logoBox}>
                  <img
                    src={partner.logo_url?.startsWith("http") ? partner.logo_url : getPartnerLogoUrl(partner.logo_path)}
                    alt={partner.name}
                    className={styles.logo}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        "/images/default-logo.png";
                    }}
                  />
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
