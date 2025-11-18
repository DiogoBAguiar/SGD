import { mockAlunos } from './database.js';
import { abrirModal, fecharModal, configurarListenersModal, renderizarPaginacao } from './funcoesGerais.js';

for (let i = 105; i <= 134; i++) {
    if(!mockAlunos.some(a => a.id === i)) {
        mockAlunos.push({ id: i, nome: `Aluno Teste ${i}`, matricula: `2023${i}`, email: `aluno${i}@ifpb.edu.br`, curso: "Mestrado", ingresso: 2023, orientador: "Damires Yluska", status: "Ativo", defesa: null });
    }
}

let paginaAtual = 1;
const ITENS_POR_PAGINA = 8;
let dadosFiltrados = [...mockAlunos];
function desenharTabela() {
    const tbody = document.getElementById('alunos-table-body');
    const mobileContainer = document.getElementById('alunos-mobile-container');

    if (!tbody && !mobileContainer) {
        return;
    }
    
    if (tbody) tbody.innerHTML = '';
    if (mobileContainer) mobileContainer.innerHTML = '';

    if (dadosFiltrados.length === 0) {
        const msgVazia = `<div class="px-6 py-8 text-center text-sgd-muted">Nenhum aluno encontrado.</div>`;
        if (tbody) tbody.innerHTML = `<tr><td colspan="5">${msgVazia}</td></tr>`;
        if (mobileContainer) mobileContainer.innerHTML = msgVazia;
        desenharPaginacao();
        return;
    }

    const indiceInicio = (paginaAtual - 1) * ITENS_POR_PAGINA;
    const indiceFim = indiceInicio + ITENS_POR_PAGINA;
    const dadosPaginados = dadosFiltrados.slice(indiceInicio, indiceFim);

    dadosPaginados.forEach(aluno => {
        let statusClasse = 'bg-gray-900 text-gray-400 border-gray-700';
        switch(aluno.status) {
            case 'Ativo': statusClasse = 'bg-sky-900/30 text-sky-400 border-sky-800'; break;
            case 'Qualificado': statusClasse = 'bg-sgd-gold/20 text-sgd-gold border-sgd-gold/50'; break;
            case 'Defendido': statusClasse = 'bg-emerald-900/30 text-emerald-400 border-emerald-800'; break;
            case 'Trancado': case 'Desligado': statusClasse = 'bg-red-900/30 text-red-400 border-red-800 opacity-70'; break;
        }

        // -----------------------------------VERSÃO DESKTOP------------------------------------
        if (tbody) {
            const tr = document.createElement('tr');
            tr.className = "hover:bg-[#1A1A1A] transition-colors";
            tr.innerHTML = `
                <td class="table-cell">
                    <a href="#" onclick="verAluno(event, ${aluno.id})" class="font-medium text-white hover:text-sgd-gold hover:underline transition">
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
                        <button onclick="editarAluno(${aluno.id})" class="text-sgd-muted hover:text-sgd-gold transition" title="Editar"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg></button>
                        <button onclick="deletarAluno(${aluno.id}, '${aluno.nome}')" class="text-sgd-muted hover:text-red-500 transition" title="Excluir"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></button>
                    </div>
                </td>`;
            tbody.appendChild(tr);
        }

        // ------------------------------------------VERSÃO MOBILE -----------------------------------------------------
        if (mobileContainer) {
            const card = document.createElement('div');
            card.className = "mobile-card";
            card.innerHTML = `
                <div class="flex justify-between items-start mb-3">
                    <div>
                        <h3 class="text-lg font-semibold text-white" onclick="verAluno(event, ${aluno.id})">${aluno.nome}</h3>
                        <p class="text-sm text-sgd-muted">${aluno.matricula} | ${aluno.curso}</p>
                    </div>
                    <span class="px-2 py-1 text-xs font-medium rounded-full border ${statusClasse}">${aluno.status}</span>
                </div>
                
                <div class="grid grid-cols-2 gap-2 mb-4">
                    <div>
                        <p class="mobile-label">Orientador</p>
                        <p class="mobile-value">${aluno.orientador || '—'}</p>
                    </div>
                    <div>
                        <p class="mobile-label">Ingresso</p>
                        <p class="mobile-value">${aluno.ingresso}</p>
                    </div>
                </div>

                <div class="flex justify-end gap-3 border-t border-sgd-border pt-3">
                    <button onclick="verAluno(event, ${aluno.id})" class="text-sm text-sgd-muted hover:text-white px-3 py-1 rounded border border-sgd-border">Detalhes</button>
                    <button onclick="editarAluno(${aluno.id})" class="text-sm text-sgd-gold border border-sgd-gold px-3 py-1 rounded hover:bg-sgd-gold hover:text-black transition">Editar</button>
                    <button onclick="deletarAluno(${aluno.id}, '${aluno.nome}')" class="text-sm text-red-500 border border-red-900/50 px-3 py-1 rounded hover:bg-red-900/20">Excluir</button>
                </div>
            `;
            mobileContainer.appendChild(card);
        }
    });
    desenharPaginacao();
}

function desenharPaginacao() {
    renderizarPaginacao({
        idContainer: 'pagination-container',
        paginaAtual: paginaAtual,
        totalItens: dadosFiltrados.length,
        itensPorPagina: ITENS_POR_PAGINA,
        nomeFuncaoMudarPagina: 'mudarPagina' 
    });
}

function mudarPagina(n) { 
    const total = Math.ceil(dadosFiltrados.length / ITENS_POR_PAGINA); 
    if(n >= 1 && n <= total) { 
        paginaAtual = n; 
        desenharTabela(); 
    }
}

function aplicarFiltros() {
    const searchInput = document.getElementById('search-input');
    const statusInput = document.getElementById('filter-status');
    
    const search = searchInput ? searchInput.value.toLowerCase() : '';
    const status = statusInput ? statusInput.value.toLowerCase() : '';

    dadosFiltrados = mockAlunos.filter(a => (a.nome.toLowerCase().includes(search) || a.matricula.includes(search) || (a.orientador && a.orientador.toLowerCase().includes(search))) && (status === "" || a.status.toLowerCase() === status));
    paginaAtual = 1; 
    desenharTabela();
}

function verAluno(e, id) {
    if (e) e.preventDefault(); 
    const aluno = mockAlunos.find(a => a.id === id);
    if (!aluno) return;

    const setElementText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    };

    setElementText('detail-nome', aluno.nome);
    setElementText('detail-matricula', aluno.matricula);
    setElementText('detail-email', aluno.email);
    setElementText('detail-curso', `${aluno.curso} (Ingresso: ${aluno.ingresso})`);
    setElementText('detail-status', aluno.status);
    setElementText('detail-orientador', aluno.orientador || 'Não definido');

    const defesaContainer = document.getElementById('detail-defesa-container');
    if (defesaContainer) {
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
    }
    abrirModal('detalhes-modal');
}

function abrirModalAluno(id = null) {
    const form = document.getElementById('aluno-form');
    if(form) form.reset();
    
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
                ['titulo', 'data', 'horario', 'local', 'banca'].forEach(field => {
                    const el = document.getElementById(field);
                    if (el) el.value = '';
                });
            }
        }
    } else {
        document.getElementById('modal-title').textContent = "Novo Aluno";
        document.getElementById('aluno-id').value = '';
    }
 
    abrirModal('aluno-modal');
}

function salvarAluno(e) {
    e.preventDefault();
    const id = document.getElementById('aluno-id').value;
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

    if (titulo && data && horario && local && banca.length > 0) {
        FormDados.defesa = { titulo, data, horario, local, banca };
    }

    if (id) {
        const idx = mockAlunos.findIndex(a => a.id === parseInt(id));
        if (idx !== -1) {
            mockAlunos[idx] = { ...mockAlunos[idx], ...FormDados };
        }
    } else {
        mockAlunos.unshift(FormDados);
    }

    aplicarFiltros();
    fecharModal('aluno-modal');
}

function deletarAluno(id,nome) { 
    if(confirm(`Remover "${nome}"?`)){ 
        const index = mockAlunos.findIndex(a => a.id === id);
        if (index !== -1) {
            mockAlunos.splice(index, 1);
        }
        aplicarFiltros(); 
    }
}

function configurarEventos() {
    desenharTabela();
    
    configurarListenersModal({
        idModal: 'aluno-modal',
        fecharAoClicarFora: true
    });
    configurarListenersModal({
        idModal: 'detalhes-modal',
        fecharAoClicarFora: true
    });

    const form = document.getElementById('aluno-form');
    if(form) form.addEventListener('submit', salvarAluno);

    const searchInput = document.getElementById('search-input');
    const statusInput = document.getElementById('filter-status');
    if (searchInput) searchInput.addEventListener('keyup', aplicarFiltros);
    if (statusInput) statusInput.addEventListener('change', aplicarFiltros);
}

function inicializarAlunos() {
    if (document.getElementById('alunos-table-body') || document.getElementById('alunos-mobile-container')) {
        configurarEventos();
    } else {
        console.warn("Elementos da página de alunos não encontrados. Aguardando DOMContentLoaded.");
        document.addEventListener("DOMContentLoaded", () => {
             if (document.getElementById('alunos-table-body') || document.getElementById('alunos-mobile-container')) {
                configurarEventos();
             }
        });
    }
}

window.aplicarFiltros = aplicarFiltros;
window.abrirModalAluno = abrirModalAluno;
window.openAlunoModal = abrirModalAluno; 
window.deletarAluno = deletarAluno;
window.editarAluno = abrirModalAluno; 
window.mudarPagina = mudarPagina;
window.verAluno = verAluno;
window.fecharModalAluno = () => fecharModal('aluno-modal');
window.closeAlunoModal = () => fecharModal('aluno-modal'); 
window.fecharModalDetalhes = () => fecharModal('detalhes-modal');
window.closeDetalhesModal = () => fecharModal('detalhes-modal'); 

inicializarAlunos();