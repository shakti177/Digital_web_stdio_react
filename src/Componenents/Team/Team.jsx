import React from "react";
import "./Team.css";
import team1 from "../../Assests/team-1.jpg";
import team2 from "../../Assests/team-2.jpg";
import team3 from "../../Assests/team-3.jpg";
import team4 from "../../Assests/team-4.jpg";

const Team = () => {
  return (
    <section id="team_main">
      <div className="team_section">
        <h2>
          A Digital web studio creating stunning & Engaging online Experiences
        </h2>
        <p className="Team_subheading">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus donec various
          versions have evolved quam felis.
        </p>
        <div className="team_row">
          <div className="team_col">
            <div className="team_img">
              <img src={team1} alt="team1" />
            </div>
            <div className="team_description">
              <h3>Frank Johnson</h3>
              <p>CEO</p>
            </div>
          </div>
          <div className="team_col">
            <div className="team_img">
              <img src={team2} alt="team1" />
            </div>
            <div className="team_description">
              <h3>Elaine Stclair</h3>
              <p>DESIGNER</p>
            </div>
          </div>
          <div className="team_col">
            <div className="team_img">
              <img src={team3} alt="team1" />
            </div>
            <div className="team_description">
              <h3>Wanda Arthur</h3>
              <p>DEVELOPER</p>
            </div>
          </div>
          <div className="team_col">
            <div className="team_img">
              <img src={team4} alt="team1" />
            </div>
            <div className="team_description">
              <h3>Joshua Stemple</h3>
              <p>MANAGER</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
