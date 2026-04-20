import { defineConfig, mergeConfig } from 'vite'
import react from '@vitejs/plugin-react'
import baseConfig from '../../vite.config.base'

export default mergeConfig(baseConfig, {
  plugins: [react()],
  server: {
    port: 5173,
  }
})
