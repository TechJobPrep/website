import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import CourseDetails from "./Components/CourseDetails";
import Testimonials from "./Components/Testimonials";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";
import "./index.css";
import WhatYouGet from "./Components/WhatYouGet";
import MessageComponent from "./Components/MessageComponent";
import StickyCard from "./Components/StickyCard";
//import PurchaseNotification from "./Components/PurchaseNotification";
//import Countdown from "./Components/Countdown";

function App() {
  return (
    <div className="app">
      <Navbar />
      {/* <Countdown/> */}
      <Hero />
      <MessageComponent />
      <WhatYouGet />
      <CourseDetails />
      <StickyCard/>
      {/* <PurchaseNotification/> */}
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
