import { NextResponse } from 'next/server';
import { getQuestionsByCategory } from '@/lib/resolvers/question';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get('category');

  if (!category) {
    return NextResponse.json({ error: 'Category is required' }, { status: 400 });
  }

  try {
    const questions = await getQuestionsByCategory(category);
    return NextResponse.json(questions, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch questions by category:', error);
    return NextResponse.json({ error: 'Failed to fetch questions by category' }, { status: 500 });
  }
}
