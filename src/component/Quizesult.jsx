import React from 'react';

const QuizResult = ({ score, totalQuestions, restartQuiz, restartSelection }) => {
    return (
        <div className="result-container">
            <h2>Your Score: {score}/{totalQuestions}</h2>
            <button onClick={restartQuiz}>Restart Quiz</button>
            <button onClick={restartSelection}>Change the Topic</button>
        </div>
    );
};

export default QuizResult;
