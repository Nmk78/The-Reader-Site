import React from "react";
import { useNavigate, Link } from "react-router-dom";
import About from "../Pages/About";
import Carosel from "./CarouselComponet";
import Contact from "./Contact";
import HomeComponet2 from "./HomeComponet2";


const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col content-between">
      <Carosel  />
      <HomeComponet2 />

      <About />
      <Contact data-aos='fade-right'/>
    </div>
  );
};

export default Home;

