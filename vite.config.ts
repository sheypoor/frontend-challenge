import { defineConfig } from 'vite'
import { alias } from './alias'

import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias,
  },
})
