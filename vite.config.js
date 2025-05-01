import { defineConfig } from 'vite';
import react from "@vitejs/plugin-react";



export default {
  plugins: [react()],
  preview: {
    port: 3001,
  },
  server: {
    port: 3000,
    strictPort: true,
  },
}

