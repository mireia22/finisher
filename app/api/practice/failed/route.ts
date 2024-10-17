import { NextResponse } from 'next/server';
import User from '@/lib/models/User'; 
import { QuestionAnswered } from '@/app/context/userContext';

export async function GET(request: Request) {
  const userId = request.headers.get('userId'); 

  if (!userId) {
    return NextResponse.json({ message: 'User ID is required.' }, { status: 400 });
  }

  try {
    const user = await User.findById(userId).populate({
      path: 'questionsAnswered._id',
      model: 'Question', 
    });

    if (!user) {
      return NextResponse.json({ message: 'User not found.' }, { status: 404 });
    }

    const failedQuestions = user.questionsAnswered
      .filter((answer: QuestionAnswered) => !answer.isCorrect)
      .map((answer: QuestionAnswered) => answer._id); 

    return NextResponse.json({ failedQuestions }, { status: 200 });
  } catch (error) {
    console.error('Error fetching failed questions:', error);
    return NextResponse.json({ message: 'Failed to retrieve questions.' }, { status: 500 });
  }
}
