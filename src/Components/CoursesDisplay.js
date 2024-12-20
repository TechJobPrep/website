import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import "./CoursesDisplay.css";
import python from "../Assets/banner.png";
import sql from "../Assets/sqlb.png";

const courses = [
  {
    title: "Python Programming Essentials",
    thumbnail: python,
    description: "Master Python programming and build real-world applications.",
    route: "/python", // Define the route for the course
  },
  {
    title: "Mastering SQL Basics",
    thumbnail: sql,
    description: "Learn SQL from scratch with hands-on practice and projects.",
    route: "/sql", // Define the route for the course
  },
];

const CoursesDisplay = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleKnowMore = (route) => {
    navigate(route); // Redirect to the course-specific route
  };

  return (
    <div className="courses-container">
      <h1 className="heading">Explore Our Courses</h1>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="course-thumbnail"
            />
            <h2 className="course-title">{course.title}</h2>
            <p className="course-description">{course.description}</p>
            <button
              className="know-more-btn"
              onClick={() => handleKnowMore(course.route)}
            >
              Know More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesDisplay;
