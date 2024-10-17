import { connectToDB } from '@/lib/db';
import { NextResponse } from 'next/server';
import Question from '@/lib/models/Question';

export async function GET() {
  try {
    await connectToDB();
    const questions = await Question.find({});
    
    // Agrupar preguntas por categoría
    const groupedQuestions = questions.reduce((acc, question) => {
      const category = question.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(question);
      return acc;
    }, {});

    const selectedQuestions = [];
    const numberOfQuestionsPerCategory = 1; // Cambia este valor si deseas más de 1 pregunta por categoría

    // Seleccionar preguntas de cada categoría
    for (const category in groupedQuestions) {
      const categoryQuestions = groupedQuestions[category];
      const randomIndices = Array.from({ length: categoryQuestions.length }, (_, i) => i); // Crear un array de índices
      // Mezclar los índices
      randomIndices.sort(() => Math.random() - 0.5);
      
      // Seleccionar preguntas aleatorias
      for (let i = 0; i < Math.min(numberOfQuestionsPerCategory, categoryQuestions.length); i++) {
        selectedQuestions.push(categoryQuestions[randomIndices[i]]);
      }
    }

    // Mezclar las preguntas seleccionadas
    selectedQuestions.sort(() => Math.random() - 0.5);

    // Limitar a 5 preguntas en total
    const finalQuestions = selectedQuestions.slice(0, 5);

    console.log("final questions", finalQuestions)
    return NextResponse.json(finalQuestions, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch questions:', error);
    return NextResponse.json({ error: 'Failed to fetch questions' }, { status: 500 });
  }
}
