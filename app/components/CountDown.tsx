"use client"
import React, { useEffect, useState } from 'react';

const CountDown = ({ onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(3600); 

  console.log("TIME LEFT", timeLeft)
  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return; 
    }

    const intervalId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId); 
  }, [timeLeft, onTimeUp]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className='bg-ambar-600 p-2 rounded-md font-semibold fixed top-12 right-2'>
      <h1>Time Left: {formatTime(timeLeft)}</h1>
    </div>
  );
};

export default CountDown;
