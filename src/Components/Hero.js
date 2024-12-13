import React from "react";
import "./Hero.css";
import banner from "../Assets/certificate.webp"

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-image">
        <img
          src={banner}
          alt="Python programming"
        />
      </div>
      <div className="hero-content">
        <h1>Become a Python Pro</h1>
        <p>
          Learn Python from scratch and unlock the potential to build your career in programming, data science, and more!
        </p>
        <div className="button-container">
           <button className="secondary-btn">
           <span className="strike-cont">₹ 1499/-</span> ₹ 149/-
           </button>
           <button
  onClick={() =>
    window.open('https://topmate.io/digitaldelightshop/1083329/pay', '_blank', 'noopener,noreferrer')
  }
  className="primary-btn"
>
  Enroll Now
</button>
     


        </div>
        

      </div>
      
    </section>
  );
};

export default Hero;
