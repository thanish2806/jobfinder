import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:5000', // 🔁 Proxy API calls to backend
    },
    historyApiFallback: true, // ✅ Handles SPA routing
  },
  base: '/',
});