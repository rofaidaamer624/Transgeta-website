import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MasterLayout from './Component/MasterLayout/MasterLayout';
import Ethics from './Pages/Ethics/Ethics';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import Contact from './Pages/Contact/Contact';
import Resources from './Pages/Resources/Resources';
import About from './Pages/About/About';

function App() {
  const routes=createBrowserRouter([{
    path:'/',
    element:<MasterLayout/>,
    // errorElement:<NotFound/>,
    children:[
      {index:true,element:<Home/>},
      {path:"/ethics",element:<Ethics/>},
      {path:"/resources",element:<Resources/>},
      {path:"/about",element:<About/>},
      {path:"/service",element:<Services/>},
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
