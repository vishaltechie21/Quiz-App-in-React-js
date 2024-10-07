// src/components/CountdownTimer.js
import React, { useEffect, useState } from 'react';

const CountdownTimer = ({ duration, onTimeOut, keyReset }) => {
    const [timeLeft, setTimeLeft] = useState(duration);

    useEffect(() => {
        setTimeLeft(duration); // Reset timer whenever keyReset changes
        const timerId = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime === 1) {
                    clearInterval(timerId);
                    onTimeOut(); // Call the function to move to the next question when time is up
                }
                return prevTime - 1;
            });
        }, 1000);

        // Cleanup interval on unmount or when keyReset changes
        return () => clearInterval(timerId);
    }, [keyReset, duration, onTimeOut]);

    return (
        <div className="countdown-timer">
            <p>Time Left: {timeLeft}s</p>
        </div>
    );
};

export default CountdownTimer;
