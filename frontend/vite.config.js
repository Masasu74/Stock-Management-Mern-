import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000', // Backend server running on port 4000
        changeOrigin: true, // Helps with CORS issues
        secure: false, // Set to true if using HTTPS
      },
    },
  },
});
