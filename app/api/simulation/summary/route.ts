import { NextRequest, NextResponse } from 'next/server';
import User from '@/lib/models/User';
import { QuizInterface } from '@/app/simulation/summary/page';

export async function GET(req: NextRequest) {
    const userId = req.headers.get('userId');

    if (!userId) {
        return NextResponse.json({ message: 'User ID is required.' }, { status: 400 });
    }

    try {
        const user = await User.findById(userId);
        if (!user) {
            return NextResponse.json({ message: 'User not found.' }, { status: 404 });
        }

        const userQuizzes = user.quizzesDone.map((quiz: QuizInterface ) => ({
            quizDate: quiz.quizDate,
            score: quiz.score,
            _id: quiz._id, 
        }));

        return NextResponse.json({ userQuizzes }, { status: 200 });
    } catch (error) {
        console.error('Failed to fetch quizzes:', error);
        return NextResponse.json({ error: 'Failed to fetch quizzes' }, { status: 500 });
    }
}
