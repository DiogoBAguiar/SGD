// Importa o header e a navbar, que são usados em quase todas as páginas
import { createNavbar, createHeader } from './modules/header.js';

// --- Lógica de Roteamento ---

const pathName = window.location.pathname;
const parts = pathName.split('/');
const currentPage = parts[parts.length - 1] || 'index.html'; 

// O 'pageMap' agora também define qual script carregar para cada página
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
    
    // --- SUA LÓGICA CONDICIONAL ---

    // 1. Se for a página de login, só carrega o script de login e para.
    if (currentPage === 'login.html') {
        if (activePageData.script) {
            import(activePageData.script)
                .catch(err => console.error(`Erro ao carregar ${activePageData.script}:`, err));
        }
        return; // Não executa o resto do código
    }

    // --- Lógica para todas as outras páginas (protegidas) ---

    const email = localStorage.getItem('userEmail');

    // 2. Se não for a página de login E não tiver email, redireciona para o login.
    if (!email) {
        console.warn("Nenhum usuário logado. Redirecionando para login.html");
        window.location.href = 'login.html';
        return; // Para a execução
    }

    // 3. Se passou (está logado e não é a pág. de login), desenha o layout:
    const navbarEl = document.getElementById('navbar');
    if (navbarEl) {
        navbarEl.innerHTML = createNavbar(activePageData.id);
    }

    const headerEl = document.getElementById('header');
    if (headerEl) {
        headerEl.innerHTML = createHeader(email, activePageData.title);
    }

    // 4. Carrega dinamicamente o script específico da página
    if (activePageData.script) {
        console.log(`Carregando módulo: ${activePageData.script}`);
        import(activePageData.script)
            .catch(err => console.error(`Erro ao carregar ${activePageData.script}:`, err));
    }
});