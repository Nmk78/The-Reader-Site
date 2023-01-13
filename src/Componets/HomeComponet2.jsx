import React, { useEffect } from "react";
import Logo from '../Assets/Logo.jpg';

import Aos from "aos";
import 'aos/dist/aos.css'

// let english = "English";

let a = true;

const HomeComponet2 = (props) => {
  useEffect(() =>{
    Aos.init({duration:2000})
  })

  return (
    <div className="flex items-center justify-center content-evenly m-auto hidding">
      <div data-aos='fade-right' className="text-sm font-semibold ml-1/5 w-2/5">
        {props.articles.intro}
      </div>
      <div data-aos='fade-left' className="w-2/5 mr-1/5 h-auto">
            <img src={Logo} alt="" />
      </div>
    </div>
  );
};

export default HomeComponet2;
