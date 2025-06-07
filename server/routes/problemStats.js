// routes/problemStats.js
import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

// Define the Mongoose schema (should match your DB structure)
const problemSchema = new mongoose.Schema({}, { strict: false });
const ProblemDetail = mongoose.model('ProblemDetail', problemSchema, 'problemdetails'); // Collection name is important

// GET total number of problems
router.get('/totalProblems', async (req, res) => {
  try {
    const total = await ProblemDetail.countDocuments();
    res.json({ total });
  } catch (err) {
    console.error('Error fetching total problems:', err);
    res.status(500).json({ error: 'Failed to fetch total problems' });
  }
});

export default router;
