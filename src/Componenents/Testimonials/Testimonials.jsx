import React from "react";
import "./Testimonials.css";
import { FaQuoteLeft } from "react-icons/fa";
import team1 from "../../Assests/user-1.jpg";
import team2 from "../../Assests/user-2.jpg";
import team3 from "../../Assests/user-3.jpg";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="testimonials_main">
        <div className="testimonials_heading">
          <h2>WHAT THEY'VE SAID</h2>
          <hr />
          <p>
            The Big Oxmox advised her not to do so, because there were thousands
            of bad Commas, wild Question Marks and devious Semikoli.
          </p>
        </div>

        {/* box 1 */}

        <div className="testimonials_boxes">
          <div className="testimonials_row">
            <div className="testimonials_box">
              <div className="image_icon">
                <div className="image_content">
                  <img src={team1} alt="" />
                </div>
                <div className="icon_content">
                  <FaQuoteLeft color="#F4F4F4" size="35px" />
                </div>
              </div>
              <div className="testimonials_content">
                <h4>
                  DENNIS WILLIAMS - <span>Charleston</span>
                </h4>
                <p>
                  “I feel confident imposing change on myself. It's a lot more
                  fun progressing than looking back. That's why I need to throw
                  curve balls.”
                </p>
              </div>
            </div>

            {/* box 2 */}

            <div className="testimonials_box">
              <div className="image_icon">
                <div className="image_content">
                  <img src={team2} alt="" />
                </div>
                <div className="icon_content">
                  <FaQuoteLeft color="#F4F4F4" size="35px" />
                </div>
              </div>
              <div className="testimonials_content">
                <h4>
                  DENNIS WILLIAMS - <span>Charleston</span>
                </h4>
                <p>
                  “Our task must be to free ourselves by widening our circle of
                  compassion to embrace all living creatures and the whole of
                  nature and its beauty.”
                </p>
              </div>
            </div>

            {/* box 3 */}

            <div className="testimonials_box">
              <div className="image_icon">
                <div className="image_content">
                  <img src={team3} alt="" />
                </div>
                <div className="icon_content">
                  <FaQuoteLeft color="#F4F4F4" size="35px" />
                </div>
              </div>
              <div className="testimonials_content">
                <h4>
                  DENNIS WILLIAMS - <span>Charleston</span>
                </h4>
                <p>
                  “I've learned that people will forget what you said, people
                  will forget what you did, but people will never forget how you
                  made them feel.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
