import React, { useState } from "react";
import "./App.css";
import CoursesList from "./components/CourseList/CoursesList";
import Results from "./components/Results/Results";
import AddCourseForm from "./components/AddCourseForm/AddCourseForm";

const App = () => {
  const [courses, setCourses] = useState([]);
  const addCourse = (values) => setCourses((courses) => [...courses, values]);
  return (
    <div className="container">
      <Results courses={courses} />
      <CoursesList courses={courses} />
      <AddCourseForm onSubmit={addCourse} courses={courses} />
    </div>
  );
};

export default App;
