import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <p>If you have any questions or need assistance, reach out to us:</p>
      <div className="contact-details">
        <p>
          <strong>Email:</strong> <br/>
          <a href="mailto:digitaldelightshopmain@gmail.com">digitaldelightshopmain@gmail.com</a>
        </p>
        <p>
          <strong>Instagram:</strong> <br/>
          <a href="https://www.instagram.com/techjobprep/" target="_blank" rel="noopener noreferrer">
            @techjobprep
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
