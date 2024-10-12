import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Errorpage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { inquiryAction } from "./assets/components/Contact.jsx";
import Root from "./assets/components/Routes/Root.jsx";
import Home from "./assets/components/Home.jsx";
import ProductInquiry from "./assets/components/Contact.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "", // Home path
        element: <Home />,
      },
      {
        path: "contact", // No leading slash here
        element: <ProductInquiry />,
        action: inquiryAction,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
