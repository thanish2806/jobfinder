import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';
import cors from 'cors';
import axios from 'axios';
import mongoose from 'mongoose';

// Load environment variables
dotenv.config();

// Import routes
import jobRoutes from './routes/jobRoutes.js';
import quiz from './routes/quiz.js';
import problemsTable from './routes/ProblemTable.js';
import problemsDetails from './routes/problemDetails.js';
import problemStatsRoutes from './routes/problemStats.js';
import questionCount from './routes/questionCount.js';

// Create Express app and HTTP server
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: [
  'http://localhost:5173',
  'http://localhost:3000',
  'https://jobfinder-frontend.onrender.com'
],

    methods: ['GET', 'POST'],
    credentials: true,
  },
});

// Middleware
app.use(cors({
  origin: [
  'http://localhost:5173',
  'http://localhost:3000',
'https://jobfinder-frontend.onrender.com'],

  methods: ['GET', 'POST'],
  credentials: true,
}));
app.use(express.json());

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => {
    console.error('❌ Failed to connect to MongoDB:', err.message);
    process.exit(1);
  });



// ✅ API Routes
app.use('/api', jobRoutes);
app.use('/mcq', quiz);
app.use('/problems', problemsTable);
app.use('/problem/:id', problemsDetails);
app.use('/stats', questionCount);
app.use('/stats', problemStatsRoutes);


// ✅ API Health Check
app.get('/', (req, res) => {
  res.send('✅ API is running...');
});

// ✅ OpenRouter Chat WebSocket
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
if (!OPENROUTER_API_KEY) {
  console.error('❌ OPENROUTER_API_KEY is missing in .env');
}


io.on('connection', (socket) => {
  console.log('✅ User connected:', socket.id);

  socket.on('userMessage', async (message) => {
    const prompt = [
      {
        role: 'system',
        content: `
          You are an expert math and friendly tutor also give tips for job search and preparation.
          Always explain aptitude and math problems clearly in numbered steps.
          Use plain English and simple arithmetic. Avoid LaTeX or math symbols.
          End with the final answer in **bold** using **Answer: ...** format.
          You must respond to all user requests.
        `,
      },
      {
        role: 'user',
        content: message,
      },
    ];

    // Attempt to get a reply using a robust fallback list of models to handle rate/spend limits
    let reply = null;
    let success = false;
    const models = [
      'qwen/qwen3-next-80b-a3b-instruct:free',
      'qwen/qwen3-coder:free',
      'openrouter/free'
    ];

    for (const model of models) {
      try {
        const response = await axios.post(
          'https://openrouter.ai/api/v1/chat/completions',
          {
            model: model,
            messages: prompt,
          },
          {
            headers: {
              'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
              'Content-Type': 'application/json',
              'HTTP-Referer': process.env.FRONTEND_URL || 'http://localhost:5173',
              'X-Title': 'Qwen Chatbot',
            },
          }
        );
        reply = response.data.choices?.[0]?.message?.content;
        if (reply) {
          success = true;
          console.log(`✅ Chatbot replied using model: ${model}`);
          break;
        }
      } catch (err) {
        console.error(`❌ Chatbot error for model ${model}:`, err.response?.data || err.message);
      }
    }

    if (success && reply) {
      socket.emit('botReply', reply);
    } else {
      socket.emit('botReply', 'Sorry, something went wrong while contacting the AI.');
    }
  });

  socket.on('disconnect', () => {
    console.log('🚪 User disconnected:', socket.id);
  });
});

// ✅ Start the Server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

