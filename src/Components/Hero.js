import React from "react";
import "./Hero.css";
import banner from "../Assets/yCertificate.png"
//import { Link } from "react-router-dom";

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
        <h1>Become a Python, SQL Pro</h1>
        <p>
          Learn Python and SQl from scratch and unlock the potential to build your career in programming, data science, and more!
        </p>
        <div className="button-container">
           <button className="secondary-btn">
           <span className="strike-cont">₹ 1499/-</span> ₹ 149/-
           </button>
           {/* <Link to="/cd"><button className="secondary-btn">Know More</button></Link> */}
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
