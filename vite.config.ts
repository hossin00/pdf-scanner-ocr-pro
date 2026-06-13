import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  base: '/pdf-scanner-ocr-pro/',
  build: { outDir: 'dist' }
})
