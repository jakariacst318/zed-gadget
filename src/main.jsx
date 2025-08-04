import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ToastContainer } from "react-toastify";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./compoment/Root/Root";
import ErrorElement from "./compoment/ErrorElement/ErrorElement";
import Home from "./compoment/Home/Home";
import Dashboard from "./compoment/Dashboard/Dashboard";
import GadgetsDetail from "./compoment/GadgetsDetail/GadgetsDetail";
import DbText from "./compoment/DbText/DbText";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/gadget/:id",
        element: <GadgetsDetail></GadgetsDetail>,
        loader: () => fetch("/zedGadget.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch("zedGadget.json"),
      },
      // {
      //   path: "/DbText",
      //   element: <DbText></DbText>,
      // },
    ],
  },
  {
    path: "/textContain",
    element: <DbText></DbText>,
    loader: () => fetch('http://localhost:5000/textContain')
  },
  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);
