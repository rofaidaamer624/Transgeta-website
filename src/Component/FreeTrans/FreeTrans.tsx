import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useTranslation } from "react-i18next";
// import emailjs from "@emailjs/browser"; ✅ مش مستخدم حالياً
import logo from "../../assets/images/abfc1ea0-56f6-47a8-b323-afbc9719c964/tr-removebg-preview (1).png";

/* ✅ Types */
type FormDataType = {
  name: string;
  email: string;
  mobile: string;
  file: File | null;
};

type ErrorsType = {
  name?: string;
  email?: string;
  mobile?: string;
  file?: string;
};

export default function FreeTrans() {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === "en";

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    mobile: "",
    file: null,
  });

  const [errors, setErrors] = useState<ErrorsType>({});
  const [msg, setMsg] = useState("");

  const handleClose = () => {
    setShow(false);
    setErrors({});
    setMsg("");
  };

  const handleShow = () => setShow(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    if (name === "file") {
      const file = files?.[0];

      if (file) {
        // ✅ Limit file size to 5MB
        if (file.size > 5 * 1024 * 1024) {
          setErrors((prev) => ({
            ...prev,
            file: "File must be less than 5MB",
          }));
          return;
        }

        setErrors((prev) => ({ ...prev, file: "" }));
        setFormData((prev) => ({
          ...prev,
          file,
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const validate = () => {
    const newErrors: ErrorsType = {};

    if (!formData.name.trim()) newErrors.name = t("freeTrans.form.errors.name");
    if (!formData.email.trim()) newErrors.email = t("freeTrans.form.errors.email");
    if (!formData.mobile.trim()) newErrors.mobile = t("freeTrans.form.errors.mobile");
    if (!formData.file) newErrors.file = t("freeTrans.form.errors.file");

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ API base URL from env
  const API_URL = import.meta.env.VITE_API_URL || "https://api.transgateacd.com/api";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg("");

    if (!validate()) return;

    try {
      setLoading(true);

      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("mobile", formData.mobile);
      form.append("file", formData.file!);

    const res = await fetch(`${API_URL}/free-translation`, {
  method: "POST",
  body: form,
  headers: {
    Accept: "application/json",
  },
});


      // ✅ Safe handling for JSON or text response
      const text = await res.text();
      let data: any = {};
      try {
        data = JSON.parse(text);
      } catch {
        data = { message: text };
      }

      if (!res.ok) throw new Error(data?.message || "Failed");

      setMsg("✅ Sent successfully!");
      setFormData({ name: "", email: "", mobile: "", file: null });
    } catch (err: any) {
      console.log(err);
      setMsg(`❌ Failed to send: ${err?.message || ""}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="freeTransContainer">
      <Button className="rounded-pill shadow" variant="primary" onClick={handleShow}>
        {t("freeTrans.btn")}
      </Button>

      <Modal show={show} centered onHide={handleClose}>
        <Modal.Header closeButton />

        <Modal.Body className={`text-center ${isEnglish ? "" : "text-end"}`}>
          <img src={logo} width={140} height={140} alt="logo" />

          <h2 className="fw-bold mt-3">{t("freeTrans.title")}</h2>
          <p className="text-muted fs-6 fw-light px-3">{t("freeTrans.subtitle")}</p>

          {msg && <div className="alert alert-info mt-3">{msg}</div>}

          <form
            onSubmit={handleSubmit}
            dir={isEnglish ? "ltr" : "rtl"}
            className="mt-4 text-start"
          >
            {/* Name */}
            <div className="mb-3">
              <label className="form-label">{t("freeTrans.form.name")}</label>
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("freeTrans.form.namePlaceholder")}
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label">{t("freeTrans.form.email")}</label>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("freeTrans.form.emailPlaceholder")}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            {/* Mobile */}
            <div className="mb-3">
              <label className="form-label">{t("freeTrans.form.mobile")}</label>
              <input
                type="tel"
                className={`form-control ${errors.mobile ? "is-invalid" : ""}`}
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder={t("freeTrans.form.mobilePlaceholder")}
              />
              {errors.mobile && <div className="invalid-feedback">{errors.mobile}</div>}
            </div>

            {/* File */}
            <div className="mb-3">
              <label className="form-label">{t("freeTrans.form.file")}</label>
              <input
                type="file"
                name="file"
                accept="*"
                className={`form-control ${errors.file ? "is-invalid" : ""}`}
                onChange={handleChange}
              />
              {errors.file && <div className="invalid-feedback">{errors.file}</div>}
            </div>

            <div className="d-flex justify-content-center gap-2 mt-3">
              <Button type="submit" disabled={loading}>
                {loading ? "Sending..." : t("freeTrans.form.submit")}
              </Button>

              <Button variant="secondary" onClick={handleClose}>
                {t("freeTrans.form.close")}
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
