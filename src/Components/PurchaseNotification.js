import React, { useEffect, useState } from "react";
import "./PurchaseNotification.css";

const PurchaseNotification = () => {
  const [activeNotification, setActiveNotification] = useState(null);

  const names = ["Alice", "Bob", "Charlie", "Daisy", "Eve", "Frank", "Grace"];
  const messages = [
    "just purchased the Python course for ₹149/-!",
    "enrolled in the SQL + Python combo deal!",
    "joined the Python interview preparation pack!",
    "grabbed the Python learning checklist!",
    "got access to the SQL interview guide for ₹149/-!",
  ];

  const generateRandomNotification = () => {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    return `${randomName} ${randomMessage}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNotification(generateRandomNotification());
      setTimeout(() => {
        setActiveNotification(null);
      }, 10000); // Notification stays visible for 3 seconds
    }, 10000); // New notification every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="notification-container">
      {activeNotification && (
        <div className="notification-card">
          <p>{activeNotification}</p>
        </div>
      )}
    </div>
  );
};

export default PurchaseNotification;
