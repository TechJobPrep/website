import React, { useState } from "react";
import "./Jobs.css";
import { MdWork, MdLocationOn, MdCalendarToday, MdClose } from "react-icons/md";

const jobListings = [
  {
    company: "Innovate Tech",
    role: "Junior Software Engineer",
    location: "Bangalore,Hyderabad",
    applyBy: "December 23 , 2024",
  },
  {
    company: "Future Analytics",
    role: "Python Intern",
    location: "Hyderabad,Bangalore",
    applyBy: "December 22 , 2024",
  },
  {
    company: "NextGen Solutions",
    role: "Associate Web Developer",
    location: "Remote",
    applyBy: "December 25 , 2024",
  },
];

const Jobs = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleViewDetails = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="jobs-container">
      <h1 className="heading">Fresher Job Opportunities</h1>
      <div className="jobs-grid">
        {jobListings.map((job, index) => (
          <div key={index} className="job-card">
            <div className="job-info">
              <h2 className="job-role">{job.role}</h2>
              <p className="job-company">
                <MdWork className="icon" /> {job.company}
              </p>
              <p className="job-location">
                <MdLocationOn className="icon" /> {job.location}
              </p>
              <p className="apply-by">
                <MdCalendarToday className="icon" /> Apply By: {job.applyBy}
              </p>
            </div>
            <button className="view-details-btn" onClick={handleViewDetails}>
              View Details
            </button>
          </div>
        ))}
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="j-close-btn" onClick={closePopup}>
              <MdClose />
            </button>
            <h2>Eligibility Notice</h2>
            <p>
              You are not eligible to apply. Please enroll in the course first.
            </p>
            
            <button  onClick={() =>
    window.open('https://topmate.io/digitaldelightshop/1083329/pay', '_blank', 'noopener,noreferrer')
  } className="enroll-btn">Enroll Now</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Jobs;
