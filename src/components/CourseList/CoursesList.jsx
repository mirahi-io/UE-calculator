import React from "react";
import CourseCard from "./CourseCard/CourseCard";
import "./CoursesList.css";

const CoursesList = ({ courses }) => {
  if (!courses.length) {
    return null;
  }

  return (
    <section>
      {courses.map((course) => (
        <CourseCard course={course} key={course.name} />
      ))}
      {/* <CourseCard course={courses[0]} key={courses[0].name} />*/}
    </section>
  );
};
export default CoursesList;
