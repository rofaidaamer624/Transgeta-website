import { useEffect, useState } from "react";
import axios from "axios";
import ServiceCard from "../ServiceCard/ServiceCard";
import { useTranslation } from "react-i18next";

const BASE_URL = "http://127.0.0.1:8000";
const FALLBACK_IMG = "/images/blogImage.jpg";

type Service = {
  id: number;
  name_ar: string;
  name_en: string;
  category: "translation" | "academic" | "religious";
  icon_url: string | null;
  short_description?: string;
};

export default function Services() {
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language === "ar";

  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/public/services`, {
        headers: { Accept: "application/json" },
      })
      .then((res) => {
        setServices(res.data.data.services);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching services:", err);
        setLoading(false);
      });
  }, []);

  // ✅ filter services by category
  const translationServices = services.filter(
    (s) => s.category === "translation"
  );
  const academicServices = services.filter((s) => s.category === "academic");
  const religiousServices = services.filter((s) => s.category === "religious");

  if (loading) return <p className="text-center py-5">{t("loading")}</p>;

  return (
    <section className="my-5">
      <div className="container my-5">
        {/* ✅ Translation */}
        <h2 className="fw-bolder my-5 display-5 text-center">
          {t("services.translation.title")}
        </h2>

        <div className="row justify-content-between text-center gy-4">
          {translationServices.map((service) => (
            <div key={service.id} className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                img={service.icon_url || FALLBACK_IMG}
                title={isArabic ? service.name_ar : service.name_en}
                bullets={[service.short_description || ""]}
                rating={5}
                buttonText={t("services.orderNow")}
              />
            </div>
          ))}
        </div>

        <hr className="my-5" />

        {/* ✅ Academic */}
        <h2 className="fw-bolder my-5 display-5 text-center">
          {t("services.academic.title")}
        </h2>

        <div className="row justify-content-between text-center gy-4">
          {academicServices.map((service) => (
            <div key={service.id} className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                img={service.icon_url || FALLBACK_IMG}
                title={isArabic ? service.name_ar : service.name_en}
                bullets={[service.short_description || ""]}
                rating={5}
                buttonText={t("services.orderNow")}
              />
            </div>
          ))}
        </div>

        <hr className="my-5" />

        {/* ✅ Religious */}
        <h2 className="fw-bolder my-5 display-5 text-center">
          {t("services.religious.title")}
        </h2>

        <div className="row justify-content-between text-center gy-4">
          {religiousServices.map((service) => (
            <div key={service.id} className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                img={service.icon_url || FALLBACK_IMG}
                title={isArabic ? service.name_ar : service.name_en}
                bullets={[service.short_description || ""]}
                rating={5}
                buttonText={t("services.orderNow")}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
