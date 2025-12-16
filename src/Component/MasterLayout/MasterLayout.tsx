 
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import WhatsApp from '../WhatsApp/WhatsApp'
import FreeTrans from '../FreeTrans/FreeTrans'

export default function MasterLayout() {
  return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    <WhatsApp/>
    <FreeTrans/>
    </>
  )
}
