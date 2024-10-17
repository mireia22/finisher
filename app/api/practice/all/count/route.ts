import { NextResponse } from 'next/server';
import User from '@/lib/models/User'; 
import Question from '@/lib/models/Question';

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

    const allQuestions = await Question.find()
    const allQuestionsCount = allQuestions.length; 
    console.log("all questions", allQuestionsCount)

    return NextResponse.json({ allQuestionsCount }, { status: 200 });
  } catch (error) {
    console.error('Error fetching all questions count:', error);
    return NextResponse.json({ message: 'Failed to retrieve questions.' }, { status: 500 });
  }
}
