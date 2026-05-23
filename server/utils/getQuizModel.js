import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
  question: String,
  options: [String],
  answer: String,
  explanation: String
}, { versionKey: false });

const getQuizModel = (collectionName) => {
  return mongoose.models[collectionName] || mongoose.model(collectionName, quizSchema, collectionName);
};

export default getQuizModel;
