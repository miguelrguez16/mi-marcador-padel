import React from "react";
import "../assets/Time.css"

interface Props {
    timer: number,
}

const Time = ({ timer }: Props) => {
    return (
        <div className="timer">
            <span className="digits">
                {("0" + Math.floor((timer / 6000000) % 60)).slice(-2)}:
            </span>
            <span className="digits">
                {("0" + Math.floor((timer / 60000) % 60)).slice(-2)}:
            </span>
            <span className="digits">
                {("0" + Math.floor((timer / 1000) % 60)).slice(-2)}
            </span>

        </div>
    );
}

export default Time;
