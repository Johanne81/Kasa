import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Error from "../pages/Error";
import FicheLogement from "../pages/FicheLogement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "*",
    element: <Error />,
  },
  {
    path: `/Fiche-Logement/:id`,
    element: <FicheLogement />,
  },
]);
const KasaRouter = () => {
  return <RouterProvider router={router} />;
};
export default KasaRouter;
