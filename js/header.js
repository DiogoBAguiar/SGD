// js/header.js

const createNavbar = (activePage) => {
    // Função auxiliar para gerar as classes dos links
    const getLinkClass = (pageName) => {
        const isActive = activePage === pageName;
        return `flex items-center px-3 py-2 rounded transition-colors ${
            isActive 
            ? 'bg-[#C0A040] text-black font-semibold' 
            : 'hover:bg-[#1F1F1F] hover:text-[#E6C850]'
        }`;
    };

    return `
    <aside class="w-[260px] h-screen bg-[#000000] border-r border-[#333333] p-5 flex flex-col sticky top-0">
        <div class="text-center mb-6">
            <img src="../img/logo_sgd.webp" alt="Logo SGD" class="w-20 h-20 rounded-md object-cover mx-auto mb-3">
            <h2 class="text-[#C0A040] text-lg font-semibold">Gestão de Defesas</h2>
        </div>
        <nav class="mt-2 flex-1">
            <ul class="space-y-2 text-sm">
                <li class="px-2 text-[#AAAAAA] uppercase tracking-wider text-xs mt-2">Principal</li>
                <li>
                    <a href="dashboard.html" class="${getLinkClass('dashboard')}">
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="#" class="${getLinkClass('agenda')}">
                        Agenda de Defesas
                    </a>
                </li>
                <li class="px-2 text-[#AAAAAA] uppercase tracking-wider text-xs mt-4">Gerenciamento</li>
                <li>
                    <a href="#" class="${getLinkClass('solicitacoes')}">
                        Solicitações Pendentes
                    </a>
                </li>
                <li>
                    <a href="#" class="${getLinkClass('documentos')}">
                        Gerar Documentos
                    </a>
                </li>
                <li>
                    <a href="student_management.html" class="${getLinkClass('gerenciar_alunos')}">
                        Gerenciar Alunos
                    </a>
                </li>
                <li>
                    <a href="professores.html" class="${getLinkClass('gerenciar_professores')}">
                        Gerenciar Professores
                    </a>
                </li>
                <li class="px-2 text-[#AAAAAA] uppercase tracking-wider text-xs mt-4">Sistema</li>
                <li>
                    <a href="#" class="${getLinkClass('configuracoes')}">
                        Configurações
                    </a>
                </li>
                <li>
                    <a href="profile.html" class="${getLinkClass('meu_perfil')}">
                        Meu Perfil
                    </a>
                </li>
            </ul>
        </nav>
    </aside>
    `;
};

const createHeader = (pageTitle = 'Dashboard') => {
    return `
    <header class="flex items-center justify-between px-8 py-5 bg-[#000000] border-b border-[#333333]">
        <h1 class="text-2xl font-semibold">${pageTitle}</h1>
        <div class="text-sm text-[#AAAAAA]">
            <span class="text-[#E0E0E0]">Olá, Diogo Aguiar (Admin)</span>
            <span class="mx-2">|</span>
            <a href="login.html" class="text-[#AAAAAA] hover:text-[#C0A040]">Sair</a>
        </div>
    </header>
    `;
};

export { createNavbar, createHeader };