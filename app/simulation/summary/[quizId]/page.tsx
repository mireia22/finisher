"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useUserContext } from '@/app/context/userContext';

const QuizResultsPage = () => {
    const params = useParams();
    const { quizId } = params; 

    const { user } = useUserContext();
    const [quizResults, setQuizResults] = useState(null);
    const [loading, setLoading] = useState(true);

    const userId = user?.user.id || localStorage.getItem('user');

    useEffect(() => {
        const fetchQuizResults = async () => {
            if (!quizId || !userId) return;

            try {
                const response = await fetch(`/api/simulation/summary/${quizId}`, {
                    method: 'GET',
                    headers: {
                        'userId': userId as string,
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch quiz results');
                }

                const data = await response.json();
                setQuizResults(data.quiz);
            } catch (error) {
                console.error('Error fetching quiz results:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchQuizResults();
    }, [quizId, userId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!quizResults) {
        return <div>No quiz results available.</div>;
    }

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold mb-4 text-center">Quiz Results</h1>
            <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-lg font-semibold">Score: {quizResults.score}</h2>
                <h3 className="text-md font-semibold">Date: {new Date(quizResults.quizDate).toLocaleDateString()}</h3>
                <div className="mt-4">
    {quizResults.results.map((result, index) => (
        <div 
            key={index} 
            className={`${result.isCorrect ? 'bg-green-300' : 'bg-red-200'} border-b py-2`}
        >
            <p><strong>Question:</strong> {result.statement}</p>
            <p><strong>Your Answer:</strong> {result.userAnswer}</p>
            <p><strong>Correct Answer:</strong> {result.correctAnswer}</p>
            <p><strong>Explanation:</strong> {result.correctAnswerExplanation}</p>
        </div>
    ))}
</div>

            </div>
        </div>
    );
};

export default QuizResultsPage;
