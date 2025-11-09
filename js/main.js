import { createNavbar, createHeader } from './header.js';

const path = window.location.pathname;
const currentPage = path.split('/').pop() || 'dashboard.html';

const pageMap = {
    'dashboard.html': { id: 'dashboard', title: 'Dashboard' },
    'student_management.html': { id: 'gerenciar_alunos', title: 'Gerenciar Alunos' },
    'professores.html': { id: 'gerenciar_professores', title: 'Gerenciar Professores' },
    'secretarios.html': { id: 'gerenciar_secretaria', title: 'Equipe da Secretaria' }, 
    'profile.html': { id: 'meu_perfil', title: 'Meu Perfil' }
};

const activePageData = pageMap[currentPage] || { id: '', title: 'SGD IFPB' };

const navbarEl = document.getElementById('navbar');
if (navbarEl) navbarEl.innerHTML = createNavbar(activePageData.id);

const headerEl = document.getElementById('header');
if (headerEl) headerEl.innerHTML = createHeader(activePageData.title);

document.addEventListener('DOMContentLoaded', () => {
    const email = localStorage.getItem('userEmail'); // Recupera o e-mail armazenado
    document.getElementById('header').innerHTML = createHeader(email); // Passa o e-mail para o cabeçalho

    const navbarEl = document.getElementById('navbar');
    if (navbarEl) navbarEl.innerHTML = createNavbar(activePageData.id); // Renderiza a navbar com a página ativa
});