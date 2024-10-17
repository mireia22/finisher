"use client";
import Quiz from '@/app/components/Quiz';
import { Question } from '@/app/context/userContext';
import { useState, useEffect } from 'react';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

const CategoryPage = ({ params }: CategoryPageProps) => {
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  console.log("filtered questions", filteredQuestions)

  useEffect(() => {
    const fetchQuestionsByCategory = async () => {
      try {
        const response = await fetch(`/api/practice/category/${params.category}`);
        console.log(response)
        if (!response.ok) {
          throw new Error(`Failed to fetch questions for category: ${params.category}`);
        }
        const questions: Question[] = await response.json();

        console.log("Filtered Questions by Category:", questions); 

        setFilteredQuestions(questions);
      } catch (error) {
        console.error('Error fetching questions by category:', error);
      } finally {
        setLoading(false);
      }
    };

    if (params.category) {
      fetchQuestionsByCategory();
    }
  }, [params.category]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className='flex flex-col items-center justify-between p-6'>
      {filteredQuestions.length > 0 ? (
        <Quiz questions={filteredQuestions} />
      ) : (
        <p>No questions available for this Category.</p>
      )}
    </div>
  );
};

export default CategoryPage;
