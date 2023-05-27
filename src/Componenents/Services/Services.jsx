import React from "react";
import "./Services.css";
import { IoDiamondSharp } from "react-icons/io5";
import { TbPresentationAnalytics } from "react-icons/tb";
import { BsPiggyBank } from "react-icons/bs";
import { IoLogoReact } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";
import { GiCommercialAirplane } from "react-icons/gi";
import { TbBow } from "react-icons/tb";
import { BsTools } from "react-icons/bs";
import { RxStopwatch } from "react-icons/rx";

const Services = () => {
  return (
    <section id="services_main">
      <div className="services_section">
        <div className="services_heading">
          <h2>OUR SERVICES</h2>
          <hr />
          <p>
            We craft digital, graphic and dimensional thinking, to create
            category leading brand experiences that have meaning and add a value
            for our clients.
          </p>
        </div>
        <div className="services_boxes">
          {/* row 1 */}
          <div className="services_boxes_row">
            <div className="services_box">
              <div className="services_box_inside">
                <div className="icon">
                  <IoDiamondSharp color="#5cbd9e" size="25px" />
                </div>
                <div className="content">
                  <h4>Digital Design</h4>
                  <p>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. Moltin gives you the
                    platform.
                  </p>
                </div>
              </div>
            </div>
            <div className="services_box">
              <div className="services_box_inside">
                <div className="icon">
                  <TbPresentationAnalytics color="#5cbd9e" size="25px" />
                </div>
                <div className="content">
                  <h4>Unlimited Colors</h4>
                  <p>
                    Credibly brand standards compliant users without extensible
                    services. Anibh euismod tincidunt ut laoreet Ipsum passage.
                  </p>
                </div>
              </div>
            </div>
            <div className="services_box">
              <div className="services_box_inside">
                <div className="icon">
                  <BsPiggyBank color="#5cbd9e" size="25px" />
                </div>
                <div className="content">
                  <h4>Strategy Solutions</h4>
                  <p>
                    Separated they live in Bookmarksgrove right at the coast of
                    the Semantics, a large language ocean necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* row 2 */}

          <div className="services_boxes_row">
            <div className="services_box">
              <div className="services_box_inside">
                <div className="icon">
                  <IoLogoReact color="#5cbd9e" size="25px" />
                </div>
                <div className="content">
                  <h4>Awesome Support</h4>
                  <p>
                    It is a paradisematic country, in which roasted parts of
                    sentences fly into your mouth leave for the far World.
                  </p>
                </div>
              </div>
            </div>
            <div className="services_box">
              <div className="services_box_inside">
                <div className="icon">
                  <IoNewspaperOutline color="#5cbd9e" size="25px" />
                </div>
                <div className="content">
                  <h4>Truly Multipurpose</h4>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                </div>
              </div>
            </div>
            <div className="services_box">
              <div className="services_box_inside">
                <div className="icon">
                  <GiCommercialAirplane color="#5cbd9e" size="25px" />
                </div>
                <div className="content">
                  <h4>Easy to customize</h4>
                  <p>
                    Question Marks and devious Semikoli, but the Little Blind
                    Text didn’t listen. She packed her seven versalia.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* row 3 */}

          <div className="services_boxes_row">
            <div className="services_box">
              <div className="services_box_inside">
                <div className="icon">
                  <TbBow color="#5cbd9e" size="25px" />
                </div>
                <div className="content">
                  <h4>Pixel Perfect Design</h4>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.
                  </p>
                </div>
              </div>
            </div>
            <div className="services_box">
              <div className="services_box_inside">
                <div className="icon">
                  <BsTools color="#5cbd9e" size="25px" />
                </div>
                <div className="content">
                  <h4>Perfect Toolbox</h4>
                  <p>
                    Hampden-Sydney College in Virginia, looked up one of the
                    more obscure Latin words, consectetur.
                  </p>
                </div>
              </div>
            </div>
            <div className="services_box">
              <div className="services_box_inside">
                <div className="icon">
                  <RxStopwatch color="#5cbd9e" size="25px" />
                </div>
                <div className="content">
                  <h4>Awesome Design</h4>
                  <p>
                    All the Lorem Ipsum generators on the Internet tend to
                    repeat predefined chunks as necessary.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
