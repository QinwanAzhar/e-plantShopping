import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// `base` is set to the repo name so the built app resolves assets
// correctly when served from GitHub Pages at
// https://<username>.github.io/e-plantShopping/
export default defineConfig({
  plugins: [react()],
  base: '/e-plantShopping/',
})
