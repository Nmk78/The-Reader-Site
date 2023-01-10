import Logo from "../Assets/theReader.svg";
import { NavLink, Link, useMatch, useResolvedPath } from "react-router-dom";
import { VscBook } from "react-icons/vsc";
import { useState } from "react";

const Navigation = ({ language, setLanguage }) => {
  let ul = document.querySelector("ul");

  const [open, setOpen] = useState(false);

  let menuToggler = () => {
    // open === true
    //   ? (ul.classList.add("top-[-260px], absolute"),
    //     console.log(open),
    //     ul.classList.remove("relative"),
    //     setOpen(false))
    //   : ul.classList.add("top-[0px]", "relative", setOpen(true)),
    // console.log(open), ul.classList.remove("absolute");
    // return open;

    if (open) {
      //to close the menu //to slide up the menu
      ul.classList.remove("relative","top-[3px]", "top-[-180px]");
      ul.classList.add("absolute","top-[-300px]" );
      console.log(open);
      setOpen(false);
      // return open;
    }else{
      //to open the menu //to slide down the menu
      ul.classList.remove("absolute","top-[-300px]", "top[-180px");
      ul.classList.add("relative","top-[3px]");
      console.log(open);
      setOpen(true);
      // return open;

    }
  };

  return (
    <nav className=" transition-all ease-in duration-3000 overflow-hidden items-center sticky top-0 bg-white z-100 w-full h-auto shadow-md md:justify-between md:flex">
      {/* className="sticky w-full top-0 flex h-50 overflow-hidden items-center bg-white shadow-md justify-between mb-12 z-10 opacity-95 px-20"> */}

      <Link to="/" className="site-title inline flex w-80 my-0 md:w-90 ">
        <img src={Logo} alt="" className="w-80 m-4 my-0 md:w-90" />
      </Link>
      <VscBook
        onClick={menuToggler}
        className="cursor-pointer inline w-10 h-10 absolute z-50 md:static md:hidden top-5 right-8"
      />

      <ul
        className="z-100 opacity-100 text:center absolute md:relative top-[-180px] transition-all ease-in duration-3000 md:h-full mx-l-auto bg-white w-full md:static md:flex md:items-center md:space-x-0.5 md:justify-end"
        //have to change thsi absolute to relative and set top to 0
        // className="flex h-full mr-5 space-x-0.5 items-center text-center"
      >
        <CustomLink
          to="/"
          className="flex justify-end items-center p-3 pr-12 md:px-6 text-base h-full  hover:bg-gray-200 hover:rounded-b-md hover:drop-shadow-2xl focus:bg-gray-300 focus:rounded-b-md focus:drop-shadow-2xl"
        >
          Home
        </CustomLink>
        <CustomLink
          to="/about"
          // href='#about'
          className="flex justify-end items-center p-3 pr-12 md:px-6 text-base h-full  hover:bg-gray-200 hover:rounded-b-md hover:drop-shadow-2xl focus:bg-gray-300 focus:rounded-b-md focus:drop-shadow-2xl"
        >
          About
        </CustomLink>
        <CustomLink
          to="/contact"
          // href='#contact'
          className="flex justify-end items-center p-3 pr-12 md:px-6 text-base h-full  hover:bg-gray-200 hover:rounded-b-md hover:drop-shadow-2xl focus:bg-gray-300 focus:rounded-b-md focus:drop-shadow-2xl"
        >
          Contact
        </CustomLink>

        <CustomLink className="flex justify-end items-center p-2 pr-12 md:px-6 text-base h-full bg-white  hover:bg-gray-200 hover:rounded-b-md hover:drop-shadow-2xl border:none md:order-1">
          <select
            value={language}
            onChange={(e) => {
              setLanguage(e.target.value);
            }}
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
