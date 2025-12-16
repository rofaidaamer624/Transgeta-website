import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MasterLayout from './Component/MasterLayout/MasterLayout';
import Ethics from './Pages/Ethics/Ethics';
import Home from './Pages/Home/Home';
import Service from './Component/Services/Service';
import Services from './Pages/Services/Services';
import Contact from './Pages/Contact/Contact';

function App() {
  const routes=createBrowserRouter([{
    path:'/',
    element:<MasterLayout/>,
    // errorElement:<NotFound/>,
    children:[
      {index:true,element:<Home/>},
      {path:"/ethics",element:<Ethics/>},
      {path:"/service",element:<Services/>},
      {path:"/service",element:<Service/>},
      {path:"/contact",element:<Contact/>}
    ]
}],

)
  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
