import React, { useEffect } from "react";
import Logo from '../Assets/Logo.jpg';

import Aos from "aos";
import 'aos/dist/aos.css'

const HomeComponet2 = () => {
  useEffect(() =>{
    Aos.init({duration:2000})
  })
  return (
    <div className="flex items-center content-evenly m-auto hidding">
      <div data-aos='fade-right' className="text-xl w-350">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet facere
        corrupti dolore reprehenderit similique. Nobis ipsam obcaecati in
        ducimus eveniet.
      </div>
      <div data-aos='fade-left' className="w-300 h-auto">
            <img src={Logo} alt="" />
      </div>
    </div>
  );
};

export default HomeComponet2;
