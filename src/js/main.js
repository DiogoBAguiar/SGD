import { createNavbar, createHeader } from './modules/header.js';

const modules = import.meta.glob('./modules/*.js');

const pathName = window.location.pathname;
const parts = pathName.split('/');
let currentPage = parts[parts.length - 1];

if (!currentPage) {
    currentPage = 'index.html';
} else if (!currentPage.endsWith('.html')) {
    currentPage += '.html';
}

console.log(`[SGD] Página detectada: ${currentPage}`);

const pageMap = {
    'index.html': { id: 'dashboard', title: 'Dashboard', script: './modules/dashboard.js' },
    'student_management.html': { id: 'gerenciar_alunos', title: 'Gerenciar Alunos', script: './modules/alunos.js' },
    'professores.html': { id: 'gerenciar_professores', title: 'Gerenciar Professores', script: './modules/professores.js' },
    'secretarios.html': { id: 'gerenciar_secretaria', title: 'Equipe da Secretaria', script: './modules/secretarios.js' },
    'agenda.html': { id: 'agenda', title: 'Gerenciar Agenda', script: './modules/agenda.js' },
    'profile.html': { id: 'meu_perfil', title: 'Meu Perfil', script: './modules/profile.js' },
    'configuracoes.html': { id: 'configuracoes', title: 'Configurações', script: './modules/configuracoes.js' },
    'solicitacao.html': { id: 'solicitacoes', title: 'Gerenciar Solicitações', script: './modules/solicitacoes.js' },
    'documentos.html': { id: 'documentos', title: 'Gerenciar Documentos', script: './modules/documentos.js' },
    'login.html': { id: 'login', title: 'Login', script: './modules/login.js' }
};

const activePageData = pageMap[currentPage] || { id: '', title: 'SGD IFPB', script: null };

document.addEventListener('DOMContentLoaded', () => {
 
    if (currentPage === 'login.html') {
        if (activePageData.script && modules[activePageData.script]) {
            modules[activePageData.script]()
                .catch(err => console.error(`[SGD] Erro login:`, err));
        }
        return; 
    }

    const email = localStorage.getItem('userEmail');
    if (!email) {
        window.location.href = 'login.html';
        return; 
    }

    const navbarEl = document.getElementById('navbar');
    if (navbarEl) navbarEl.innerHTML = createNavbar(activePageData.id);

    const headerEl = document.getElementById('header');
    if (headerEl) headerEl.innerHTML = createHeader(email, activePageData.title);

    const updateMenuIcon = (isOpen) => {
        const line1 = document.getElementById('hamburger-line-1');
        const line2 = document.getElementById('hamburger-line-2');
        const line3 = document.getElementById('hamburger-line-3');
        
        if (!line1 || !line2 || !line3) return;

        if (isOpen) {
            line1.classList.add('rotate-45', 'translate-y-2');
            line2.classList.add('opacity-0');
            line3.classList.add('-rotate-45', '-translate-y-2');
        } else {
            line1.classList.remove('rotate-45', 'translate-y-2');
            line2.classList.remove('opacity-0');
            line3.classList.remove('-rotate-45', '-translate-y-2');
        }
    };

    document.addEventListener('click', (e) => {
        const btnAbrir = e.target.closest('#mobileMenuBtn');
        const btnFechar = e.target.closest('#closeSidebarBtn') || e.target.closest('#sidebarOverlay');

        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebarOverlay');

        if (!sidebar) return;

        if (btnAbrir) {
            const isClosed = sidebar.classList.contains('-translate-x-full');
            if (isClosed) {
                sidebar.classList.remove('-translate-x-full');
                if (overlay) overlay.classList.remove('hidden');
                updateMenuIcon(true);
                document.body.classList.add('overflow-hidden'); 
            } else {
                sidebar.classList.add('-translate-x-full');
                if (overlay) overlay.classList.add('hidden');
                updateMenuIcon(false);
                document.body.classList.remove('overflow-hidden');
            }
        }

        if (btnFechar) {
            sidebar.classList.add('-translate-x-full');
            if (overlay) overlay.classList.add('hidden');
            updateMenuIcon(false);
            document.body.classList.remove('overflow-hidden');
        }
    });

    if (activePageData.script && modules[activePageData.script]) {
        modules[activePageData.script]()
            .catch(err => console.error(`[SGD] Erro módulo:`, err));
    }
});