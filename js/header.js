const createNavbar = (activePage) => {
    const getLinkClass = (pageName) => {
        const isActive = activePage === pageName;
        return `flex items-center px-3 py-2 rounded transition-colors duration-200 ${
            isActive 
            ? 'bg-[#C0A040] text-black font-bold' 
            : 'text-[#E0E0E0] hover:bg-[#1F1F1F] hover:text-[#E6C850]'
        }`;
    };

    const icons = {
        dashboard: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>',
        agenda: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>',
        solicitacoes: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>',
        documentos: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>',
        alunos: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>',
        professores: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>',
        secretaria: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>',
        config: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',
        perfil: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>',
        sair: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>'
    };

    return `
    <aside class="w-[260px] h-screen bg-[#000000] border-r border-[#333333] p-5 flex flex-col sticky top-0">
        <div class="text-center mb-6 pt-2">
            <img src="../img/logo_sgd.webp" alt="Logo SGD" class="w-20 h-20 rounded-xl object-cover mx-auto mb-3 border-2 border-[#333333]">
            <h2 class="text-[#C0A040] text-lg font-bold tracking-wider">SGD IFPB</h2>
        </div>

        <nav class="flex-1 overflow-y-auto custom-scrollbar pr-2">
            <ul class="space-y-1 text-sm">
                <li class="px-3 text-[#AAAAAA] uppercase tracking-widest text-[0.65rem] font-bold mt-4 mb-2">Principal</li>
                <li><a href="dashboard.html" class="${getLinkClass('dashboard')}">${icons.dashboard} Dashboard</a></li>
                <li><a href="#" class="${getLinkClass('agenda')}">${icons.agenda} Agenda</a></li>

                <li class="px-3 text-[#AAAAAA] uppercase tracking-widest text-[0.65rem] font-bold mt-6 mb-2">Processos</li>
                <li><a href="#" class="${getLinkClass('solicitacoes')}">${icons.solicitacoes} Solicitações</a></li>
                <li><a href="#" class="${getLinkClass('documentos')}">${icons.documentos} Documentos</a></li>

                <li class="px-3 text-[#AAAAAA] uppercase tracking-widest text-[0.65rem] font-bold mt-6 mb-2">Cadastros</li>
                <li><a href="student_management.html" class="${getLinkClass('gerenciar_alunos')}">${icons.alunos} Alunos</a></li>
                <li><a href="professores.html" class="${getLinkClass('gerenciar_professores')}">${icons.professores} Professores</a></li>

                <li class="px-3 text-[#AAAAAA] uppercase tracking-widest text-[0.65rem] font-bold mt-6 mb-2">Administração</li>
                <li><a href="secretarios.html" class="${getLinkClass('gerenciar_secretaria')}">${icons.secretaria} Secretaria</a></li>

                <li class="px-3 text-[#AAAAAA] uppercase tracking-widest text-[0.65rem] font-bold mt-6 mb-2">Sistema</li>
                <li><a href="#" class="${getLinkClass('configuracoes')}">${icons.config} Configurações</a></li>
                <li><a href="profile.html" class="${getLinkClass('meu_perfil')}">${icons.perfil} Meu Perfil</a></li>
                
                <li class="mt-6 pt-4 border-t border-[#333333]">
                    <a href="../templates/login.html" id="logoutButton" class="flex items-center px-3 py-2 rounded text-red-400 hover:bg-red-900/20 transition-colors duration-200">
                        ${icons.sair} Sair
                    </a>
                </li>
            </ul>
        </nav>
    </aside>
    `;
};

const createHeader = (email = '') => {
    const names = extractNames(email);
    return `
    <header class="flex items-center justify-between px-8 py-5 bg-[#000000] border-b border-[#333333] sticky top-0 z-10">
        <h1 class="text-2xl font-semibold text-[#E0E0E0]">Bem-vindo, ${names}!</h1>
        <div class="flex items-center text-sm">
            <div class="text-right mr-4">
                <span class="block text-[#E0E0E0] font-medium">${names}</span>
                <span class="block text-sgd-muted text-xs">Coordenador</span>
            </div>
            <img src="../img/user_photo.jpg" alt="Avatar" class="w-10 h-10 rounded-full border-2 border-[#C0A040] object-cover">
        </div>
    </header>
    `;
};

// Função para extrair o primeiro nome do e-mail
const extractNames = (email) => {
    if (!email) return 'Usuário';
    const parts = email.split('.');
    return parts.length > 0 ? parts[0] : 'Usuário'; // Retorna o primeiro nome
};

// Evento de logout
document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            window.location.href = 'login.html'; // Redireciona para a página de login
        });
    }
});

export { createNavbar, createHeader };