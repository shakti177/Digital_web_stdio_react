import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact_main">
        <div className="contact_heading">
          <h2>GET IN TOUCH</h2>
          <hr />
          <p>
            We thrive when coming up with innovative ideas but also understand
            that a smart concept should be supported with measurable results.
          </p>
        </div>
        <div className="contact_section">
          <div className="contact_section_left">
            <div className="left_details">
              <h4>Office Address 1:</h4>
              <h3>4461 Cedar Street Moro, AR 72368</h3>
            </div>
            <div className="left_details">
              <h4>Office Address 2:</h4>
              <h3>2467 Swick Hill Street<br/>New Orleans, LA 70171</h3>
            </div>
            <div className="left_details">
              <h4>Working Hours:</h4>
              <h3>9:00AM To 6:00PM</h3>
            </div>
          </div>
          <div className="contact_section_right">
            <form action="submit" className="contact_form">
              <div className="form_input_section">
                <input type="text" placeholder="Your Name" required/>
                <input type="email" placeholder="Your Email" required/>
              </div>
              <div className="form_input">
                <input type="text" placeholder="Your Subject" required/>
              </div>
              <div className="form_input">
                <textarea placeholder="Your Message" required></textarea>
              </div>
              <div className="form_input_button">
                <input type="submit" value="Send Message" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
