import React, { useEffect, useState } from "react";
import "./App.css";
import CoursesList from "./components/CourseList/CoursesList";
import Results from "./components/Results/Results";
import AddCourseForm from "./components/AddCourseForm/AddCourseForm";
import axios from "axios";

const App = () => {
  const [courses, setCourses] = useState([]);
  const addCourse = (values) => setCourses((courses) => [...courses, values]);

  const [quote, setQuote] = useState("");

  useEffect(() => {
    axios
      .get("https://api.kanye.rest/?format=json")
      .then((response) => setQuote(response.data.quote));
  }, []);

  return (
    <div className="container">
      <Results courses={courses} />
      <CoursesList courses={courses} />
      <p className="bottom">La citation de Kanye:</p>
      <p>{quote}</p>
    </div>
  );
};

export default App;
