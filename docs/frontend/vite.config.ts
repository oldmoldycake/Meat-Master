import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
/**
 * Vite configuration for the frontend application.
 * 
 * This configuration enables React plugin support and sets up the development server
 * with specific host, port, and polling settings for file watching.
 */
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    watch: {
      usePolling: true,
    }
  }
})
