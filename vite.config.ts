import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __TOKEN__: `"${process.env.TOKEN}"` // wrapping in "" since it's a string
  },
})
