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
  'http://localhost:5174',
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
  'http://localhost:5174',
'https://jobfinder-frontend.onrender.com'],

  methods: ['GET', 'POST'],
  credentials: true,
}));
app.use(express.json());

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => {
  console.error('❌ Failed to connect to MongoDB:', err.message);
  process.exit(1); // stop the server if DB connection fails
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
          You are an expert math tutor also give tips for job search and preparation.
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

    try {
      const response = await axios.post(
        'https://openrouter.ai/api/v1/chat/completions',
        {
          model: 'qwen/qwen-2.5-7b-instruct:free',
          messages: prompt,
        },
        {
          headers: {
            'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
            'Content-Type': 'application/json',
            'HTTP-Referer': 'http://localhost:3000',
            'X-Title': 'Qwen Chatbot',
          },
        }
      );

      const reply = response.data.choices?.[0]?.message?.content || 'No reply received.';
      socket.emit('botReply', reply);
    } catch (error) {
      console.error('❌ Chatbot error:', error.response?.data || error.message);
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
