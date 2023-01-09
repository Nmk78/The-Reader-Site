import Logo from "../Assets/theReader.svg";
import { useEffect, useState } from "react";
import { NavLink, Link, useMatch, useResolvedPath } from "react-router-dom";

// import info from'../Text/info.json';

const Navigation = ({language,setLanguage}) => {

  // const [language, setLanguage] = useState("English");
  // const [article, setArticles] = useState({});

  // useEffect(() => {
    
  //   if (language === "English") {
  //     setArticles(info.English)
  //   }else if (language === "Myanmar") {
  //     setArticles(info.Myanmar)
  //   }


  // }, [])
  
  return (
    <nav className="sticky top-0 flex h-50 overflow-hidden items-center bg-white shadow-md justify-between mb-12 z-10 opacity-95 px-20">
      <Link to="/" className="site-title">
        <img src={Logo} alt="" className="w-80 m-4" />
      </Link>
      <ul className="flex h-full  mr-5 space-x-0.5 items-center text-center">
        <CustomLink
          to="/"
          className="flex items-center p-3 px-6 text-base h-full  hover:bg-gray-200 hover:rounded-b-md hover:drop-shadow-2xl focus:bg-gray-300 focus:rounded-b-md focus:drop-shadow-2xl"
        >
          Home
        </CustomLink>
        <CustomLink
          to="/about"
          // href='#about'
          className="flex items-center p-3 px-6 text-base h-full  hover:bg-gray-200 hover:rounded-b-md hover:drop-shadow-2xl focus:bg-gray-300 focus:rounded-b-md focus:drop-shadow-2xl"
        >
          About
        </CustomLink>
        <CustomLink
          to="/contact"
          // href='#contact'
          className="flex items-center p-3 px-6 text-base h-full  hover:bg-gray-200 hover:rounded-b-md hover:drop-shadow-2xl focus:bg-gray-300 focus:rounded-b-md focus:drop-shadow-2xl"
        >
          Contact
        </CustomLink>

        <CustomLink className="flex items-center p-2 px-6 text-base h-full bg-white  hover:bg-gray-200 hover:rounded-b-md hover:drop-shadow-2xl border:none">
          <select 
          value={language} 
           onChange={(e)=>{setLanguage(e.target.value)}}
           >
            <option>မြန်မာ</option>
            <option>English</option>
          </select>
        </CustomLink>
        
      </ul>
    </nav>
  );
  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    );
  }
  // <h1>Nav</h1>;
};

export default Navigation;
