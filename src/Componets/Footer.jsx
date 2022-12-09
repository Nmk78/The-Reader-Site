import React from "react";
import {
  FaPager,
  FaVideo,
  FaFacebook,
  FaTelegram,
  FaGithub,
  FaMailBulk,
  FaMailchimp
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-10 flex h-20 items-center p-3 bg-neutral-300 place-content-between">
      <div>Create with Love</div>

      <div className="flex items-center flex-col">
        <div>Created by Nmk</div>

        <div className="m-1 flex">
          <ul className="flex space-x-1 ">
            <li>
              <a href="#">
                <FaFacebook size={25} style={{ color: "#fff" }} />{" "}
              </a>
            </li>
            <li>
              <a href="#">
                <FaTelegram size={25} style={{ color: "#fff" }} />{" "}
              </a>
            </li>
            <li>
              <a href="#">
                <FaGithub size={25} style={{ color: "#fff" }} />{" "}
              </a>
            </li>
            <li>
              <a href="#">
                <FaMailBulk size={25} style={{ color: "#fff" }} />{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex col ">
        <div>Touch us here</div>
        <ul>
          <a href="#" className="flex space-x-3">
            <FaPager size={25} style={{ color: "#fff" }} />{" "}
            <FaVideo size={25} style={{ color: "#fff" }} />{" "}
          </a>
        </ul>
      </div>
    </div>
  );
};



export default Footer;
