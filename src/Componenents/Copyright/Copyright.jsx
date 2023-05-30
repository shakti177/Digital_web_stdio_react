import React from "react";
import "./Copyright.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

const Copyright = () => {
  return (
    <section id="copyright">
      <p>2019 - 2020 © Hiric - Shakti Tamrakar</p>
      <div className="social_icons">
        <FaFacebookF />
        <FaTwitter />
        <FaLinkedinIn />
        <FaGooglePlusG />
        <FaDribbble />
      </div>
    </section>
  );
};

export default Copyright;
