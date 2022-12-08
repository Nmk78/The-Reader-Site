import Logo from "../Assets/Logo.png";

import { NavLink, Link, useMatch, useResolvedPath } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="sticky top-0 flex h-50 items-center bg-white shadow-md justify-between mb-12 z-10 opacity-95">
      <Link to="/" className="site-title">
        <img src={Logo} alt="" className="w-50 m-4" />
      </Link>
      <ul className="flex h-full  mr-5 space-x-4 items-center text-center">
        <CustomLink
          to="/"
          className="flex items-center p-3 text-base h-full  hover:bg-gray-200 hover:rounded-b-md hover:drop-shadow-2xl focus:bg-gray-300 focus:rounded-b-md focus:drop-shadow-2xl"
        >
          Home
        </CustomLink>
        <CustomLink
          to="/about"
          className="flex items-center p-3 text-base h-full  hover:bg-gray-200 hover:rounded-b-md hover:drop-shadow-2xl focus:bg-gray-300 focus:rounded-b-md focus:drop-shadow-2xl"
        >
          About
        </CustomLink>
        <CustomLink
          to="/contact"
          className="flex items-center p-3 text-base h-full  hover:bg-gray-200 hover:rounded-b-md hover:drop-shadow-2xl focus:bg-gray-300 focus:rounded-b-md focus:drop-shadow-2xl"
        >
          Contact
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

    /* <nav className="sticky top-0 flex h-50 items-center bg-white shadow-md justify-between mb-12 z-10">
        <Link to='/'>
          <img src={Logo} alt="Logo" className="w-50 m-4" />
        </Link>

        <NavLink className="flex h-full text-center items-center">
          <ul className=" flex h-full  mr-5 space-x-4 items-center text-center ">
            <Link to="/">
              <button className="flex items-center p-3 text-base h-full  hover:bg-gray-200 hover:rounded-b-md hover:drop-shadow-2xl focus:bg-gray-300 focus:rounded-b-md focus:drop-shadow-2xl">
                Home
              </button>
            </Link>
            <Link to="/about">
              <button className="flex items-center p-3 text-base h-full  hover:bg-gray-200 hover:rounded-b-md hover:drop-shadow-2xl focus:bg-gray-300 focus:rounded-b-md focus:drop-shadow-2xl">
                About
              </button>
            </Link>
            <Link to="/contact">
              <button className="flex items-center p-3 text-base h-full  hover:bg-gray-200 hover:rounded-b-md hover:drop-shadow-2xl focus:bg-gray-300 focus:rounded-b-md focus:drop-shadow-2xl">
                Contact
              </button>
            </Link>
          </ul>
        </NavLink>
      </nav> */
  }
  <h1>Nav</h1>;
};

export default Navigation;
