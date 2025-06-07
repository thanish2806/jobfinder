import express from 'express';
import { createProblem, getAllProblems, getProblemById } from '../controllers/problemController.js';

const router = express.Router();

router.post('/add', createProblem);
router.get('/', getAllProblems);
router.get('/:id', getProblemById);

export default router;
