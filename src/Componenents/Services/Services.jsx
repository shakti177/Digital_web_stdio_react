import React from "react";
import "./Services.css";
import { IoDiamondSharp } from "react-icons/io5";

const Services = () => {
  return (
    <section id="services_main">
      <div className="services_section">
        <h2>OUR SERVICES</h2>
        <hr />
        <p className="sub_content">
          We craft digital, graphic and dimensional thinking, to create category
          leading brand experiences that have meaning and add a value for our
          clients.
        </p>
        <div className="services_row">
          <div className="services_col">
            <div className="col_icon">
              <IoDiamondSharp color="#5CBD9E" size="25px" />
            </div>
            <div className="col">
              <h4>Digital Design</h4>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Moltin gives you the platform.
              </p>
            </div>
          </div>
          <div className="services_col">
            <div className="col_icon">
              <IoDiamondSharp color="#5CBD9E" size="25px" />
            </div>
            <div className="col">
              <h4>Digital Design</h4>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Moltin gives you the platform.
              </p>
            </div>
          </div>
          <div className="services_col">
            <div className="col_icon">
              <IoDiamondSharp color="#5CBD9E" size="25px"/>
            </div>
            <div className="col">
              <h4>Digital Design</h4>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Moltin gives you the platform.
              </p>
            </div>
          </div>
        </div>

        {/* Row 2 */}

        <div className="services_row">
          <div className="services_col">
            <div className="col_icon">
              <IoDiamondSharp color="#5CBD9E" size="25px"/>
            </div>
            <div className="col">
              <h4>Digital Design</h4>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Moltin gives you the platform.
              </p>
            </div>
          </div>
          <div className="services_col">
            <div className="col_icon">
              <IoDiamondSharp color="#5CBD9E" size="25px" />
            </div>
            <div className="col">
              <h4>Digital Design</h4>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Moltin gives you the platform.
              </p>
            </div>
          </div>
          <div className="services_col">
            <div className="col_icon">
              <IoDiamondSharp color="#5CBD9E" size="25px" />
            </div>
            <div className="col">
              <h4>Digital Design</h4>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Moltin gives you the platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
