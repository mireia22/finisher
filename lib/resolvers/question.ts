import { connectToDB } from '@/lib/db';
import Question from '@/lib/models/Question';

export async function getQuestionsByCategory(category: string) {
    try {
      await connectToDB();
      const questions = await Question.find({ category }).lean(); 
      return questions;
    } catch (error) {
      console.error('Error fetching questions by category:', error);
      throw new Error('Failed to fetch questions');
    }
  }

export const getCategoryCount = async () => {
  await connectToDB();
  const categorysWithCount = await Question.aggregate([
    {
      $group: {
        _id: '$category',
        count: { $sum: 1 },
      },
    },
    {
      $project: {
        category: '$_id',
        count: 1,
        _id: 0,
      },
    },
  ]);
  console.log("categories with count", categorysWithCount)

  return categorysWithCount;
};


