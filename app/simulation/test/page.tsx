"use client"
import React, { useEffect, useState } from 'react';
import { Question, useUserContext } from '@/app/context/userContext';
import CountDown from '@/app/components/CountDown';
import SimulationQuiz from '@/app/components/SimulationQuiz';

const SimulationTestPage = () => {
  const [simulationQuestions, setSimulationQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [isCountingDown, setIsCountingDown] = useState(true); 

  const { user } = useUserContext();
  const userId = user?.user.id || localStorage.getItem('user');

  console.log("simulation questions", simulationQuestions)

  useEffect(() => {
    const fetchSimulationQuestions = async () => {
      try {
        
        const response = await fetch('/api/simulation', {
          method: 'GET',
          
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch simulation questions.');
        }
        
        const data = await response.json();
        console.log("DATA", data)
        setSimulationQuestions(data);
      } catch (error) {
        console.error('Error fetching simulation questions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSimulationQuestions();
  }, [userId]);

  const handleTimeUp = () => {
    alert('El tiempo ha terminado.');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center  mt-20 gap-4">
      {isCountingDown && (
        <CountDown onTimeUp={handleTimeUp} />
      )}
      <SimulationQuiz questions={simulationQuestions} />
    </div>
  );
};

export default SimulationTestPage;
