import React from "react";
import "./Footer.css";
import { IoPaperPlaneOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <section id="footer">
      <div className="footer_section">
        {/* column 1 */}

        <div className="footer_column">
          <h3>HIRIC</h3>
          <div className="footer_column_items">
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Career</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        {/* column 2 */}

        <div className="footer_column">
          <h3>Information</h3>
          <div className="footer_column_items">
            <ul>
              <li>Terms & Condition</li>
              <li>About Us</li>
              <li>Jobs</li>
              <li>Bookmarks</li>
            </ul>
          </div>
        </div>

        {/* column 3 */}

        <div className="footer_column">
          <h3>Support</h3>
          <div className="footer_column_items">
            <ul>
              <li>FAQ</li>
              <li>Contact</li>
              <li>Discussion</li>
            </ul>
          </div>
        </div>

        {/* column 4 */}

        <div className="footer_column">
          <h3>Subscribe</h3>
          <div className="footer_column_items">
            <p>
              In an ideal world this text wouldn’t exist, a client would
              acknowledge the importance of having web copy before the design
              starts.
            </p>
            <div className="subscribe_mail">
              <input type="email" placeholder="Email" />
                <IoPaperPlaneOutline className="submit_icon"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
