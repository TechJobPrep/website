import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import "./MessageComponent.css";

const questions = [
  {
    question: "What is 1 + 1?",
    options: ["1", "2", "3", "11"],
    answer: "2",
  },
  {
    question: "Python is a _____ language.",
    options: ["Programming", "Cooking", "Snake", "Game"],
    answer: "Programming",
  },
  {
    question: "Which symbol is used for comments in Python?",
    options: ["#", "//", "--", "/*"],
    answer: "#",
  },
  {
    question: "Which keyword is used to start a function in Python?",
    options: ["func", "def", "function", "define"],
    answer: "def",
  },
];

const MessageComponent = () => {
  const [step, setStep] = useState("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const { width, height } = useWindowSize();

  const handleOptionClick = (option) => {
    const newAnswers = [...userAnswers, option];
    setUserAnswers(newAnswers);

    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      const isCorrect = questions.every((q, i) => q.answer === newAnswers[i]);
      setResult(isCorrect ? "success" : "fail");
      setStep("result");
    }
  };

  const restartQuiz = () => {
    setCurrentQ(0);
    setUserAnswers([]);
    setStep("quiz");
    setResult(null);
  };

  return (
    <div className="popup-overlay">
      <AnimatePresence>
        <motion.div
          className="popup-content"
          key={step + result}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {step === "intro" && (
            <>
              <h2 className="quiz-heading">🔥 Play Quiz to Unlock Offer!</h2>
              <p className="question-text">
                Answer 4 simple Python questions and get this course for just{" "}
                <strong>₹149</strong> (Original: ₹1499)
              </p>
              <button className="cta-button" onClick={() => setStep("quiz")}>
                Start Quiz
              </button>
            </>
          )}

          {step === "quiz" && (
            <>
              <h2 className="quiz-heading">🧠 Python Quiz</h2>
              <p className="question-text">{questions[currentQ].question}</p>
              <div className="options-container">
                {questions[currentQ].options.map((opt, idx) => (
                  <button
                    key={idx}
                    className="option-button"
                    onClick={() => handleOptionClick(opt)}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </>
          )}

          {step === "result" && result === "success" && (
            <>
              <Confetti width={width} height={height} numberOfPieces={300} />
              <h2 className="quiz-heading">🎉 Congratulations!</h2>
              <p className="question-text">
                You've unlocked this course for only <strong>₹149</strong> (Original: ₹1499)
              </p>
              <p className="seats-left">🔥 Only 25 seats left. Hurry up!</p>
              <a
                className="cta-button"
                href="https://topmate.io/digitaldelightshop/1083329/pay"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy Now
              </a>
            </>
          )}

          {step === "result" && result === "fail" && (
            <>
              <h2 className="quiz-heading">❌ Oops!</h2>
              <p className="question-text">
                Some answers were incorrect. Want to try again?
              </p>
              <button className="cta-button retry" onClick={restartQuiz}>
                Try Again
              </button>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MessageComponent;
