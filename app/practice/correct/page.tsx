"use client"
import Quiz from '@/app/components/Quiz';
import React, { useEffect, useState } from 'react';
import { Question, useUserContext } from '@/app/context/userContext';

const CorrectPage = () => {
  const [correctQuestions, setCorrectQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);

  const { user } = useUserContext();
  const userId = user?.user.id || localStorage.getItem('user');
 
  console.log("correct questions", correctQuestions)

  useEffect(() => {
    const fetchCorrectQuestions = async () => {
      try {
        if (!userId) {
          throw new Error('User ID is required.');
        }

        const response = await fetch('/api/practice/correct', {
          method: 'GET',
          headers: {
            'userId': userId as string, 
          },
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch correct questions');
        }
        
        const data = await response.json();
        setCorrectQuestions(data.correctQuestions);
      } catch (error) {
        console.error('Error fetching failed questions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCorrectQuestions();
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center mt-20 gap-4">
      <Quiz questions={correctQuestions} />
    </div>
  );
};

export default CorrectPage;
