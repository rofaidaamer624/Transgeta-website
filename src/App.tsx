import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MasterLayout from './Component/MasterLayout/MasterLayout';
import Ethics from './Pages/Ethics/Ethics';
import Home from './Pages/Home/Home';

function App() {
  const routes=createBrowserRouter([{
    path:'/',
    element:<MasterLayout/>,
    children:[
      {index:true,element:<Home/>},
      {path:"/ethics",element:<Ethics/>}
    ]
}])
  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
