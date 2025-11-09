const editModalBtn = document.getElementById('editModalBtn');
const editModal = document.getElementById('editModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const cancelModalBtn = document.getElementById('cancelModalBtn');

editModalBtn.addEventListener('click', () => {
  editModal.classList.remove('hidden');
});


closeModalBtn.addEventListener('click', () => {
  editModal.classList.add('hidden');
});

cancelModalBtn.addEventListener('click', () => {
  editModal.classList.add('hidden');
});


const homeBtn = document.getElementById('homeBtn');

homeBtn.addEventListener('click', () => {
  window.location.href = "../templates/dashboard.html";
});

// Simulação de histórico vindo do backend
const activities = [
  { icon: "clock", text: "Participou como avaliador na defesa de João Silva", date: "2025-10-15" },
  { icon: "mail", text: "Enviou solicitação de prorrogação de prazo", date: "2025-11-03" },
  { icon: "check", text: "Atualizou o perfil de usuário", date: "2025-11-09" },
  { icon: "clock", text: "Assistiu defesa de Maria Oliveira", date: "2025-11-10" },
  { icon: "mail", text: "Enviou documento complementar", date: "2025-11-11" }
];

function renderActivityHistory() {
  const container = document.getElementById("activityHistory");
  container.innerHTML = ""; // limpa conteúdo anterior

  // Ordena por data e pega os 3 últimos
  const recentActivities = activities
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0,3 );

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

renderActivityHistory();
