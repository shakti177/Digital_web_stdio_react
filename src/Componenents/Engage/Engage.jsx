import React from "react";
import "./Engage.css";
import { GoPrimitiveDot } from "react-icons/go";
import imgEngage from "../../Assests/growth-analytics.svg";

const Engage = () => {
  return (
    <section id="engage">
      <div className="engage_main">
        <div className="engage_left">
          <h2>A digital web design studio creating modern & engaging online</h2>
          <p>
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean.
          </p>
          <div className="engage_bullets">
            <p>
              <GoPrimitiveDot color="#1bbc9d" /> We put a lot of effort in
              design.
            </p>
            <p>
              <GoPrimitiveDot color="#1bbc9d" /> The most important ingredient
              of successful website.
            </p>
            <p>
              <GoPrimitiveDot color="#1bbc9d" /> Submit Your Orgnization.
            </p>
          </div>
          <button>
            Learn More
          </button>
        </div>
        <div className="engage_right">
          <img src={imgEngage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Engage;
