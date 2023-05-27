import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <section id="pricing">
      <div className="pricing_main">
        <div className="pricing_heading">
          <h2>OUR PRICING</h2>
          <hr />
          <p>
            Call to action pricing table is really crucial to your for your
            business website. Make your bids stand-out with amazing options.
          </p>
        </div>
        <div className="pricing_boxes">
          <div className="pricing_row">
            {/* box 1 */}
            <div className="pricing_box">
              <div className="headings">
                <h4>ECONOMY</h4>
                <h3>$9.90</h3>
                <h5>BILLING PER MONTH</h5>
              </div>
              <div className="details">
                <p>
                  Bandwidth: <span>1GB</span>
                </p>
                <p>
                  Onlinespace: <span>50MB</span>
                </p>
                <p>
                  Support: <span>No</span>
                </p>
                <p>
                  <span>1 </span>Domain
                </p>
                <p>
                  <span>No </span>Hidden Fees
                </p>
              </div>
              <div className="pricing_button">
                <button>Join Now</button>
              </div>
            </div>
            {/* box 2 */}
            <div className="pricing_box">
              <div className="headings">
                <h4>DELUXE</h4>
                <h3>$19.90</h3>
                <h5>BILLING PER MONTH</h5>
              </div>
              <div className="details">
                <p>
                  Bandwidth: <span>10GB</span>
                </p>
                <p>
                  Onlinespace: <span>500MB</span>
                </p>
                <p>
                  Support: <span>Yes</span>
                </p>
                <p>
                  <span>10 </span>Domain
                </p>
                <p>
                  <span>No </span>Hidden Fees
                </p>
              </div>
              <div className="pricing_button">
                <button>Join Now</button>
              </div>
            </div>
            {/* box 3 */}
            <div className="pricing_box">
              <div className="headings">
                <h4>ULTIMATE</h4>
                <h3>$29.90</h3>
                <h5>BILLING PER MONTH</h5>
              </div>
              <div className="details">
                <p>
                  Bandwidth: <span>100GB</span>
                </p>
                <p>
                  Onlinespace: <span>2GB</span>
                </p>
                <p>
                  Support: <span>Yes</span>
                </p>
                <p>
                  <span>Unlimited </span>Domain
                </p>
                <p>
                  <span>No </span>Hidden Fees
                </p>
              </div>
              <div className="pricing_button">
                <button>Join Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
