import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Errorpage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { inquiryAction } from "./assets/components/Contact.jsx";
import Root from "./assets/components/Routes/Root.jsx";
import Home from "./assets/components/Home.jsx";
import ProductInquiry from "./assets/components/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/contact",
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
