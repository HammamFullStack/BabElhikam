import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '192.168.1.30', // Allows access from other devices
    port: 5173,      // Default port (change if needed)
  },
});
