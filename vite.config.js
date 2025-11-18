import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  base: '/SGD/',

  root: path.resolve(__dirname, 'src'),

  resolve: {
    alias: {
      '/js': path.resolve(__dirname, 'src/js'),
      '@js': path.resolve(__dirname, 'src/js')
    },
  },

  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,

    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.html'),
        login: path.resolve(__dirname, 'src/templates/login.html'),
        agenda: path.resolve(__dirname, 'src/templates/agenda.html'),
        professores: path.resolve(__dirname, 'src/templates/professores.html'),
        secretarios: path.resolve(__dirname, 'src/templates/secretarios.html'),
        alunos: path.resolve(__dirname, 'src/templates/student_management.html'),
        profile: path.resolve(__dirname, 'src/templates/profile.html'),
      },
    },
  },
})
