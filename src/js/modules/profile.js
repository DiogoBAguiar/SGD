import { users } from '@js/modules/auth-data.js';
import { configurarListenersModal } from '@js/modules/funcoesGerais.js';

function renderActivityHistory() {
    const container = document.getElementById("activityHistory");
    if (!container) return; 
    container.innerHTML = ""; 

    const activities = [
        { icon: "clock", text: "Participou como avaliador na defesa de João Silva", date: "2025-10-15" },
        { icon: "mail", text: "Enviou solicitação de prorrogação de prazo", date: "2025-11-03" },
        { icon: "check", text: "Atualizou o perfil de usuário", date: "2025-11-09" },
        { icon: "clock", text: "Assistiu defesa de Maria Oliveira", date: "2025-11-10" },
        { icon: "mail", text: "Enviou documento complementar", date: "2025-11-11" }
    ];

    const recentActivities = activities
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3);

    recentActivities.forEach(a => {
        const div = document.createElement("div");
        div.className = "flex items-start gap-3 bg-[#181818] p-4 rounded-lg border border-[#333333]";
        const iconPaths = {
            clock: 'M12 8v4l3 3m6 1.5A9.003 9.003 0 0012 3a9 9 0 00-9 9.5 8.998 8.998 0 006 8.485V21h6v-.015a8.998 8.998 0 006-8.485z',
            mail: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7l9 6 9-6',
            check: 'M5 13l4 4L19 7'
        };
        div.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#C0A040] mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="${iconPaths[a.icon]}" />
            </svg>
            <div>
                <p class="text-[#E0E0E0]">${a.text}</p>
                <p class="text-xs text-[#888]">${a.date}</p>
            </div>
        `;
        container.appendChild(div);
    });
}

function inicializarProfile() {
    const loggedInUserEmail = localStorage.getItem('userEmail');
    const loggedInUser = users.find(user => user.email === loggedInUserEmail);

    const profileImageEl = document.getElementById("profileImage");
    if (!profileImageEl) {
        console.warn("Elementos de 'profile.js' não encontrados. Aguardando DOMContentLoaded.");
        document.addEventListener('DOMContentLoaded', inicializarProfile);
        return;
    }

    if (loggedInUser) {
        document.getElementById("profileEmail").textContent = loggedInUser.email;
        document.getElementById("contactEmail").textContent = loggedInUser.email;
        document.getElementById("contactPhone").textContent = loggedInUser.phone;
        document.getElementById("contactCampus").textContent = loggedInUser.campus;
        document.getElementById("role").textContent = loggedInUser.role;
        document.getElementById("department").textContent = loggedInUser.department;
        document.getElementById("username").textContent = loggedInUser.username;
        document.getElementById("profileName").textContent = loggedInUser.name;
        document.getElementById("profileRoleDescription").textContent = loggedInUser.role;

        const avatarUrl = `https://ui-avatars.com/api/?name=${loggedInUser.name.replace(' ', '+')}&background=C0A040&color=1F1F1F&bold=true`;
        profileImageEl.src = avatarUrl;
        profileImageEl.alt = `Foto de ${loggedInUser.name}`;
    } else {
        console.error("Usuário logado não encontrado no 'auth-data.js'.");
        if (window.location.pathname !== '/login.html') {
             window.location.href = 'login.html';
        }
        return;
    }

    configurarListenersModal({
        idModal: 'editModal',
        idBotaoAbrir: 'editModalBtn',
        idsBotoesFechar: ['closeModalBtn', 'cancelModalBtn'],
        fecharAoClicarFora: true
    });

    const homeBtn = document.getElementById('homeBtn');
    if (homeBtn) {
        homeBtn.addEventListener('click', () => {
            window.location.href = "index.html";
        });
    }

    renderActivityHistory();
}

inicializarProfile();
