import { createNavbar, createHeader } from './header.js';

const currentPage = window.location.pathname.split('/').pop(); // Obtém o nome do arquivo atual

let activePage = '';
if (currentPage === 'dashboard.html') {
    activePage = 'dashboard';
} else if (currentPage === 'student_management.html') {
    activePage = 'gerenciar_alunos';
    // Adicione mais condições conforme necessário para outras páginas
}

document.getElementById('navbar').innerHTML = createNavbar(activePage);
document.getElementById('header').innerHTML = createHeader();