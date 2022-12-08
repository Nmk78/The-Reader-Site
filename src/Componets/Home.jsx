import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Carosel from "./CarouselComponet";
import HomeComponet2 from "./HomeComponet2";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col content-between">
      <Carosel />
      <HomeComponet2 />
    </div>
  );
};

export default Home;

