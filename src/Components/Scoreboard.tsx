import React from "react";
import Sets from "../entities/Sets";
import "../assets/Scoreboard.css"

interface Props {
    setOne: Sets,
    setTwo: Sets,
    setThree: Sets
}

function Scoreboard({ setOne, setTwo, setThree }: Props) {

    return (
        <div className="sets-container">
            <div className="title-sets">SCOREBOARD</div>
            <div className="marcador">
                <div className="team-one-sets">

                    <span id="to-setone" className="value-set ateam">{setOne.getPoints(0)}</span>
                    <span id="to-settwo" className="value-set ateam">{setTwo.getPoints(0)}</span>
                    <span id="to-setthree" className="value-set ateam">{setThree.getPoints(0)}</span>
                </div>
                <div className="team-two-sets">
                    <span id="tt-setone" className="value-set bteam">{setOne.getPoints(1)}</span>
                    <span id="tt-settwo" className="value-set bteam">{setTwo.getPoints(1)}</span>
                    <span id="tt-setthree" className="value-set bteam">{setThree.getPoints(1)}</span>
                </div>
            </div>
        </div>
    );
}

export default Scoreboard;
