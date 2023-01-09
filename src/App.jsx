import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Componets/Home";
import Contact from "./Componets/Contact";
import Navigation from "./Componets/Navigation";
import Footer from "./Componets/Footer";
import ToTop from "./Componets/ToTop";

import info from'./Text/info.json';

const App = () => {

  const [language, setLanguage] = useState("မြန်မာ");
  const [articles, setArticles] = useState({});

  useEffect(() => {
    
    if (language == "English") {
      setArticles(info.English)
    }else if (language == "မြန်မာ") {
      setArticles(info.Myanmar)
    }


  }, [language])

  return (
    <>
      <Navigation language={language} setLanguage={setLanguage} />

      <Routes>
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/" element={<Home articles={articles} />} />
        <Route path="/about" element={<About articles={articles} />} />
        <Route path="/contact" element={<Contact articles={articles} />} />
      </Routes>
      
      {/* <ToTop /> */}
      <Footer />
    </>
  );
};

export default App;
