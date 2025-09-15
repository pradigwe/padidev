import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

 // vite.config.ts
import svgrPlugin from 'vite-plugin-svgr';


// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react(),
    svgrPlugin(),
  ],
})

