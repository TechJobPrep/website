import React from "react";
import "./Hero.css";
import banner from "../Assets/yCertificate.png";
import curriculumPDF from "../Assets/Curriculum.pdf"; // Import the curriculum file

const Hero = () => {
  return (
    <>
      {/* Scrolling Text */}
      <div className="scrolling-text">
        <span> Last Few Seats are left Limited Time Offer</span>
      </div>

      <section className="hero">
        <div className="hero-image">
          <img src={banner} alt="Python programming" />
        </div>
        <div className="hero-content">
          <h1>Become a Python, SQL Developer</h1>
          <p>
            Learn Python and SQL from scratch and unlock the potential to build your career in programming, data science, and more!
          </p>
          <div className="button-container">
            <a
              href={curriculumPDF}
              download
              className="download-btn"
            >
              Download Curriculum
            </a>
            <button
              onClick={() =>
                window.open('https://topmate.io/digitaldelightshop/1083329/pay', '_blank', 'noopener,noreferrer')
              }
              className="primary-btn"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
