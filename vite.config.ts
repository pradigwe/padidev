import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

 // vite.config.ts
import svgrPlugin from 'vite-plugin-svgr';


// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react(),
    tailwindcss(),
    svgrPlugin(),
  ],
})

