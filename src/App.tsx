import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MasterLayout from "./Component/MasterLayout/MasterLayout";
import Ethics from "./Pages/Ethics/Ethics";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
import Resources from "./Pages/Resources/Resources";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import SingleBlog from "./Pages/SingleBlog/SingleBlog";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function App() {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MasterLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "ethics", element: <Ethics /> },
        { path: "resources", element: <Resources /> },
        { path: "about", element: <About /> },
        { path: "service", element: <Services /> },
        { path: "contact", element: <Contact /> },


{ path: "articles/:id", element: <SingleBlog /> },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
