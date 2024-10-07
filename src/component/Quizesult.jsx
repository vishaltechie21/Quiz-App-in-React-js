// src/components/QuizResult.js
import React from 'react';

const QuizResult = ({ score, totalQuestions, restartQuiz }) => {
    return (
        <div className="result-container">
            <h2>Your Score: {score}/{totalQuestions}</h2>
            <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
    );
};

export default QuizResult;
