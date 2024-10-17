"use client"
import Quiz from '@/app/components/Quiz';
import React, { useEffect, useState } from 'react';
import { Question, useUserContext } from '@/app/context/userContext';

const FailedPage = () => {
  const [failedQuestions, setFailedQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);

  const { user } = useUserContext();
  const userId = user?.user.id || localStorage.getItem('user');
 
  console.log("failed questions", failedQuestions)

  useEffect(() => {
    const fetchFailedQuestions = async () => {
      try {
        if (!userId) {
          throw new Error('User ID is required.');
        }

        const response = await fetch('/api/practice/failed', {
          method: 'GET',
          headers: {
            'userId': userId as string, 
          },
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch failed questions');
        }
        
        const data = await response.json();
        setFailedQuestions(data.failedQuestions);
      } catch (error) {
        console.error('Error fetching failed questions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFailedQuestions();
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center mt-20 gap-4">
      <Quiz questions={failedQuestions} />
    </div>
  );
};

export default FailedPage;
