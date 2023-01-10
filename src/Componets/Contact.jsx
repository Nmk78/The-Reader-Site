import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaMailBulk,
  FaPager,
  FaTelegram,
  FaVideo,
} from "react-icons/fa";

const Contact = ({articles}) => {
  // console.log(articles)
  return (
    <div className="h-screen bg-gray-100 m-0 flex flex-col align-center items-center justify-center">
      <span className="text-xxl flex justify-center align-center mx-20 my-20 ">
        {articles.contact}
      </span>

      <div className="flex ">
        <div className="m-1 flex">
          <ul className="flex space-x-3 ">
            <li>
              <a href="https://www.facebook.com/nmk135/">
                <FaFacebook size={50} style={{ color: "#666666" }} />{" "}
              </a>
            </li>
            <li>
              <a href="https://t.me/Nmk_telegram">
                <FaTelegram size={50} style={{ color: "#666666" }} />{" "}
              </a>
            </li>
            <li>
              <a href="https://github.com/Nmk78">
                <FaGithub size={50} style={{ color: "#666666" }} />{" "}
              </a>
            </li>
            <li>
              <a href="mailto:naymyokhant908@gmail.com">
                <FaMailBulk size={50} style={{ color: "#666666" }} />{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
