import User from '@/lib/models/User';
import { connectToDB } from '../db';

export const getUserById = async (id: string) => {
  return await User.findById(id).select('-password'); 
};

export function getQuestionIndex(user: any, questionId: string) {
  return user.questionsAnswered.findIndex((q: { _id: string }) => q?._id?.toString() === questionId);
}


export async function addCorrectAnswer(userId: string, questionId: string) {
  return await User.findByIdAndUpdate(userId, {
    $push: { questionsAnswered: { _id: questionId, isCorrect: true } },
  });
}

export async function updateCorrectAnswer(userId: string, questionId: string) {
  return await User.updateOne(
    { _id: userId, 'questionsAnswered._id': questionId },
    { $set: { 'questionsAnswered.$.isCorrect': true } }
  );
}

export async function addIncorrectAnswer(userId: string, questionId: string) {
  return await User.findByIdAndUpdate(userId, {
    $addToSet: {
      questionsAnswered: {
        _id: questionId,
        isCorrect: false,
      },
    },
  });
}

export async function updateIncorrectAnswer(userId: string, questionId: string) {
  return await User.updateOne(
    { _id: userId, 'questionsAnswered._id': questionId },
    { $set: { 'questionsAnswered.$.isCorrect': false } }
  );
}



export async function saveQuizResult(userId:string, quizResults) {
  try {
    await connectToDB();

    const score = quizResults.reduce((acc, result) => acc + (result.isCorrect ? 1 : 0), 0);

    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    user.quizzesDone.push({
      results: quizResults,
      score: score,
    });

    await user.save();

    console.log('Quiz results saved successfully');
  } catch (error) {
    console.error('Error saving quiz results:', error);
  }
}