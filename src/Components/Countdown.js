import React, { useState, useEffect } from "react";
import "./Countdown.css";

const Countdown = () => {
  // Set the target date and time for the countdown (example: 2 hours from now)
  const targetDate = new Date().getTime() + 2 * 60 * 60 * 1000;

  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(targetDate - new Date().getTime());
    }, 1000);

    // Clear the interval once the countdown reaches zero
    if (timeLeft <= 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timeLeft, targetDate]);

  // Calculate hours, minutes, and seconds
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div className="countdown-container">
      <h2 className="countdown-heading">Hurry! Time is Running Out</h2>
      <div className="countdown-timer">
        <div className="time-unit">
          <span className="time">{hours.toString().padStart(2, "0")}</span>
          <span className="label">Hours</span>
        </div>
        <div className="time-unit">
          <span className="time">{minutes.toString().padStart(2, "0")}</span>
          <span className="label">Minutes</span>
        </div>
        <div className="time-unit">
          <span className="time">{seconds.toString().padStart(2, "0")}</span>
          <span className="label">Seconds</span>
        </div>
      </div>
      <p className="countdown-note">Don't miss your chance! Grab the deal now!</p>
    </div>
  );
};

export default Countdown;
