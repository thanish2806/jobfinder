import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/skillify/',
  server: {
    proxy: {
      '/api': 'http://localhost:5000',
    },
    historyApiFallback: true,
  },
});
