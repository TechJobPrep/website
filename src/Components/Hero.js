import React from "react";
import "./Hero.css";
import banner from "../Assets/yCertificate.png";
import curriculumPDF from "../Assets/Curriculum.pdf";

const Hero = () => {
  return (
    <>
      {/* Scrolling announcement */}
      <div className="scrolling-text">
        <span>🔥 90% OFF • Only 100 Seats Left • Enroll Before It’s Gone!</span>
      </div>

      <section className="hero">
        <div className="hero-image">
          <img src={banner} alt="Course completion certificate" />
        </div>

        <div className="hero-content">
          <h1>
            Master <span className="highlight">Python&nbsp;&amp;&nbsp;SQL</span> <br />
            <small>Land Your Dream Tech Job</small>
          </h1>

          <p>
            Zero to‑hero roadmap, real‑world projects, interview drills&nbsp;—
            all bundled for just <strong>₹149</strong>. Learn smarter with AI‑powered
            lessons and earn an industry‑recognized certificate.
          </p>

          <div className="button-container">
            <a href={curriculumPDF} download className="download-btn">
              📄 View Curriculum
            </a>
            <button
              onClick={() =>
                window.open(
                  "https://topmate.io/jointechjobprep/1990994/pay",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="primary-btn"
            >
              Enroll Now →
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
