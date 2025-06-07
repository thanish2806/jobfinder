import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

router.get('/totalQuizQuestions', async (req, res) => {
  try {
    const db = mongoose.connection.db;

    // Get all collections
    const collections = await db.listCollections().toArray();

    // Filter to exclude problem-related collections
    const mcqCollections = collections.filter(col =>
      col.name !== 'problemtables' && col.name !== 'problemdetails'
    );

    let totalQuestions = 0;

    for (const col of mcqCollections) {
      const collection = db.collection(col.name);
      const count = await collection.countDocuments();
      totalQuestions += count;
    }

    res.json({ totalQuizQuestions: totalQuestions });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error counting MCQ documents' });
  }
});

export default router;
