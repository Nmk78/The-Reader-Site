import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Componets/Home";
import Contact from "./Componets/Contact";
import Navigation from "./Componets/Navigation";
import Footer from "./Componets/Footer";
import ToTop from "./Componets/ToTop";

const App = () => {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      {/* <ToTop /> */}
      <Footer />
    </>
  );
};

export default App;
