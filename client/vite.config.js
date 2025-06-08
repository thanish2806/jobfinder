import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/skillnest/', // ✅ Required for GitHub Pages
  server: {
    proxy: {
      '/api': 'http://localhost:5000', // 🔁 Proxy API calls to backend (only for dev)
    },
  },
});
