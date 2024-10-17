import { NextRequest, NextResponse } from "next/server";
import { getUserById, getQuestionIndex, addIncorrectAnswer, updateIncorrectAnswer } from "@/lib/resolvers/user";

export async function POST(request: NextRequest) {
  const { userId, questionId } = await request.json();
  console.log("ADD INCORRECT req: ", userId, questionId);

  if (!userId || !questionId) {
    return NextResponse.json({ message: 'User ID and Question ID are required.' }, { status: 400 });
  }

  const user = await getUserById(userId);

  if (!user) {
    return NextResponse.json({ message: 'User not found.' }, { status: 404 });
  }

  const questionIndex = getQuestionIndex(user, questionId);

  try {
    if (questionIndex !== -1) {
      if (user.questionsAnswered[questionIndex].isCorrect) {
        await updateIncorrectAnswer(userId, questionId);
        return NextResponse.json({ message: 'Answer updated to incorrect successfully.' }, { status: 200 });
      } else {
        return NextResponse.json({ message: 'Question has already been answered incorrectly.' }, { status: 400 });
      }
    } else {
      await addIncorrectAnswer(userId, questionId);
      return NextResponse.json({ message: 'Incorrect answer added successfully.' }, { status: 200 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to process the answer.' }, { status: 500 });
  }
}
