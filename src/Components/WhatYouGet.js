import React from "react";
import "./WhatYouGet.css";
import checklistImg from "../Assets/checklist.png"; // Replace with your image path
import bookImg from "../Assets/book.png";
import questionImg from "../Assets/question.png";
import projectImg from "../Assets/project.png";
import hrImg from "../Assets/hr.png";
import resumeImg from "../Assets/resume.png";
import aiImg from "../Assets/ai.png";
import certificateImg from "../Assets/certificate.webp";
import sqlImg from "../Assets/sql.png";
import searchImg from "../Assets/search.png";

const WhatYouGet = () => {
  const benefits = [
    {
      icon: checklistImg,
      title: "30-Day Python Learning Checklist",
      description: "A day-by-day roadmap to guide you through Python basics and advanced concepts with consistency.",
    },
    {
      icon: bookImg,
      title: "Python Learning Material",
      description: "Comprehensive, easy-to-understand learning materials, perfect for self-paced learning.",
    },
    {
      icon: questionImg,
      title: "Latest Python Interview Questions",
      description: "Curated questions and answers to help you excel in Python interviews.",
    },
    {
      icon: projectImg,
      title: "Latest Python Projects",
      description: "Hands-on projects designed to enhance your skills and portfolio.",
    },
    {
      icon: hrImg,
      title: "HR Round Interview Questions",
      description: "Prepare confidently for HR rounds with a collection of the latest commonly asked questions.",
    },
    {
      icon: resumeImg,
      title: "ATS-Friendly Resume Template",
      description: "A professionally designed resume template optimized for applicant tracking systems.",
    },
    {
      icon: aiImg,
      title: "ChatGPT Prompts to Learn & Crack Interviews",
      description: "Leverage AI prompts to master Python concepts and ace interviews effectively.",
    },
    {
      icon: certificateImg,
      title: "Free Certification Sources",
      description: "Access free resources to earn certifications that showcase your Python expertise.",
    },
    {
      icon: sqlImg,
      title: "SQL Learning Material",
      description: "Detailed learning guides to help you master SQL queries and database management.",
    },
    {
      icon: searchImg,
      title: "SQL Interview Questions",
      description: "A comprehensive list of SQL questions commonly asked in technical interviews.",
    },
  ];

  return (
    <section className="what-you-get">
      <h2 className="title">🚀 What You Get</h2>
      <p className="intro">
        Enroll now and receive everything you need to become a Python and SQL expert!
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
    </section>
  );
};

export default WhatYouGet;
