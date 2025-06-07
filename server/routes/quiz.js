// routes/quiz.js
import express from 'express';

import getQuizModel from '../utils/getQuizModel.js';
const router = express.Router();




router.get('/:courseName/quiz/:id', async (req, res) => {
  const courseName = req.params.courseName.toLowerCase(); // e.g., "cn"
  const quizNumber = parseInt(req.params.id);              // e.g., 1
  const collectionName = `${courseName}quiz${quizNumber}`; // → "cnquiz1"
  
  const quiz=getQuizModel(collectionName)
  try{
     const questions=await quiz.find()
     res.json(questions)
   }catch(err){
     res.status(404).json({error:err.message});
   }

 });

 export default router;


