import React from "react";
import { VscDebugStart } from "react-icons/vsc";
import { RxReset } from "react-icons/rx";
import { AiOutlinePause } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

export const Footer = (props: {
  handleStart: () => void;
  handleReset: () => void;
  handlePause: () => void;
  handleResumen: () => void;
  decrementsPointsATeam: () => void;
  incrementPointsATeam: () => void;
  decrementsPointsBTeam: () => void;
  incrementPointsBTeam: () => void;
  isPaused: boolean;
  active: boolean;
}) => {
  const {
    handleStart,
    handleReset,
    handlePause,
    handleResumen,
    decrementsPointsATeam,
    incrementPointsATeam,
    decrementsPointsBTeam,
    incrementPointsBTeam,
    isPaused,
    active,
  } = props;

  const StartButton = (
    <div className="btn btn-one btn-start" onClick={handleStart}>
      <VscDebugStart className="scale-effect" />
    </div>
  );

  const StopButton = (
    <div onClick={handlePause}>
      <AiOutlinePause className="scale-effect" />
    </div>
  );

  const ResetButton = (
    <div onClick={handleReset}>
      <RxReset className="scale-effect" />
    </div>
  );

  const ResumeButton = (
    <div onClick={handleResumen}>
      <VscDebugStart className="scale-effect" />
    </div>
  );

  const ActiveButtons = (
    <div className="btn-grp">
      <>{active ? ResetButton : <></>}</>
      <>{isPaused ? ResumeButton : StopButton}</>
    </div>
  );

  return (
    <>
      <div className="parte-ateam ateam">
        <BiMinus onClick={decrementsPointsATeam} className="scale-effect" />
        <BsPlusLg onClick={incrementPointsATeam} className="scale-effect" />
      </div>
      <div className="parte-central">
        <>{active ? ActiveButtons : StartButton}</>
      </div>
      <div className="parte-bteam bteam">
        <BiMinus onClick={decrementsPointsBTeam} className="scale-effect" />
        <BsPlusLg onClick={incrementPointsBTeam} className="scale-effect" />
      </div>
    </>
  );
};
