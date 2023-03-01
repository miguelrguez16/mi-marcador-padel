import React from 'react';
import '../assets/Time.css'

function Time(props) {

    return (
        <div className="timer">
            <span className="digits">
                {("0" + Math.floor((props.tiempo / 6000000) % 60)).slice(-2)}:
            </span>
            <span className="digits">
                {("0" + Math.floor((props.tiempo / 60000) % 60)).slice(-2)}:
            </span>
            <span className="digits">
                {("0" + Math.floor((props.tiempo / 1000) % 60)).slice(-2)}
            </span>

        </div>
    );
}

export default Time;
