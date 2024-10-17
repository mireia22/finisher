import { QuestionAnswered } from "@/app/context/userContext";
import Question from "@/lib/models/Question";
import User from '@/lib/models/User';
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const userId = request.headers.get('userId'); 

  if (!userId) {
    return NextResponse.json({ message: 'User ID is required.' }, { status: 400 });
  }

  try {
    const user = await User.findById(userId)
    if (!user) {
      return NextResponse.json({ message: 'User not found.' }, { status: 404 });
    }

    const correctQuestionsIds = user.questionsAnswered
      .filter((answer: QuestionAnswered) => answer.isCorrect)
      .map((answer: QuestionAnswered) =>  answer._id?.toString())
      console.log("correct ids", correctQuestionsIds); 

    const correctQuestions = await Question.find({ _id: { $in: correctQuestionsIds } });
    console.log("correct", correctQuestions); 

    return NextResponse.json({ correctQuestions }, { status: 200 });
  } catch (error) {
    console.error('Error fetching correct questions:', error);
    return NextResponse.json({ message: 'Failed to retrieve questions.' }, { status: 500 });
  }
}
