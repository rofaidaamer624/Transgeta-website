import { FaWhatsapp } from "react-icons/fa";
import { useRedirectToWhatsApp } from "../../Hooks/RedirectToWhat's/RedirectToWhatsApp";

export default function WhatsApp() {
   const { redirectToWhatsApp } = useRedirectToWhatsApp();
  return (
    <>
    <div onClick={()=>redirectToWhatsApp("Hello, I need support")} className="whatsAppIcon bg-success shadow d-flex justify-content-center align-items-center rounded-circle p-2">
    <FaWhatsapp fill="#fff"size={55}/>
    </div>
        </>
  )
}
