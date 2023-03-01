import React from 'react';
import "../assets/Footer.css";
import { VscDebugStart } from 'react-icons/vsc';
import { RxReset } from 'react-icons/rx';
import { AiOutlinePause } from 'react-icons/ai';
import { BsPlusLg } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';

function Footer(props) {
    const StartButton = (
        <div className="btn btn-one btn-start"
            onClick={props.handleStart}>
            <VscDebugStart className='scale-effect'/>
        </div>
    );

    const StopButton = (
        <div>
            < AiOutlinePause className='scale-effect'/>
        </div>
    );
    const ResetButton = (
        <div>
            <VscDebugStart className='scale-effect'/>
        </div>
    );

    const ActiveButtons = (
        <div className="btn-grp">
            <div
                onClick={props.handleReset}>
                <RxReset className='scale-effect'/>
            </div>
            <div
                onClick={props.handlePauseResume}>
                {props.isPaused ? ResetButton : StopButton}
            </div>
        </div>
    );

    return (
        <>
            <div className='parte-ateam ateam' >
                <BiMinus onClick={props.decrementsPointsATeam} className='scale-effect'/>
                <BsPlusLg onClick={props.incrementPointsATeam} className='scale-effect'/>
            </div>
            <div className="parte-central">
                <div>{props.active ? ActiveButtons : StartButton}</div>
            </div>
            <div className='parte-bteam bteam'>

                <BiMinus onClick={props.decrementsPointsBTeam} className='scale-effect'/>
                <BsPlusLg onClick={props.incrementPointsBTeam} className='scale-effect'/>
            </div>
        </>
    );
}

export default Footer;
