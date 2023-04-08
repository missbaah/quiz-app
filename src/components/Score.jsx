import React from "react";
import { useContext } from "react";
import NumContext from "../context/NumContext";

const Score = ({ scoreNum }) => {
  const { num } = useContext(NumContext);
  console.log(num);

  return (
    <div
      className="score-circle"
      style={{ display: num < 5 ? "none" : "flex" }}
    >
      {scoreNum}/5
    </div>
  );
};

export default Score;
