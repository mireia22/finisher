import { NextResponse } from 'next/server';
import { getQuestionsByCategory } from '@/lib/resolvers/question';

export async function GET(req: Request, { params }: { params: { category: string } }) {
  const { category } = params;
  console.log("category in params",category)

  try {
    const questions = await getQuestionsByCategory(category);

    if (!questions.length) {
      return NextResponse.json({ error: 'No questions found' }, { status: 404 });
    }

    return NextResponse.json(questions, { status: 200 });
  } catch (error) {
    console.error('Error in category API route:', error);
    return NextResponse.json({ error: 'Failed to fetch questions' }, { status: 500 });
  }
}
