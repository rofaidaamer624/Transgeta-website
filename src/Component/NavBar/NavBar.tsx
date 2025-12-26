import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/abfc1ea0-56f6-47a8-b323-afbc9719c964/cropped-WhatsApp_Image_2025-11-12_at_17-06-08_0162802e-remov (1).png";
import { useTranslation } from "react-i18next";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

export default function NavBar() {
  const { t, i18n } = useTranslation();
  const context = useContext(LanguageContext);

  if (!context) throw new Error("LanguageContext must be used within LanguageProvider");

  const { language, setLanguage } = context;
  const [nextLang, setNextLang] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setNextLang(language === "ar" ? "English" : "العربية");
  }, [language]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const changeLang = (lang: "en" | "ar") => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`custom-navbar ${scrolled ? "scrolled" : ""}`}
    >
      <Container fluid className="px-4">
        {/* LOGO */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={logo}
            alt="logo"
            className="navbar-logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          {/* CENTER LINKS */}
          <Nav className="mx-auto nav-center gap-4">
            <NavLink to="/" className="nav-item-custom">
              {t("nav.home")}
            </NavLink>
            <NavLink to="/service" className="nav-item-custom">
              {t("nav.Services")}
            </NavLink>
            <NavLink to="/about" className="nav-item-custom">
              {t("nav.About")}
            </NavLink>
            <NavLink to="/resources" className="nav-item-custom">
              {t("nav.Resources")}
            </NavLink>
            <NavLink to="/ethics" className="nav-item-custom">
              {t("nav.Ethics")}
            </NavLink>
            <NavLink to="/contact" className="nav-item-custom">
              {t("nav.Contact")}
            </NavLink>
          </Nav>

          {/* BUTTONS */}
          <div className="nav-actions d-flex gap-3 mt-3 mt-lg-0">
            <button className="btn btn-modern-primary">
              Pricing Request
            </button>
            <button
              className="btn btn-modern-outline"
              onClick={() =>
                changeLang(nextLang === "English" ? "en" : "ar")
              }
            >
              {nextLang}
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
