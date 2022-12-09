import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import HomeComponet2 from "../Componets/HomeComponet2";
import Participants from "../Componets/Participants";

import Aos from "aos";
import 'aos/dist/aos.css'

const About = () => {
  const navigate = useNavigate();
  useEffect(() =>{
    Aos.init({duration:2000})
  })
  return (
    <>
      <div data-aos='fade-right' className="text-xl m-10 z-index-3" id="about">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus iure
        iste saepe rerum, eum accusamus itaque tempora voluptas in veritatis id
        nobis vero officia ipsa quibusdam fuga magni omnis atque velit. Esse ea
        doloremque nihil vitae asperiores doloribus fugit commodi molestiae
        minus corrupti, beatae, nesciunt eveniet delectus? Mollitia, quas dicta.
      </div>

      <Participants />
    </>
  );
};

export default About;
