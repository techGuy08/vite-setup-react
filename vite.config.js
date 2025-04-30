import { defineConfig } from 'vite';
import react from "@vitejs/plugin-react";



export default {
  plugins: [react()],
server: {
    port: 3000,
    strictPort: true,
  },
}

