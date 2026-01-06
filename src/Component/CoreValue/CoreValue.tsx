import { useTranslation } from "react-i18next";
import CoreValueCard from "../CoreValueCard/CoreValueCard";

export default function FlipCard() {
  const { t } = useTranslation();

  const values = [
    { iconKey: "accuracy", key: "accuracy" },
    { iconKey: "academic", key: "academic" },
    { iconKey: "integrity", key: "integrity" },
    { iconKey: "professional", key: "professional" },
    { iconKey: "growth", key: "growth" },
    { iconKey: "clarity", key: "clarity" },
    { iconKey: "collaboration", key: "collaboration" },
    { iconKey: "communication", key: "communication" },
    { iconKey: "inspiration", key: "inspiration" } // ✅ New
  ];

  return (
    <section id="coreValue">
      <div className="container">
        <div className="row g-3">

          {/* ✅ Section Title */}
          <h2 className="fw-bolder my-5 display-5 text-center">
            {t("coreValues.title")}
          </h2>

          {/* ✅ Cards */}
          {values.map((item, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch"
            >
              <CoreValueCard
                iconKey={item.iconKey}
                title={t(`coreValues.items.${item.key}.title`)}
                desc={t(`coreValues.items.${item.key}.desc`)}
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
