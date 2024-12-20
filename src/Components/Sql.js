import React, { useState } from "react";
import "./Python.css";
import bannerImg from "../Assets/sqlb.png";
import { IoTimeOutline, IoCheckmarkCircleOutline } from "react-icons/io5";

const Sql = () => {
  const [showModal, setShowModal] = useState(false);

  const handleStartNowClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const topics = [
    "Introduction to Databases",
    "Introduction to SQL",
    "Common Data Types",
    "`SELECT` Statement",
    "Filtering Data Using `WHERE`",
    "Sorting Data with `ORDER BY`",
    "Limiting Data with `LIMIT`",
    "Aggregate Functions",
    "Grouping Data",
    "Basic Joins",
    "Advanced Joins and Subqueries",
    "Common Table Expressions (CTEs)",
    "Window Functions",
    "Set Operations",
    "Database Design and Normalization",
    "Indexes and Performance Optimization",
    "Stored Procedures, Functions, and Triggers",
    "Advanced Topics in SQL",
    "Practical Experience and Interview Preparation"
  ];
  

  return (
    
    <div className="courses-page">
      <div className="banner-section">
        <img src={bannerImg} alt="Course Banner" className="banner-image" />
      </div>

      <div className="course-details-section">
        <div className="du-cont">
          <div className="duration-info">
            <IoTimeOutline className="duration-icon" />
          </div>
          <div>
            <h3>Course Duration</h3>
            <p>30+ Hours of Comprehensive Learning</p>
          </div>
        </div>
        <button className="start-course-btn" onClick={handleStartNowClick}>
          Start Now
        </button>
      </div>

      <div className="topics-section">
        <h2>Topics Covered</h2>
        <div className="topics-list">
          {topics.map((topic, index) => (
            <div key={index} className="topic-item">
              <span className="topic-icon">
                <IoCheckmarkCircleOutline />
              </span>{" "}
              {topic}
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Course Access Required</h2>
            <p>You have not enrolled in this course. To start the course, please enroll now.</p>
            <button className="enroll-btn" onClick={() =>
    window.open('https://topmate.io/digitaldelightshop/1083329/pay', '_blank', 'noopener,noreferrer')
  }>Enroll Now</button>
            <button className="close-btn" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};


export default Sql;
