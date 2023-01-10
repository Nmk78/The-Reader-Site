import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import HomeComponet2 from "../Componets/HomeComponet2";
import Participants from "../Componets/Participants";

import Aos from "aos";
import 'aos/dist/aos.css'

const About = (props) => {
  const navigate = useNavigate();
  useEffect(() =>{
    Aos.init({duration:2000})
  })
  // console.log(props)
  return (
    <>
      <div data-aos='fade-right' className="text-sm w-full md:text-xl px-6 mx-auto my-10 z-index-3" >
      {props.articles.about}
      </div>

      <Participants />
    </>
  );
};

export default About;
