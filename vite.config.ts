import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/gemini-cal/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: true
  },
  plugins: [react()],
})
