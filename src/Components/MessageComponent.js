import React, { useState, useEffect } from "react";
import "./MessageComponent.css";

const MessageComponent = () => {
  // Initial state is true so the popup shows up automatically
  const [isVisible, setIsVisible] = useState(true);

  // Function to close the popup
  const closePopup = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    // This hook will run once after the initial render to show the popup immediately
    // You could also add a delay here if needed for a smoother experience
  }, []);

  return (
    <>
      {/* Popup */}
      {isVisible && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2 className="message-heading">
              💡 Why Pay Thousands for Python Courses?
            </h2>
            <p className="message-subtext">
              Most institutes charge <strong>₹3000 to ₹5000</strong> for Python, SQL, and interview preparation.
            </p>
            <p className="message-highlight">
              Is it worth it? <span className="highlight-no">🤔 NO!</span>
            </p>
            <p className="message-description">
              🚫 <strong>Save your money!</strong> 💸 We've created a <strong>complete Python, SQL, and Interview Preparation Pack</strong> with our industry expertise to help you land jobs effortlessly. 🎉
            </p>
            {/* <button className="cta-button" onClick={closePopup}>
              Get Your Pack Now
            </button> */}
            <button className="close-button" onClick={closePopup}>X</button>
          </div>
        </div>
      )}
    </>
  );
};

export default MessageComponent;
