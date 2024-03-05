import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Page d'accueil</div>,
  },
  {
    path: "/a-propos",
    element: <div>A propos</div>,
  },
]);
const KasaRouter = () => {
    return (
      <RouterProvider router={router} />
    );
  };
export default KasaRouter;

