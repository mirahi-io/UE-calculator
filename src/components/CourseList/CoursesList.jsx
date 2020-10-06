import React from "react";
import CourseCard from "./CourseCard/CourseCard";
import "./CoursesList.css";

const CoursesList = ({ courses }) => (
  <section>
    {courses.map((course) => (
      <CourseCard course={course} key={course.name} />
    ))}
  </section>
);

export default CoursesList;
