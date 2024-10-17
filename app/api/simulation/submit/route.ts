
import { connectToDB } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import { saveQuizResult } from '@/lib/resolvers/user';
import User from '@/lib/models/User';

export async function POST(req: NextRequest) {
    try {
      await connectToDB();
     

      const { userId, quizResults } = await req.json();

      console.log("quiz result", quizResults)

      quizResults.forEach(result => {
        if (!result.question) {
          throw new Error("Each quiz result must include a 'question' field");
        }
      });
  
      const user = await User.findById(userId);
      if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }
  
      user.quizzesDone.push({
        results: quizResults,
        score: quizResults.filter(result => result.isCorrect).length, 
      });
  
      await user.save();
  
      return NextResponse.json({ message: 'Quiz submitted successfully' }, { status: 200 });
    } catch (error) {
      console.error('Failed to submit quiz:', error);
      return NextResponse.json({ error: 'Failed to submit quiz' }, { status: 500 });
    }
  }
