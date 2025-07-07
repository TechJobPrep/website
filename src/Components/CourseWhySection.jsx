import React from "react";
import "./CourseWhySection.css";              // <‑‑ new CSS file
import { FaRobot, FaMapSigns, FaTools, FaRupeeSign } from "react-icons/fa";

const features = [
  {
    Icon: FaRobot,
    title: "AI‑Powered Learning",
    text: "Smart explanations, instant feedback & adaptive quizzes help you learn 2× faster.",
  },
  {
    Icon: FaMapSigns,
    title: "Zero‑to‑Job Roadmap",
    text: "Follow a step‑by‑step path from absolute beginner to interview‑ready developer.",
  },
  {
    Icon: FaTools,
    title: "Essential AI Tools",
    text: "Code‑review bots, prompt libraries & cheat‑sheets included at no extra cost.",
  },
  {
    Icon: FaRupeeSign,
    title: "₹149 All‑in‑One Bundle",
    text: "Python + SQL + Interview Prep, lifetime updates, no hidden fees.",
  },
];

const CourseWhySection = () => {
  return (
    <section id="why-ai" className="why-ai-section">
      {/* decorative blurred blobs */}
      <div className="blob blob-top-left" />
      <div className="blob blob-bottom-right" />

      <div className="container">
        <h2 className="heading">
          Learn Smarter in the&nbsp;
          <span className="underline">AI Era</span>
        </h2>

        <p className="intro">
          Why pay ₹3,000–₹5,000 for the same skills? Master Python, SQL and
          interview essentials for just <span className="intro-bold">₹149</span> — powered by AI.
        </p>

        {/* feature cards */}
        <div className="features-grid">
          {features.map(({ Icon, title, text }) => (
            <div key={title} className="feature-card">
              <div className="feature-icon">
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>

        {/* call‑to‑action */}
        <a
          href="https://topmate.io/digitaldelightshop/1083329/pay"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          Enroll Now →
        </a>
      </div>
    </section>
  );
};

export default CourseWhySection;
