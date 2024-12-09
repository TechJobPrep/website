import React from "react";
import "./CourseDetails.css";
import { FaLaptopCode, FaAward, FaClock, FaUsers } from "react-icons/fa";

const CourseDetails = () => {
  return (
    <section className="course-details">
      <h2>Why Learn Python with Us?</h2>
      <p className="course-intro">
        Master Python from scratch and step into a world of endless opportunities in technology. Our course is designed for beginners and professionals alike!
      </p>
      <div className="features">
        <div className="feature">
          <FaLaptopCode className="feature-icon" />
          <h3>Hands-On Projects</h3>
          <p>Build real-world projects and gain practical experience to kickstart your career.</p>
        </div>
        <div className="feature">
          <FaAward className="feature-icon" />
          <h3>Industry-Recognized Certification</h3>
          <p>Earn a certificate upon completion to showcase your skills to employers.</p>
        </div>
        <div className="feature">
          <FaClock className="feature-icon" />
          <h3>Flexible Learning</h3>
          <p>Learn at your own pace with lifetime access to the course materials.</p>
        </div>
        <div className="feature">
          <FaUsers className="feature-icon" />
          <h3>Expert Mentorship</h3>
          <p>Get guidance from industry experts and join a thriving community of learners.</p>
        </div>
      </div>
      <button onClick={() =>
    window.open('https://topmate.io/digitaldelightshop/1083329/pay', '_blank', 'noopener,noreferrer')
  } className="enroll-btn">Enroll Now</button>
    </section>
  );
};

export default CourseDetails;
