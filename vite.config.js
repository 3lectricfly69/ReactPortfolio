import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000,  // Bind to Heroku's PORT environment variable
    host: '0.0.0.0',                 // Allow external connections
    open: process.env.NODE_ENV === 'development',
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './src/tests/setup.js',
  }
});


// DNS target: guarded-sparrow-0oruhha63p7flstso780vf4r.herokudns.com