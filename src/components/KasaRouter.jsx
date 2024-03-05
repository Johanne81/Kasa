import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "../routes/about";
import Home from "../routes/home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/a-propos",
    element: <About />,
  },
  {
    path: "*",
    element: <div>Page non trouvée</div>,
  },
]);
const KasaRouter = () => {
    return (
      <RouterProvider router={router} />
    );
  };
export default KasaRouter;

