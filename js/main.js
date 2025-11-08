// js/main.js
import { createNavbar, createHeader } from './header.js';

// Obtém o nome do arquivo atual (ex: dashboard.html)
const path = window.location.pathname;
const currentPage = path.split('/').pop() || 'dashboard.html';

// Mapeamento de arquivo -> { id para navbar, título para header }
const pageMap = {
    'dashboard.html': { id: 'dashboard', title: 'Dashboard' },
    'student_management.html': { id: 'gerenciar_alunos', title: 'Gerenciar Alunos' },
    'professores.html': { id: 'gerenciar_professores', title: 'Gerenciar Professores' },
    'profile.html': { id: 'meu_perfil', title: 'Meu Perfil' }
    // Adicione outras páginas aqui conforme criar
};

const activePageData = pageMap[currentPage] || { id: '', title: 'SGD' };

// Injeta o Navbar com o ID ativo
const navbarElement = document.getElementById('navbar');
if (navbarElement) {
    navbarElement.innerHTML = createNavbar(activePageData.id);
}

// Injeta o Header com o Título correto
const headerElement = document.getElementById('header');
if (headerElement) {
    headerElement.innerHTML = createHeader(activePageData.title);
}