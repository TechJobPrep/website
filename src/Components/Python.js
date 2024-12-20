import React, { useState } from "react";
import "./Python.css";
import bannerImg from "../Assets/banner.png";
import { IoTimeOutline, IoCheckmarkCircleOutline } from "react-icons/io5";

const Python = () => {
  const [showModal, setShowModal] = useState(false);

  const handleStartNowClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const topics = [
    "Introduction to Python",
    "Variables and Data Types",
    "Operations",
    "Strings",
    "Lists and Tuples",
    "Dictionaries and Sets",
    "Conditional Statements",
    "Loops",
    "Functions",
    "Lambda Function",
    "Modules and Packages",
    "File Handling",
    "Error Handling",
    "Object-Oriented Programming (OOP)",
    "Decorators and Generators",
    "NumPy",
    "pandas",
    "matplotlib",
    "APIs",
    "Data Structures",
    "Algorithms",
    "Web Scraping",
    "GUI Programming",
    "Working with Databases",
    "Testing and Debugging",
    "Version Control with Git",
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
            <p>40+ Hours of Comprehensive Learning</p>
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

export default Python;
