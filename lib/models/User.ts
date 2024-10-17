import { Schema, model, models } from 'mongoose';
import bcrypt from "bcryptjs";

const quizResultSchema = new Schema({
  question: { type: Schema.Types.ObjectId, ref: 'Question', required: true }, 
  userAnswer: { type: String}, 
  isCorrect: { type: Boolean, required: true }, 
});

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    enum: ['user', 'admin'], 
    default: 'user', 
  },
  quizzesDone: [
    {
      quizDate: { type: Date, default: Date.now },
      results: [quizResultSchema], 
      score: { type: Number, required: true }, 
    }
  ]
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = models?.User || model('User', userSchema);

export default User;
