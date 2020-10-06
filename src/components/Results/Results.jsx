import React, { useEffect, useState } from "react";
import "./Results.css";

const Results = ({ courses }) => {
  // const [requiredPoints, setRequiredPoints] = [10, () => {}];
  const [requiredPoints, setRequiredPoints] = useState(10);

  useEffect(() => {
    setRequiredPoints(getRequiredPoints(courses));
  }, [courses]);

  return (
    <p>
      Il te faut <b className="big">{requiredPoints}</b>
      /20 au prochain(s) examen(s) pour passer.
    </p>
  );
};

export default Results;

const round = (num) => Math.round(num * 10) / 10;

const getRequiredPoints = (courses) => {
  // Formule magique pour calculer les points nécéssaires pour réussir
  let requiredPoints = 10;
  let percentageLeft = 100;
  for (let index = 0; index < courses.length; index++) {
    requiredPoints -= (courses[index].points * courses[index].percent) / 100;
    percentageLeft -= courses[index].percent;
  }
  requiredPoints = (requiredPoints * 100) / percentageLeft;
  requiredPoints = round(requiredPoints);
  return requiredPoints;
};
