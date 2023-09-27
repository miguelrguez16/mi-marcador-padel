import React from "react";
import { BiReset } from "react-icons/bi";
import "../assets/End.css";
import { END_MATCH } from "../utils";

const End = (props: { show: boolean; handleReset: () => void }) => {
  const { show, handleReset } = props;
  return (
    <>
      {show ? (
        <div className="end-match">
          <span>{END_MATCH}</span>
          <div onClick={handleReset}>
            <BiReset className="scale-effect biReset" />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default End;
