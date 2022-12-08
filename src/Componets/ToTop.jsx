import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ToTop = () => {
      // const navigate = useNavigate()
  return (
    <Link to="/" className="absolute">
      <button className=" text-white bg-gray-500 p-2 rounded-xl opacity-50 hover:opacity-95">
        To Top
      </button>
    </Link>
  );
};

export default ToTop;
