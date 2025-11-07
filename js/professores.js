// js/professores.js

// --- MOCK DATA (Simulando um Banco de Dados) ---
const mockProfessores = [
    { id: 1, nome: "Damires Yluska", email: "damires@ifpb.edu.br", instituicao: "IFPB", titulacao: "Doutorado", tipo: "Interno" },
    { id: 2, nome: "Francisco Dantas", email: "dantas@ifpb.edu.br", instituicao: "IFPB", titulacao: "Mestrado", tipo: "Interno" },
    { id: 3, nome: "Valéria Maria", email: "valeria.maria@ufpb.br", instituicao: "UFPB", titulacao: "Doutorado", tipo: "Externo" },
    { id: 4, nome: "Giovanni Silva", email: "giovanni@uepb.edu.br", instituicao: "UEPB", titulacao: "Doutorado", tipo: "Externo" },
];

// --- FUNÇÕES DE RENDERIZAÇÃO ---
function renderTable() {
    const tbody = document.getElementById('professores-table-body');
    
    // Limpa a tabela antes de renderizar
    tbody.innerHTML = '';

    if (mockProfessores.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="px-6 py-4 text-center text-[#AAAAAA]">Nenhum professor encontrado.</td></tr>';
        return;
    }

    // Itera sobre os dados mockados e cria as linhas da tabela
    mockProfessores.forEach(prof => {
        const tr = document.createElement('tr');
        tr.className = "hover:bg-[#1A1A1A] transition-colors";

        // Define a cor da badge de tipo
        const tipoBadgeColor = prof.tipo === 'Interno' 
            ? 'bg-green-900 text-green-300 border-green-700' 
            : 'bg-blue-900 text-blue-300 border-blue-700';

        tr.innerHTML = `
            <td class="px-6 py-4">
                <div class="text-[#E0E0E0] font-medium">${prof.nome}</div>
                <div class="text-[#AAAAAA] text-xs">${prof.email}</div>
            </td>
            <td class="px-6 py-4 text-[#E0E0E0]">${prof.instituicao}</td>
            <td class="px-6 py-4 text-[#E0E0E0]">${prof.titulacao}</td>
            <td class="px-6 py-4">
                <span class="px-2 py-1 text-xs rounded-full border ${tipoBadgeColor}">
                    ${prof.tipo}
                </span>
            </td>
            <td class="px-6 py-4 text-right">
                <button class="text-[#AAAAAA] hover:text-[#C0A040] mr-3" title="Editar">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                </button>
                <button class="text-[#AAAAAA] hover:text-red-500" title="Excluir">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// --- CONTROLE DO MODAL ---
function openProfessorModal() {
    const modal = document.getElementById('professor-modal');
    modal.classList.remove('hidden');
}

function closeProfessorModal() {
    const modal = document.getElementById('professor-modal');
    modal.classList.add('hidden');
}

// --- LÓGICA DE FORMULÁRIO ---
// Se selecionar "Interno", força a instituição a ser IFPB e trava o campo.
function toggleInstituicao(tipo) {
    const inputInstituicao = document.getElementById('input-instituicao');
    if (tipo === 'Interno') {
        inputInstituicao.value = 'IFPB';
        inputInstituicao.setAttribute('readonly', true);
        inputInstituicao.classList.add('opacity-50', 'cursor-not-allowed');
    } else {
        inputInstituicao.value = '';
        inputInstituicao.removeAttribute('readonly');
        inputInstituicao.classList.remove('opacity-50', 'cursor-not-allowed');
    }
}

// Inicializa a tabela quando o script carrega
document.addEventListener("DOMContentLoaded", () => {
    renderTable();
    
    // Fecha modal se clicar fora dele (no background escuro)
    document.getElementById('professor-modal').addEventListener('click', (e) => {
        if (e.target.id === 'professor-modal') {
            closeProfessorModal();
        }
    });
});