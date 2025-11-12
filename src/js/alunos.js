import { mockAlunos } from './database.js';

for (let i = 105; i <= 134; i++) {
     mockAlunos.push({ id: i, nome: `Aluno Teste ${i}`, matricula: `2023${i}`, email: `aluno${i}@ifpb.edu.br`, curso: "Mestrado", ingresso: 2023, orientador: "Damires Yluska", status: "Ativo", defesa: null });
}

let currentPage = 1;
const ITENS_POR_PAG = 8;
let filteredData = [...mockAlunos];

function renderTabela() {
    const tbody = document.getElementById('alunos-table-body');
    tbody.innerHTML = '';

    if (filteredData.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" class="px-6 py-8 text-center text-sgd-muted">Nenhum aluno encontrado.</td></tr>`;
        renderPaginas();
        return;
    }

    const startIndex = (currentPage - 1) * ITENS_POR_PAG;
    const endIndex = startIndex + ITENS_POR_PAG;
    const paginatedData = filteredData.slice(startIndex, endIndex);

    paginatedData.forEach(aluno => {
        const tr = document.createElement('tr');
        tr.className = "hover:bg-[#1A1A1A] transition-colors";

        // Define o status de cada aluno
        let statusClasse = 'bg-gray-900 text-gray-400 border-gray-700';
        switch(aluno.status) {
            case 'Ativo': statusClasse = 'bg-sky-900/30 text-sky-400 border-sky-800'; break;
            case 'Qualificado': statusClasse = 'bg-sgd-gold/20 text-sgd-gold border-sgd-gold/50'; break;
            case 'Defendido': statusClasse = 'bg-emerald-900/30 text-emerald-400 border-emerald-800'; break;
            case 'Trancado': case 'Desligado': statusClasse = 'bg-red-900/30 text-red-400 border-red-800 opacity-70'; break;
        }

        tr.innerHTML = `
            <td class="table-cell">
                <a href="#" onclick="student_details(event, ${aluno.id})" class="font-medium text-white hover:text-sgd-gold hover:underline transition">
                    ${aluno.nome}
                </a>
                <div class="text-sgd-muted text-xs">${aluno.matricula}</div>
            </td>
            <td class="table-cell">
                <div>${aluno.curso}</div>
                <div class="text-sgd-muted text-xs">Ingresso: ${aluno.ingresso}</div>
            </td>
            <td class="table-cell">${aluno.orientador || '<span class="text-sgd-muted italic">—</span>'}</td>
            <td class="table-cell"><span class="px-2 py-1 text-xs font-medium rounded-full border ${statusClasse}">${aluno.status}</span></td>
            <td class="table-cell text-right">
                <div class="flex items-center justify-end space-x-3">
                    <button onclick="editAluno(${aluno.id})" class="text-sgd-muted hover:text-sgd-gold transition" title="Editar"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg></button>
                    <button onclick="deleteAluno(${aluno.id}, '${aluno.nome}')" class="text-sgd-muted hover:text-red-500 transition" title="Excluir"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></button>
                </div>
            </td>`;
        tbody.appendChild(tr);
    });
    renderPaginas();
}

// Funções de paginação
function renderPaginas() {
    const container = document.getElementById('pagination-container');
    const totalPages = Math.ceil(filteredData.length / ITENS_POR_PAG);
    if (totalPages <= 1) { container.innerHTML = ''; return; }
    let buttonsHtml = `<button onclick="changePage(${currentPage - 1})" class="px-3 py-1 rounded border border-sgd-border text-sm transition ${currentPage === 1 ? 'text-sgd-muted opacity-50 cursor-not-allowed' : 'text-sgd-text hover:bg-sgd-border hover:text-sgd-gold'}" ${currentPage === 1 ? 'disabled' : ''}>Anterior</button>`;
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);
    for (let i = startPage; i <= endPage; i++) {
        buttonsHtml += `<button onclick="changePage(${i})" class="px-3 py-1 rounded border text-sm transition ${i === currentPage ? 'bg-sgd-gold text-black border-sgd-gold font-bold' : 'border-sgd-border text-sgd-text hover:bg-sgd-border hover:text-sgd-gold'}">${i}</button>`;
    }
    buttonsHtml += `<button onclick="changePage(${currentPage + 1})" class="px-3 py-1 rounded border border-sgd-border text-sm transition ${currentPage === totalPages ? 'text-sgd-muted opacity-50 cursor-not-allowed' : 'text-sgd-text hover:bg-sgd-border hover:text-sgd-gold'}" ${currentPage === totalPages ? 'disabled' : ''}>Próximo</button>`;
    container.innerHTML = `<span class="text-xs text-sgd-muted mr-4">Pág. ${currentPage} de ${totalPages} (${filteredData.length} total)</span>${buttonsHtml}`;
}
function changePage(n) { const total = Math.ceil(filteredData.length/ITENS_POR_PAG); if(n>=1 && n<=total){ currentPage=n; renderTabela(); }}
// Fim das funções de paginação

function applyFilters() {
    const search = document.getElementById('search-input').value.toLowerCase();
    const status = document.getElementById('filter-status').value.toLowerCase();
    filteredData = mockAlunos.filter(a => (a.nome.toLowerCase().includes(search) || a.matricula.includes(search) || (a.orientador && a.orientador.toLowerCase().includes(search))) && (status === "" || a.status.toLowerCase() === status));
    currentPage = 1; renderTabela();
}

// Função para visualizar detalhes do aluno
function student_details(e, id) {
    if (e) e.preventDefault(); 
    const aluno = mockAlunos.find(a => a.id === id);
    if (!aluno) return;

    document.getElementById('detail-nome').textContent = aluno.nome;
    document.getElementById('detail-matricula').textContent = aluno.matricula;
    document.getElementById('detail-email').textContent = aluno.email;
    document.getElementById('detail-curso').textContent = `${aluno.curso} (Ingresso: ${aluno.ingresso})`;
    document.getElementById('detail-status').textContent = aluno.status;
    document.getElementById('detail-orientador').textContent = aluno.orientador || 'Não definido';

    const defesaContainer = document.getElementById('detail-defesa-container');
    if (aluno.defesa) {
        let bancaHtml = '<ul class="list-disc list-inside text-sgd-muted">';
        aluno.defesa.banca.forEach(membro => { bancaHtml += `<li>${membro}</li>`; });
        bancaHtml += '</ul>';

        defesaContainer.innerHTML = `
            <div class="mb-4">
                <h4 class="text-sgd-gold text-sm font-semibold mb-1">Título do Trabalho</h4>
                <p class="text-white font-medium">${aluno.defesa.titulo}</p>
            </div>
            <div class="grid grid-cols-2 gap-4 mb-4">
                <div><h4 class="text-sgd-muted text-xs mb-1">Data</h4><p>${aluno.defesa.data}</p></div>
                <div><h4 class="text-sgd-muted text-xs mb-1">Horário</h4><p>${aluno.defesa.horario}</p></div>
                <div class="col-span-2"><h4 class="text-sgd-muted text-xs mb-1">Local</h4><p>${aluno.defesa.local}</p></div>
            </div>
            <div>
                <h4 class="text-sgd-gold text-sm font-semibold mb-2">Banca Examinadora</h4>
                ${bancaHtml}
            </div>
        `;
    } else {
        defesaContainer.innerHTML = `<div class="text-center py-6 text-sgd-muted bg-black/20 rounded-lg border border-dashed border-sgd-border">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto mb-2 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
            <p>Nenhuma defesa agendada ou registrada.</p>
        </div>`;
    }

    document.getElementById('detalhes-modal').classList.remove('hidden');
}
function closeDetalhesModal() { document.getElementById('detalhes-modal').classList.add('hidden'); }


// Função para adicionar/editar aluno
function openAlunoModal(id = null) {
    const modal = document.getElementById('aluno-modal');
    document.getElementById('aluno-form').reset();
    
    if (id) {
        document.getElementById('modal-title').textContent = "Editar Aluno";
        const a = mockAlunos.find(x => x.id === id);
        
        if (a) {
            document.getElementById('aluno-id').value = a.id;
            document.getElementById('input-nome').value = a.nome;
            document.getElementById('input-matricula').value = a.matricula;
            document.getElementById('input-email').value = a.email;
            document.getElementById('select-curso').value = a.curso;
            document.getElementById('input-ingresso').value = a.ingresso;
            document.getElementById('select-orientador').value = a.orientador;
            document.getElementById('select-status').value = a.status;

            if (a.defesa) {
                document.getElementById('titulo').value = a.defesa.titulo || '';
                document.getElementById('data').value = a.defesa.data || '';
                document.getElementById('horario').value = a.defesa.horario || '';
                document.getElementById('local').value = a.defesa.local || '';
                document.getElementById('banca').value = a.defesa.banca.join(', ') || '';
            } else {

                document.getElementById('titulo').value = '';
                document.getElementById('data').value = '';
                document.getElementById('horario').value = '';
                document.getElementById('local').value = '';
                document.getElementById('banca').value = '';
            }
        }
    } else {
        document.getElementById('modal-title').textContent = "Novo Aluno";
        document.getElementById('aluno-id').value = '';
        
        document.getElementById('titulo').value = '';
        document.getElementById('data').value = '';
        document.getElementById('horario').value = '';
        document.getElementById('local').value = '';
        document.getElementById('banca').value = '';
    }
    
    modal.classList.remove('hidden');
}
function closeAlunoModal() { document.getElementById('aluno-modal').classList.add('hidden'); }

function saveAluno(e) {
    e.preventDefault();
    const id = document.getElementById('aluno-id').value;

    // Objeto com os dados do formulário
    const FormDados = {
        id: id ? parseInt(id) : Date.now(),
        nome: document.getElementById('input-nome').value,
        matricula: document.getElementById('input-matricula').value,
        email: document.getElementById('input-email').value,
        curso: document.getElementById('select-curso').value,
        ingresso: parseInt(document.getElementById('input-ingresso').value),
        orientador: document.getElementById('select-orientador').value,
        status: document.getElementById('select-status').value,
        defesa: null
    };

    const titulo = document.getElementById('titulo').value;
    const data = document.getElementById('data').value;
    const horario = document.getElementById('horario').value;
    const local = document.getElementById('local').value;
    const banca = document.getElementById('banca').value.split(',').map(s => s.trim()).filter(s => s);

    // Adiciona a defesa ao objeto se e somente se todos os campos obrigatórios estiverem preenchidos
    if (titulo && data && horario && local && banca.length > 0) {
        FormDados.defesa = {
            titulo,
            data,
            horario,
            local,
            banca
        };
    }

    if (id) {
        const idx = mockAlunos.findIndex(a => a.id === parseInt(id));
        if (idx !== -1) {
            mockAlunos[idx] = { ...mockAlunos[idx], ...FormDados };
        }
    } else {
        mockAlunos.unshift(FormDados);
    }

    applyFilters();
    closeAlunoModal();
}

function deleteAluno(id,nome) { if(confirm(`Remover "${nome}"?`)){ mockAlunos=mockAlunos.filter(a=>a.id!==id); applyFilters(); }}

document.addEventListener("DOMContentLoaded",()=>{
    renderTabela();
    // Se clicar fora do modal, fecha ele
    document.getElementById('aluno-modal').addEventListener('click',(e)=>{if(e.target.id==='aluno-modal')closeAlunoModal();});
    document.getElementById('detalhes-modal').addEventListener('click',(e)=>{if(e.target.id==='detalhes-modal')closeDetailsModal();}); 
    // Chama a função de salvar aluno ao submeter o formulário
    document.getElementById('aluno-form').addEventListener('submit',saveAluno);
});

// As globais acessíveis no HTML
window.applyFilters=applyFilters;
window.openAlunoModal=openAlunoModal;
window.closeAlunoModal=closeAlunoModal;
window.deleteAluno=deleteAluno;
window.editAluno=openAlunoModal;
window.changePage=changePage;
window.student_details=student_details;
window.closeDetalhesModal=closeDetalhesModal;