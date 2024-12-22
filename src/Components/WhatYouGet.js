import React from "react";
import "./WhatYouGet.css";

// Importing icons and images
import checklistImg from "../Assets/checklist.png";
import videoImg from "../Assets/video.webp";
import bookImg from "../Assets/book.png";
import projectImg from "../Assets/project.png";
import certificateImg from "../Assets/certificate.webp";
import hrImg from "../Assets/hr.png";
import resumeImg from "../Assets/resume.png";
import interviewImg from "../Assets/book.png";
import sqlImg from "../Assets/sql.png";
import resourceImg from "../Assets/book.png";
import { Link } from "react-router-dom";

const WhatYouGet = () => {
  const benefits = [
    
    {
      icon: videoImg,
      title: "Recorded Video Content (Python: 40 Hours, SQL: 30+ Hours)",
      description: `Comprehensive video lessons covering Python topics like OOP, APIs, NumPy, pandas, matplotlib, and SQL topics including Joins, CTEs, Window Functions, and Performance Optimization.`,
    },
    {
      icon: checklistImg,
      title: "30-Day Python Mastery Checklist",
      description: "A structured day-by-day plan to complete Python learning efficiently with key topics and daily tasks.",
    },
    {
      icon: bookImg,
      title: "Comprehensive Learning Material",
      description: "Detailed guides with illustrative examples, exercises, quizzes, and curated resources to master Python + SQL.",
    },
    {
      icon: projectImg,
      title: "Hands-On Projects",
      description: "Real-world projects to apply your knowledge and build a professional portfolio.",
    },
    {
      icon: certificateImg,
      title: "Free Certification Sources",
      description: "Access free Python certification resources to validate your skills and enhance your resume.",
    },
    {
      icon: hrImg,
      title: "HR Interview Preparation",
      description: "Top HR interview questions with answers tailored for freshers in software jobs.",
    },
    {
      icon: resumeImg,
      title: "ATS-Friendly Resume Template",
      description: "A professionally designed template to help your resume pass through Applicant Tracking Systems (ATS).",
    },
    {
      icon: interviewImg,
      title: "Curated Interview Questions",
      description: "A collection of essential Python + SQL interview questions to prepare confidently.",
    },
    {
      icon: sqlImg,
      title: "SQL Learning Material",
      description: "Detailed learning guides to master SQL queries and database management effectively.",
    },
    {
      icon: resourceImg,
      title: "Free Resources and References",
      description: "Access a curated list of additional resources to further your learning.",
    },
  ];

  return (
    <section className="what-you-get">
      <h2 className="title">🚀 What You Get</h2>
      <p className="intro">
        Unlock Your Potential with the Ultimate Python + SQL Mastery Course! Here's what you get for just ₹149:
      </p>
      <div className="benefits-container">
        {benefits.map((benefit, index) => (
          <div className="benefit-card" key={index}>
            <img src={benefit.icon} alt={benefit.title} className="benefit-image" />
            <h3 className="benefit-title">{benefit.title}</h3>
            <p className="benefit-description">{benefit.description}</p>
          </div>
        ))}
      </div>
      <Link className="more-btn" to="/cd"><button className="w-secondary-btn">Know More</button></Link>
    </section>
  );
};

export default WhatYouGet;
