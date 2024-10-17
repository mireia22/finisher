"use client"
import { useUserContext } from '@/app/context/userContext';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export interface QuizInterface {
    _id: string;
    quizDate: string;
    score: number;
}

const SimulationSummaryPage = () => {
    const { user } = useUserContext();
    const [quizzesDone, setQuizzesDone] = useState<QuizInterface[]>([]);
    const [loading, setLoading] = useState(true);

    const userId = user?.user.id || localStorage.getItem('user');

    useEffect(() => {
        const fetchQuizzes = async () => {
            try {
                if (!userId) {
                    throw new Error('User ID is required.');
                }

                const response = await fetch('/api/simulation/summary', {
                    method: 'GET',
                    headers: {
                        'userId': userId as string,
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch quizzes');
                }

                const data = await response.json();
                setQuizzesDone(data.userQuizzes);
            } catch (error) {
                console.error('Error fetching quizzes:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchQuizzes();
    }, [userId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold mb-4 text-center">Quizzes Summary</h1>
            {quizzesDone.length > 0 ? (
                <div className="space-y-4 flex flex-col gap-2">
                    {quizzesDone.map((quiz) => (
                        <Link href={`/simulation/summary/${quiz._id}`} key={quiz._id}>
                            <div className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex justify-between items-center">
                                <h2 className="text-sm font-semibold">
                                    {new Date(quiz.quizDate).toLocaleDateString()}
                                </h2>
                                <p className="text-gray-700">Score: {quiz.score}</p>
                                <button className="text-blue-500 hover:underline">Repetir</button>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">No quizzes completed yet.</p>
            )}
        </div>
    );
};

export default SimulationSummaryPage;
