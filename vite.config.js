import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  // Raiz continua sendo os templates HTML
  root: path.resolve(__dirname, 'src/templates'),
  
  publicDir: path.resolve(__dirname, 'public'),

  resolve: {
    alias: {
      // O TRUQUE MÁGICO: Isso força o navegador a achar a pasta JS
      '/js': path.resolve(__dirname, 'src/js'),
      '@js': path.resolve(__dirname, 'src/js')
    },
  },

  server: {
    open: true,
    // Permite que o Vite acesse arquivos fora da pasta 'templates'
    fs: {
      allow: [path.resolve(__dirname, 'src')]
    }
  },

  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/templates/index.html'),
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