import React, { useEffect, useState } from "react";
import "./StickyCard.css";

const StickyCard = () => {
  const [timeLeft, setTimeLeft] = useState(1200); // 20 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes} M ${seconds.toString().padStart(2, "0")} S`;
  };

  return (
    <div className="sticky-card">
      <div className="timer">
        Offer Ends In <br />
        <span className="time-left">{formatTime(timeLeft)}</span>
      </div>
      <button
        className="buy-now-btn"
        onClick={() => window.open("https://topmate.io/digitaldelightshop/1083329/pay", "_blank")}
      >
        Enroll Now At Just<br />
        <strike className="old-price">₹1499</strike> <span className="new-price">₹149</span>
      </button>
    </div>
  );
};

export default StickyCard;
