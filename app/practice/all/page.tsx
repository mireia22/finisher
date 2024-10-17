"use client"
import Quiz from '@/app/components/Quiz';
import React, { useEffect, useState } from 'react';
import { Question } from '@/app/context/userContext';

const AllQuestionsPage = () => {
  const [allquestions, setAllQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  console.log("ALL QUESTIONS", allquestions)

 
  console.log("aLL questions", allquestions)

  useEffect(() => {
    const fetchAllQuestions = async () => {
      try {
        
        const response = await fetch('/api/practice/all', {
          method: 'GET',
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch failed questions');
        }
        
        const data = await response.json();
        setAllQuestions(data.allQuestions);
      } catch (error) {
        console.error('Error fetching failed questions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllQuestions();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center mt-20 gap-4">
      <Quiz questions={allquestions} />
    </div>
  );
};

export default AllQuestionsPage;
