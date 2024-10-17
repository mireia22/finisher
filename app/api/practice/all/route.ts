import { NextRequest, NextResponse } from 'next/server';
import Question from '@/lib/models/Question';

export async function GET(req: NextRequest) {
  const token = req.cookies.get('token')?.value;
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const allQuestions = await Question.find()
    console.log("all questions", allQuestions)

    return NextResponse.json({ allQuestions }, { status: 200 });
  } catch (error) {
    console.error('Error fetching all questions:', error);
    return NextResponse.json({ message: 'Failed to retrieve questions.' }, { status: 500 });
  }
}
