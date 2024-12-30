import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
plugins: [react()],
server: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0',
    open: process.env.NODE_ENV === 'development'
},
test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './src/tests/setup.js',
},
});

// DNS target: guarded-sparrow-0oruhha63p7flstso780vf4r.herokudns.com