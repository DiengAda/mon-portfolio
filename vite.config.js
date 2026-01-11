import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/adama-dieng-portfolio/', // Remplacez par le nom de votre repo GitHub
})
