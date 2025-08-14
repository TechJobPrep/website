import React from "react";
import "./Chatbot.css";
import ChatbotImg from "../Assets/Chatbot.png";
import {
  FaBrain,
  FaTools,
  FaMoneyBillWave,
  FaChartLine,
  FaShieldAlt,
  FaRocket,
  FaGlobe,
  FaUsers,
  FaStar,
  FaCheckCircle,
  FaUserGraduate
} from "react-icons/fa";

const Chatbot = () => {
  const features = [
    { icon: <FaBrain />, title: "Understand AI Fundamentals", description: "Learn NLP, machine learning, and automation basics." },
    { icon: <FaTools />, title: "Master AI Tools", description: "Hands-on with OpenAI, LangChain, AutoGPT, and more." },
    { icon: <FaMoneyBillWave />, title: "Monetize Your AI Agent", description: "Subscription models, API sales, and SaaS strategies." },
    { icon: <FaChartLine />, title: "Scale & Market", description: "Growth tactics, automation, and customer retention." },
    { icon: <FaShieldAlt />, title: "Ensure AI Compliance", description: "Ethical AI development and legal considerations." }
  ];

  const earnings = [
    { icon: <FaRocket />, title: "Launch Your AI Business", description: "Turn your AI agents into products people are willing to pay for." },
    { icon: <FaGlobe />, title: "Sell Globally", description: "Reach clients worldwide using online marketplaces and SaaS models." },
    { icon: <FaUsers />, title: "Earn Recurring Revenue", description: "Set up subscription plans for steady, predictable income." },
    { icon: <FaMoneyBillWave />, title: "High-Profit Margins", description: "Leverage automation to reduce costs and boost earnings." }
  ];

  const benefits = [
    "Learn the skills companies are paying top dollar for",
    "Get hands-on experience building real AI projects",
    "Monetize your skills and start earning immediately",
    "Access lifetime course updates at no extra cost",
    "Join a private community of AI entrepreneurs"
  ];

  const audience = [
    "School students curious about AI",
    "College students exploring career opportunities",
    "Graduates looking to upskill",
    "Entrepreneurs & freelancers",
    "Anyone who wants to earn with AI"
  ];

  const reviews = [
    {
      name: "Ravi Sharma",
      feedback: "This course changed my life! Within 2 months, I had my first paying AI client.",
      rating: 5
    },
    {
      name: "Ananya Patel",
      feedback: "The lessons are clear and practical. I started building AI agents the same day!",
      rating: 5
    },
    {
      name: "Michael Lee",
      feedback: "Worth every rupee. This is a goldmine for anyone wanting to start an AI business.",
      rating: 4
    }
  ];

  return (
    <div className="landing-container">
      {/* Urgency Banner - Scrolling */}
      <div className="urgency-banner">
        <div className="urgency-text">
          <span>
            🚨 Limited Time Offer – Only for First 100 Students! Enroll Now & Secure Your Spot 🚀 &nbsp; 🚨 Limited Time Offer – Only for First 100 Students! Enroll Now & Secure Your Spot 🚀 &nbsp;
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <header className="hero-updated stacked">
        <h1 className="hero-title">
          Build & Sell <span className="highlight">AI Agents</span>
        </h1>
        <div className="hero-image-center">
          <div className="image-glow">
            <img src={ChatbotImg} alt="AI Chatbot" />
          </div>
        </div>
        <p className="subtitle">
          Learn to create, deploy, and monetize AI agents with this step-by-step course.
        </p>
        <div className="price-tag">💰 Enroll for Just ₹99/-</div>
        <a href="https://topmate.io/digitaldelightshop/1476757/pay" className="cta-button big">Enroll Now 🚀</a>
        <p className="small-note">📥 Instant Access – Start learning today</p>
      </header>

      {/* Features Section */}
      <section className="content">
        <h2 className="section-title">📚 What You'll Learn</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <h2 className="section-title">💡 How You Will Benefit</h2>
        <ul className="benefits-list">
          {benefits.map((benefit, index) => (
            <li key={index}><FaCheckCircle className="benefit-icon" /> {benefit}</li>
          ))}
        </ul>
      </section>

      {/* Earnings Section */}
      <section className="earnings">
        <h2 className="section-title highlight">💵 How This Course Will Make You Money</h2>
        <div className="earnings-grid">
          {earnings.map((item, index) => (
            <div className="earnings-card" key={index}>
              <div className="earnings-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who's This Course For Section */}
      <section className="audience">
        <h2 className="section-title highlight">🎯 Who Is This Course For?</h2>
        <div className="audience-grid">
          {audience.map((item, index) => (
            <div className="audience-card" key={index}>
              <FaUserGraduate className="audience-icon" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews">
        <h2 className="section-title">⭐ Student Reviews</h2>
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div className="review-card" key={index}>
              <div className="review-stars">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} color="#ffb703" />
                ))}
              </div>
              <p className="review-text">"{review.feedback}"</p>
              <p className="reviewer-name">{review.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="buy" className="pricing">
        <h2>💰 Price: <span>₹99/-</span></h2>
        <p>📥 Instant Access – Learn at your own pace</p>
        <a href="https://topmate.io/digitaldelightshop/1476757/pay" className="cta-button">👉 Enroll Now</a>
      </section>

    
    </div>
  );
};

export default Chatbot;
