// CORREÇÃO: Trocamos o caminho relativo './header.js' pelo alias '@js/header.js'
// Isso garante que o Vite sempre encontre o arquivo, independentemente de qual HTML o chamou.
// Eles estão lado a lado na mesma pasta
import { createNavbar, createHeader } from './header.js';

// 1. Pega o nome do arquivo atual (ex: "index.html", "professores.html")
const pathName = window.location.pathname;
const parts = pathName.split('/');
const currentPage = parts[parts.length - 1] || 'index.html'; // Garante 'index.html' se for a raiz "/"

// 2. Mapeia o nome do arquivo para o ID da página (para destacar o link) e o título
const pageMap = {
    'index.html': { id: 'dashboard', title: 'Dashboard' },
    'student_management.html': { id: 'gerenciar_alunos', title: 'Gerenciar Alunos' },
    'professores.html': { id: 'gerenciar_professores', title: 'Gerenciar Professores' },
    'secretarios.html': { id: 'gerenciar_secretaria', title: 'Equipe da Secretaria' },
    'agenda.html': { id: 'agenda', title: 'Gerenciar Agenda' },
    'profile.html': { id: 'meu_perfil', title: 'Meu Perfil' },
    'configuracoes.html': { id: 'configuracoes', title: 'Configurações'},
    'solicitacao.html': { id: 'solicitacoes', title: 'Gerenciar Solicitações' },
    'documentos.html': { id: 'documentos', title: 'Gerenciar Documentos' },
};

const activePageData = pageMap[currentPage] || { id: '', title: 'SGD IFPB' };

// 3. Espera o HTML carregar antes de tentar injetar os componentes
document.addEventListener('DOMContentLoaded', () => {
    
    // 4. Pega o email do usuário guardado no login
    const email = localStorage.getItem('userEmail');

    // 5. Injeta o Navbar (Menu lateral)
    const navbarEl = document.getElementById('navbar');
    if (navbarEl) {
        // Passa o ID da página ativa para o 'createNavbar' saber qual link destacar
        navbarEl.innerHTML = createNavbar(activePageData.id);
    }

    // 6. Injeta o Header (Cabeçalho superior)
    const headerEl = document.getElementById('header');
    if (headerEl) {
        // Passa o email (para o "Bem-vindo") e o título da página
        headerEl.innerHTML = createHeader(email, activePageData.title);
    }
});