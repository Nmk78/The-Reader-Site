import About from "../Pages/About";
import Carosel from "./CarouselComponet";
import Contact from "./Contact";
import HomeComponet2 from "./HomeComponet2";


const Home = ({articles}) => {

  console.log(articles)


  return (
    <div className="flex flex-col content-between">
      <Carosel />
      <HomeComponet2 articles={articles} />

      <About articles={articles} />
      <Contact articles={articles} data-aos='fade-right'/>
    </div>
  );
};

export default Home;
