import { NextRequest, NextResponse } from "next/server";
import { getUserById, getQuestionIndex, addCorrectAnswer, updateCorrectAnswer } from "@/lib/resolvers/user";

export async function POST(request: NextRequest) {
  const { userId, questionId } = await request.json();

  if (!userId || !questionId) {
    return NextResponse.json({ message: 'User ID and Question ID are required.' }, { status: 400 });
  }

  const user = await getUserById(userId);

  if (!user) {
    return NextResponse.json({ message: 'User not found.' }, { status: 404 });
  }

  const questionIndex = getQuestionIndex(user, questionId);

  try {
    if (questionIndex === -1) {
      await addCorrectAnswer(userId, questionId);
      return NextResponse.json({ message: 'Correct answer added successfully.' }, { status: 200 });
    } else {
      await updateCorrectAnswer(userId, questionId);
      return NextResponse.json({ message: 'Answer updated to correct successfully.' }, { status: 200 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to process the answer.' }, { status: 500 });
  }
}
