import React from "react";
import { Carousel } from "3d-react-carousal";

import sample1 from "../Assets/sample1.png";
import sample2 from "../Assets/sample2.png";
import sample3 from "../Assets/sample3.png";
import sample4 from "../Assets/sample4.png";
import sample5 from "../Assets/sample5.png";
import sample6 from "../Assets/sample6.png";
import sample7 from "../Assets/sample7.png";

let slides = [
  <img src={sample1} alt="1" />,
  <img src={sample1} alt="2" />,
  // <img  src={sample3} alt="3" />,
  // <img  src={sample4} alt="4" />,
  <img src={sample5} alt="5" />,
  <img src={sample6} alt="6" />,
  <img src={sample7} alt="7" />,
];

const CarouselComponet = () => {
  return (
    <>
      <div className="h-240 pt-2 md:300 z-0">
        <Carousel  slides={slides} autoplay={true} interval={3500} />
      </div>
      <p className="my-10 text-4xl mx-auto">Our Talk</p>
    </>
  );
};

export default CarouselComponet;
