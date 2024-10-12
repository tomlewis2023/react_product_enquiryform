import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HashRouter, Routes, Route } from "react-router-dom"; // Import HashRouter
import Errorpage from './Errorpage.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import ProductInquiry, { inquiryAction } from "./assets/components/Contact.jsx";
import Root from "./assets/components/Routes/Root.jsx";
import Home from "./assets/components/Home.jsx";

 // Ensure this imports your ProductInquiry component

const App = () => {
  return (
    <HashRouter>
      <Root />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ProductInquiry />} action={inquiryAction} />
        {/* Add more routes as needed */}
      </Routes>
      <Route path="*" element={<Errorpage/>} /> {/* Catch-all route for 404 errors */}
      {/* Error page should be handled as needed */}
    </HashRouter>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
