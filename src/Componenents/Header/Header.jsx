import React from "react";
import "./Header.css";
import { RiAliensFill } from "react-icons/ri";

const Header = () => {
  return (
    <section id="header">
      <div className="logo">
        <RiAliensFill size="20px" color="#393f4f" />
        <p>HIRIC</p>
      </div>
      <div className="menuitems">
        <ul>
          <li>
            <a href="#header">Home</a>
          </li>
          <li>
            <a href="#Features">Features</a>
          </li>
          <li>
            <a href="#Services">Services</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Pricing">Pricing</a>
          </li>
          <li>
            <a href="#Blog">Blog</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="headerButton">
        <button>Try it Free</button>
      </div>
    </section>
  );
};

export default Header;
