"use client";

import "./Styles/Scoreboard.css";
import React from "react";
import Sets from "./Sets";

export const Scoreboard = (props: {
  setOne: Sets;
  setTwo: Sets;
  setThree: Sets;
}) => {
  const { setOne, setTwo, setThree } = props;
  return (
    <div className="sets-container">
      <h1 className="title-sets">SCOREBOARD</h1>
      <div className="marcador">
        <div className="team-sets">
          <span id="to-setone" className="value-set ateam">
            {setOne.getPoints(0)}
          </span>
          <span id="to-settwo" className="value-set ateam">
            {setTwo.getPoints(0)}
          </span>
          <span id="to-setthree" className="value-set ateam">
            {setThree.getPoints(0)}
          </span>
        </div>
        <div className="team-sets">
          <span id="tt-setone" className="value-set bteam">
            {setOne.getPoints(1)}
          </span>
          <span id="tt-settwo" className="value-set bteam">
            {setTwo.getPoints(1)}
          </span>
          <span id="tt-setthree" className="value-set bteam">
            {setThree.getPoints(1)}
          </span>
        </div>
      </div>
    </div>
  );
};
