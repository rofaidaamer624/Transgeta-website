import CardImg from '../../assets/images/abfc1ea0-56f6-47a8-b323-afbc9719c964/2150171443-rf86nxhh3rt5vs1e605rcz3im306zc7orcn8kj75hs.jpg'
import { useRedirectToWhatsApp } from '../../Hooks/RedirectToWhat\'s/RedirectToWhatsApp'
export default function ServiceCard() {
  const {redirectToWhatsApp}=useRedirectToWhatsApp();
  return (
    <>
    <div className="card p-3 border-0 shadow rounded-0">
  <img src={CardImg} className="card-img-top rounded-0" alt="..."/>
  <div className="card-body text-start">
    <h5 className="card-title">Tourism Translation</h5>
    <ul className='text-muted'>
        <li>Translation of tourism and hotel websites.</li>
        <li>Translation of promotional and advertising materials for tourism.</li>
        <li>Translation of brochures, leaflets, and tourist booklets.</li>
        <li>Translation of hotel and airline booking platforms.</li>
        <li>Translation of guidelines and other tourism-related documents into multiple languages.</li>
    </ul>
    <a onClick={()=>redirectToWhatsApp("Hello!, I need help")} className="btn btn-primary">Order Now</a>
  </div>
</div>
    </>
  )
}
