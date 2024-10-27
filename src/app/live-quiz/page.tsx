"use client";

import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import './quiz.css';  // Import the CSS file

type Question = {
  question: string;
  options: string[];
  answer: string;
};

const quizData: Question[] = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  // Add more questions as needed
];

const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === quizData[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <div className="quiz-background" /> {/* Background image */}
      <Sidebar /> {/* Sidebar component */}
      <div className="quiz-content">
        <h1 className="quiz-title">Quiz</h1>
        {currentQuestionIndex < quizData.length ? (
          <div>
            <h2 className="quiz-question">{currentQuestion.question}</h2>
            <div className="quiz-options">
              {currentQuestion.options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  className={`quiz-option ${selectedOption === option ? 'selected' : ''}`}
                >
                  {option}
                </button>
              ))}
            </div>
            <button
              onClick={handleNextQuestion}
              disabled={!selectedOption}
              className="next-button"
            >
              Next
            </button>
          </div>
        ) : (
          <div className="quiz-result">
            <h2>Your score: {score}/{quizData.length}</h2>
            <button
              onClick={() => {
                setCurrentQuestionIndex(0);
                setScore(0);
              }}
              className="restart-button"
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
