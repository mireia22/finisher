import { connectToDB } from "@/lib/db";
import Question from "@/lib/models/Question";
import { testQuestions } from "@/paragliding-questions";
import { NextResponse } from "next/server";

export async function POST() {
    try {
   await  connectToDB()
  
      const existingQuestions = await Question.find({});
      if (existingQuestions.length > 0) {
        return NextResponse.json({ message: 'Database already seeded!' }, { status: 200 });
      }
  
      await Question.insertMany(testQuestions);
  
      return NextResponse.json({ message: 'Seeding successful!' }, { status: 201 });
    }  catch (error) {
        console.error('Error creating questions:', error);
        return NextResponse.json({ error: 'Failed to create questions' }, { status: 500 });
      }
  }