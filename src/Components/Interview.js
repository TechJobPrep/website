import React, { useState } from "react";
import "./Python.css";
import bannerImg from "../Assets/ip.png";
import { IoTimeOutline, IoCheckmarkCircleOutline } from "react-icons/io5";

const Interview = () => {
  const [showModal, setShowModal] = useState(false);

  const handleStartNowClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const topics = [ "Understand the Company and Role", "Build Confidence Through Preparation", "Master Your Resume", "Strengthen Your Fundamentals", "Develop Problem-Solving Skills", "Communicate Effectively", "Exhibit a Growth Mindset", "Prepare for Behavioral Questions", "Stay Calm Under Pressure", "End with a Strong Impression" ]
    
  

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
            <p>10+ Hours of Comprehensive Learning</p>
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


export default Interview;
