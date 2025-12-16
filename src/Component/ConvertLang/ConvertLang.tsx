import ReactCountryFlag from "react-country-flag";
import { FaArrowsAltH } from "react-icons/fa";


export default function ConvertLang({fromLang,toLang}: { fromLang: string; toLang: string }) {
  return (
    <>
    <div className="card">
  <div className="card-body">
    <div className="row w-auto ">
        <div className="col-auto my-3">
            <div className="bg-body-secondary rounded-5 px-2 py-1 d-flex flex-wrap gap-2">
      <ReactCountryFlag
        countryCode="EG"
        svg
        title="Egypt"
        className="rounded-2"
      />
            <ReactCountryFlag
        countryCode="EG"
        svg
        title="Egypt"
                className="rounded-2"
      />
            </div>
        </div>

    </div>
    <h5 className="card-title">{fromLang} <FaArrowsAltH/> {toLang}</h5>
    <p className="card-text">
     Accurate translation for documents, websites, legal and business content between Arabic and English
     </p>
  </div>
</div>
    </>
  )
}
