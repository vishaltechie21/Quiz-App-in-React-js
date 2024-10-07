// src/components/Quiz.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuizResult from '../Quizesult'; // Correct import path
import Loader from '../Loader/Loader';
import CountdownTimer from '../CountdownTimer/CountdownTimer'; // Import CountdownTimer
import './Quiz.css';

const Quiz = ({ topicId, restartSelection }) => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [loading, setLoading] = useState(true);
    const [showResults, setShowResults] = useState(false);

    useEffect(() => {
        const fetchQuestions = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://opentdb.com/api.php?amount=10&category=${topicId}&type=multiple`);
                const formattedQuestions = response.data.results.map((question) => ({
                    question: question.question,
                    options: [...question.incorrect_answers, question.correct_answer].sort(),
                    answer: question.correct_answer,
                }));
                setQuestions(formattedQuestions);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching questions:', error);
                setLoading(false);
            }
        };

        fetchQuestions();
    }, [topicId]);

    const handleOptionClick = (option) => {
        if (option === questions[currentQuestionIndex].answer) {
            setScore(score + 1);
        }

        goToNextQuestion();
    };

    const goToNextQuestion = () => {
        const nextQuestion = currentQuestionIndex + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestionIndex(nextQuestion);
        } else {
            setShowResults(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setShowResults(false);
    };

    if (loading) {
        return <Loader />;
    }

    if (questions.length === 0) {
        return <div>No questions available. Please select another topic or try again later.</div>;
    }

    if (showResults) {
        return (
            <QuizResult
                score={score}
                totalQuestions={questions.length}
                restartQuiz={restartQuiz}
                restartSelection={restartSelection} // Pass restartSelection here
            />
        );
    }

    return (
        <div className="quiz-container">
            <h2>{decodeURIComponent(questions[currentQuestionIndex]?.question || '')}</h2>

            {/* Countdown Timer Component */}
            <CountdownTimer 
                duration={12} 
                onTimeOut={goToNextQuestion} 
                keyReset={currentQuestionIndex} 
            />

            <div className="options-container">
                {questions[currentQuestionIndex]?.options.map((option, index) => (
                    <button
                        key={index}
                        className="option-button"
                        onClick={() => handleOptionClick(decodeURIComponent(option))}
                    >
                        {decodeURIComponent(option)}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Quiz;
