import React from "react";
import "./CourseCard.css";

const CourseCard = ({ course }) => {
  const { name, percent, points } = course;
  return (
    <div className="card">
      <div className="name">
        <p>{name}</p>
      </div>
      <div className="vertical">
        <p className="points">
          <b className="big">{points}</b>/20
        </p>
        <p className="percent">{percent}%</p>
      </div>
    </div>
  );
};

export default CourseCard;
