const COMPANY_PHONE = "201098396598";

export  function useRedirectToWhatsApp(){
  const redirectToWhatsApp = (message = "") => {
    const url = `https://wa.me/${COMPANY_PHONE}${
      message ? `?text=${encodeURIComponent(message)}` : ""
    }`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return { redirectToWhatsApp };
}

