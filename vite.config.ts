import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@pages': '/src/pages',
      "@components": "src/components",
      "@tests": "src/tests",
      "@assets": "src/assets",
      "@theme": "src/theme",
      "@routes": "src/routes",
      "@recoil": "src/recoil",
      "@utils": "src/utils",
      "@locales": "src/locales",
      "@hooks": "src/hooks",
    },
  },
})
