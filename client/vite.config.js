import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
=======
  base: '/',
>>>>>>> 4bea35638929896f45d54f56a204d706ff6b96fc
  server: {
    proxy: {
      '/api': 'http://localhost:5000',
    },
    historyApiFallback: true,
  },
});
