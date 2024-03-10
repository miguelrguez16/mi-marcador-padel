import "./Styles/Scoreboard.css";
import React from "react";
import Sets from "./Sets";

export const Scoreboard = (props: {
  setOne: Sets;
  setTwo: Sets;
  setThree: Sets;
}) => {
  const { setOne, setTwo, setThree } = props;

  const teamA = 0;
  const teamB = 1;

  return (
    <div className="sets-container">
      <div className="marcador">
        <div className="title-sets">Juegos</div>
        <div className="team-sets">
          <span id="to-setone" className="value-set ateam">
            {setOne.getPoints(teamA)}
          </span>
          <span id="to-settwo" className="value-set ateam">
            {setTwo.getPoints(teamA)}
          </span>
          <span id="to-setthree" className="value-set ateam">
            {setThree.getPoints(teamA)}
          </span>
        </div>
        <div className="team-sets">
          <span id="tt-setone" className="value-set bteam">
            {setOne.getPoints(teamB)}
          </span>
          <span id="tt-settwo" className="value-set bteam">
            {setTwo.getPoints(teamB)}
          </span>
          <span id="tt-setthree" className="value-set bteam">
            {setThree.getPoints(teamB)}
          </span>
        </div>
      </div>
    </div>
  );
};
