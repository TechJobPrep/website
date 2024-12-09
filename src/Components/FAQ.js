import React, { useState } from "react";
import "./FAQ.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What will I learn in this course?",
      answer: "You will master Python, SQL, and interview preparation techniques, including hands-on projects and HR round tips.",
    },
    {
      question: "Is this course beginner-friendly?",
      answer: "Absolutely! This course is designed for learners of all levels, including beginners with no prior experience.",
    },
    {
      question: "Will I get a certificate after completion?",
      answer: "Yes, you will receive access to free certification sources upon completing the course.",
    },
    {
      question: "How long do I have access to the course?",
      answer: "You will have lifetime access to all course materials, projects, and resources.",
    },
    {
      question: "What payment methods are available?",
      answer: "We accept all major payment methods, including credit/debit cards, UPI, and net banking.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="faq-items">
        {faqData.map((item, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{item.question}</span>
              {activeIndex === index ? (
                <FaChevronUp className="faq-icon" />
              ) : (
                <FaChevronDown className="faq-icon" />
              )}
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
