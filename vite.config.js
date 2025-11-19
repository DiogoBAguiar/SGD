import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
<<<<<<< HEAD
  base: '/SGD/',

  root: path.resolve(__dirname, 'src'),
=======
  base: '/', 
  root: path.resolve(__dirname, 'src/templates'),
  
  publicDir: path.resolve(__dirname, 'public'),
>>>>>>> 91e85f83688f772bdc5eb3bbf9b7b8e7d3103781

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
<<<<<<< HEAD
        main: path.resolve(__dirname, 'src/index.html'),
=======
        // Páginas principais que já estavam funcionando
        main: path.resolve(__dirname, 'src/templates/index.html'),
>>>>>>> 91e85f83688f772bdc5eb3bbf9b7b8e7d3103781
        login: path.resolve(__dirname, 'src/templates/login.html'),
        agenda: path.resolve(__dirname, 'src/templates/agenda.html'),
        professores: path.resolve(__dirname, 'src/templates/professores.html'),
        secretarios: path.resolve(__dirname, 'src/templates/secretarios.html'),
        alunos: path.resolve(__dirname, 'src/templates/student_management.html'),
        profile: path.resolve(__dirname, 'src/templates/profile.html'),
        solicitacao: path.resolve(__dirname, 'src/templates/solicitacao.html'),
        documentos: path.resolve(__dirname, 'src/templates/documentos.html'),
        configuracoes: path.resolve(__dirname, 'src/templates/configuracoes.html'),
      },
    },
  },
})