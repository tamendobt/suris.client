import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    server: {
      proxy: {
        "/api": "http://localhost:5154",
      },
      open: true,
      origin: 'http://127.0.0.1:5173/'
    },
  },
})
