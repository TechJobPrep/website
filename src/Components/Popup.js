import React, { useEffect, useState } from "react";
import "./Popup.css";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentPerson, setCurrentPerson] = useState({});

  const people = [
    { name: "putta varshitha", message: "Enrolled in Python + SQL Course" },
    { name: "Pavani Langar", message: "Enrolled in Python + SQL Course" },
    { name: "Tarun kumar", message: "Enrolled in Python + SQL Course" },
    { name: "Sathishreddy", message: "Enrolled in Python + SQL Course" },
    { name: "Devi prasad", message: "Enrolled in Python + SQL Course" },
    { name: "Poorna Shivani", message: "Enrolled in Python + SQL Course" },
    { name: "Ch Sai Likith", message: "Enrolled in Python + SQL Course" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomPerson =
        people[Math.floor(Math.random() * people.length)];
      setCurrentPerson(randomPerson);
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 5000); // Display popup for 10 seconds
    }, 7000); // Trigger every 20 seconds

    return () => clearInterval(interval);
  }, [people]);

  return (
    <>
      {showPopup && (
        <div className="a-popup">
          <div className="a-popup-content">
            <div className="a-profile-pic">
              {currentPerson.name && currentPerson.name[0].toUpperCase()}
            </div>
            <div className="a-popup-text">
              <strong>{currentPerson.name}</strong>
              <p>{currentPerson.message}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;