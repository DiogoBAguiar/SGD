import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  root: path.resolve(__dirname, 'src/templates'), // Define onde está o HTML principal
  publicDir: path.resolve(__dirname, 'public'),   // Caso tenha assets públicos
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@js': path.resolve(__dirname, 'src/js'),
      '@templates': path.resolve(__dirname, 'src/templates'),
    },
  },
  server: {
    open: true,
  },
})
