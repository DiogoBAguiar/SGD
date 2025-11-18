import { createNavbar, createHeader } from './modules/header.js';

// --- MUDANÇA AQUI: Dizemos ao Vite explicitamente quais arquivos incluir ---
const modules = import.meta.glob('./modules/*.js'); 
// --------------------------------------------------------------------------

const pathName = window.location.pathname;
const parts = pathName.split('/');
const currentPage = parts[parts.length - 1] || 'index.html'; 

const pageMap = {
    'index.html': { 
        id: 'dashboard', 
        title: 'Dashboard', 
        script: './modules/dashboard.js' 
    },
    'student_management.html': { 
        id: 'gerenciar_alunos', 
        title: 'Gerenciar Alunos', 
        script: './modules/alunos.js' 
    },
    'professores.html': { 
        id: 'gerenciar_professores', 
        title: 'Gerenciar Professores', 
        script: './modules/professores.js' 
    },
    'secretarios.html': { 
        id: 'gerenciar_secretaria', 
        title: 'Equipe da Secretaria', 
        script: './modules/secretarios.js' 
    },
    'agenda.html': { 
        id: 'agenda', 
        title: 'Gerenciar Agenda', 
        script: './modules/agenda.js' 
    },
    'profile.html': { 
        id: 'meu_perfil', 
        title: 'Meu Perfil', 
        script: './modules/profile.js' 
    },
    'configuracoes.html': { 
        id: 'configuracoes', 
        title: 'Configurações', 
        script: './modules/configuracoes.js' 
    },
    'solicitacao.html': { 
        id: 'solicitacoes', 
        title: 'Gerenciar Solicitações', 
        script: './modules/solicitacoes.js' 
    },
    'documentos.html': { 
        id: 'documentos', 
        title: 'Gerenciar Documentos', 
        script: './modules/documentos.js' 
    },
    'login.html': { 
        id: 'login', 
        title: 'Login', 
        script: './modules/login.js' 
    }
};

const activePageData = pageMap[currentPage] || { id: '', title: 'SGD IFPB', script: null };

document.addEventListener('DOMContentLoaded', () => {
 
    if (currentPage === 'login.html') {
        if (activePageData.script && modules[activePageData.script]) {
            // --- MUDANÇA AQUI: Executamos a função que o import.meta.glob retornou ---
            modules[activePageData.script]()
                .catch(err => console.error(`Erro ao carregar ${activePageData.script}:`, err));
        }
        return; 
    }

    const email = localStorage.getItem('userEmail');

    if (!email) {
        console.warn("Nenhum usuário logado. Redirecionando para login.html");
        window.location.href = 'login.html';
        return; 
    }

    const navbarEl = document.getElementById('navbar');
    if (navbarEl) {
        navbarEl.innerHTML = createNavbar(activePageData.id);
    }

    const headerEl = document.getElementById('header');
    if (headerEl) {
        headerEl.innerHTML = createHeader(email, activePageData.title);
    }

    if (activePageData.script && modules[activePageData.script]) {
        console.log(`Carregando módulo: ${activePageData.script}`);
        // --- MUDANÇA AQUI TAMBÉM ---
        modules[activePageData.script]()
            .catch(err => console.error(`Erro ao carregar ${activePageData.script}:`, err));
    }
});