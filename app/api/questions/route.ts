import { connectToDB } from '@/lib/db';
import { NextResponse } from 'next/server';
import Question from '@/lib/models/Question';

export async function GET() {
  try {
    await connectToDB();
    const questions = await Question.find({}).lean();
    return NextResponse.json(questions, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch questions:', error);
    return NextResponse.json({ error: 'Failed to fetch questions' }, { status: 500 });
  }
}
