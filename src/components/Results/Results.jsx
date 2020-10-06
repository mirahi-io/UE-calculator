import React from "react";
import "./Results.css";

const Results = ({ courses }) => {
  let requiredPoints = 10;
  let leftPercentage = 100;

  for (let index = 0; index < courses.length; index++) {
    requiredPoints -= (courses[index].points * courses[index].percent) / 100;
    leftPercentage -= courses[index].percent;
  }

  requiredPoints = (requiredPoints * 100) / leftPercentage;
  requiredPoints = round(requiredPoints);

  return (
    <p>
      Il te faut <b className="big">{requiredPoints}</b>
      /20 au prochain(s) examen(s) pour passer.
    </p>
  );
};

export default Results;

const round = (num) => Math.round(num * 10) / 10;
