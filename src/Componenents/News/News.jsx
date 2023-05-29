import React from "react";
import "./News.css";
import news1 from "../../Assests/news-1.jpg";
import news2 from "../../Assests/news-2.jpg"
import news3 from "../../Assests/news-3.jpg"

const News = () => {
  return (
    <section id="news">
      <div className="news_main">
        <div className="news_heading">
          <h2>LATEST NEWS</h2>
          <hr />
          <p>
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean className at a euismod mus luctus
            quam.
          </p>
        </div>
        <div className="news_boxes">
          <div className="news_row">
            {/* box 1 */}

            <div className="news_box">
              <div className="news_box_image">
                <img src={news1} alt="" />
              </div>
              <div className="news_box_content">
                <h5>UI & UX Design</h5>
                <div className="news_box_content_heading">
                  <h3>Doing a cross country road trip</h3>
                  <p>
                    She packed her seven versalia, put her initial into the belt
                    and made herself on the way..
                  </p>
                </div>
                <p>Read More</p>
              </div>
            </div>

            {/* box 2 */}

            <div className="news_box">
              <div className="news_box_image">
                <img src={news2} alt="" />
              </div>
              <div className="news_box_content">
                <h5>Digital Marketing</h5>
                <div className="news_box_content_heading">
                  <h3>New exhibition at our Museum</h3>
                  <p>
                    Pityful a rethoric question ran over her cheek, then she
                    continued her way.
                  </p>
                </div>
                <p>Read More</p>
              </div>
            </div>

            {/* box 3 */}

            <div className="news_box">
              <div className="news_box_image">
                <img src={news3} alt="" />
              </div>
              <div className="news_box_content">
                <h5>Travelling</h5>
                <div className="news_box_content_heading">
                  <h3>Why are so many people..</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia.
                  </p>
                </div>
                <p>Read More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
