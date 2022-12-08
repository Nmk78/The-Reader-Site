import React from "react";
import { useNavigate } from "react-router-dom";
import HomeComponet2 from "../Componets/HomeComponet2";
import Participants from "../Componets/Participants";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="hidding">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus iure
        iste saepe rerum, eum accusamus itaque tempora voluptas in veritatis id
        nobis vero officia ipsa quibusdam fuga magni omnis atque velit. Esse ea
        doloremque nihil vitae asperiores doloribus fugit commodi molestiae
        minus corrupti, beatae, nesciunt eveniet delectus? Mollitia, quas dicta.
      </div>

      <HomeComponet2 />
      <Participants />
    </>
  );
};

export default About;
