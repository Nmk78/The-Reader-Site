import React from "react";
import {
  FaPager,
  FaVideo,
  FaFacebook,
  FaTelegram,
  FaGithub,
  FaMailBulk,
  FaMailchimp,
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
              <a href="https://www.facebook.com/nmk135/">
                <FaFacebook size={25} style={{ color: "#fff" }} />{" "}
              </a>
            </li>
            <li>
              <a href="https://t.me/Nmk_telegram">
                <FaTelegram size={25} style={{ color: "#fff" }} />{" "}
              </a>
            </li>
            <li>
              <a href="https://github.com/Nmk78">
                <FaGithub size={25} style={{ color: "#fff" }} />{" "}
              </a>
            </li>
            <li>
              <a href="mailto:naymyokhant908@gmail.com">
                <FaMailBulk size={25} style={{ color: "#fff" }} />{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex col ">
        <div>Touch us here</div>
        <ul>
          <div className="flex space-x-3 ml-2" >
            <a href="https://www.facebook.com/profile.php?id=100063981378156">
              <FaPager size={25} style={{ color: "#fff" }} />{" "}
            </a>
            <FaVideo
              onClick={() => {
                alert(
                  "We meet every friday night through Zoom platform you can take part by the ID & Password  ID: 533880616  Password: WYT "
                );
              }}
              size={25}
              style={{ color: "#fff" }}
            />{" "}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
