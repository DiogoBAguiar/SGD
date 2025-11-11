import { createNavbar, createHeader } from './header.js';

const pathName = window.location.pathname;
const parts = pathName.split('/');
const currentPage = parts[parts.length - 1] || 'index.html'; 

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

document.addEventListener('DOMContentLoaded', () => {
    
    const email = localStorage.getItem('userEmail');

    const navbarEl = document.getElementById('navbar');
    if (navbarEl) {
        navbarEl.innerHTML = createNavbar(activePageData.id);
    }

    const headerEl = document.getElementById('header');
    if (headerEl) {
        headerEl.innerHTML = createHeader(email, activePageData.title);
    }
});