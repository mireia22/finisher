import { NextRequest, NextResponse } from 'next/server';
import User from '@/lib/models/User';
import Question from '@/lib/models/Question'; // Importar el modelo Question
import { QuizInterface } from '@/app/simulation/summary/page';

export async function GET(req: NextRequest, { params }: { params: { quizId: string } }) {
    const { quizId } = params;

    try {
        const userId = req.headers.get('userId');
        if (!userId) {
            return NextResponse.json({ message: 'User ID is required.' }, { status: 400 });
        }

        const user = await User.findById(userId);
        if (!user) {
            return NextResponse.json({ message: 'User not found.' }, { status: 404 });
        }

        const quiz = user.quizzesDone.find((q: QuizInterface) => q._id.toString() === quizId);
        if (!quiz) {
            return NextResponse.json({ message: 'Quiz not found.' }, { status: 404 });
        }

        const resultsWithDetails = await Promise.all(quiz.results.map(async (result) => {
            const question = await Question.findById(result.question);
            return {
                statement: question?.statement,
                correctAnswer: question?.correctAnswer.text,
                correctAnswerExplanation: question?.correctAnswer.explanation,
                userAnswer: result.userAnswer,
                isCorrect: result.isCorrect
            };
        }));

        return NextResponse.json({ 
            quiz: { 
                score: quiz.score, 
                quizDate: quiz.quizDate, 
                results: resultsWithDetails 
            } 
        }, { status: 200 });    } catch (error) {
        console.error('Failed to fetch quiz results:', error);
        return NextResponse.json({ error: 'Failed to fetch quiz results' }, { status: 500 });
    }
}
