// routes/quizStats.js
import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

/**
 * Endpoint: GET /stats/totalQuizQuestions
 * Description: Returns the total number of quiz questions across all quiz collections.
 * Each quiz collection is assumed to have 15 questions.
 */
router.get('/totalQuizQuestions', async (req, res) => {
  try {
    const collections = await mongoose.connection.db.listCollections().toArray();

    // Filter collections with 'quiz' in the name and exclude any related to 'problem'
    const quizCollections = collections
      .map(col => col.name)
      .filter(name => /quiz/i.test(name) && !/problem/i.test(name));

    const totalQuestions = quizCollections.length * 15; // Each collection has 15 questions

    res.json({ totalQuizQuestions: totalQuestions });
  } catch (err) {
    console.error('❌ Error calculating total quiz questions:', err);
    res.status(500).json({ error: 'Failed to calculate total quiz questions' });
  }
});

export default router;
