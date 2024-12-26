import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import CourseDetails from "./Components/CourseDetails";
import Testimonials from "./Components/Testimonials";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";
import WhatYouGet from "./Components/WhatYouGet";
import MessageComponent from "./Components/MessageComponent";
import StickyCard from "./Components/StickyCard";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import "./index.css";
import Python from "./Components/Python";
import Sql from "./Components/Sql";
import CoursesDisplay from "./Components/CoursesDisplay";
import Jobs from "./Components/Jobs";
import Interview from "./Components/Interview.js";
import Popup from "./Components/Popup.js";

function App() {
  return (
    <Router>
      <div className="app">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <CoursesDisplay/>
              <Testimonials />
              <MessageComponent />
              <WhatYouGet />
              <CourseDetails />
              <StickyCard />
              <Popup/>
              <FAQ />
            </>
          } />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/python" element={<Python />} />
          <Route path="/sql" element={<Sql />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/cd" element={<CoursesDisplay />} />
          <Route path="/jobs" element={<Jobs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
