import { Schema, model, models } from 'mongoose';

const answerSchema = new Schema({
  text: { type: String, required: true },
  explanation: { type: String, required: true },
});

const questionSchema = new Schema({
  statement: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: false },
  correctAnswer: answerSchema,
  incorrectAnswers: [answerSchema], 
});

const Question = models.Question || model('Question', questionSchema);

export default Question;
