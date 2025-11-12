import { mockAlunos } from './database.js'; // Importa os dados dos alunos
const listaSolicitacoes = mockAlunos.map((aluno, index) => {
    let statusSolicitacao;
    let dataSolicitacao; 
    let tipoSolicitacao = (aluno.id % 3 === 0) ? 'Qualificação' : 'Defesa';

    switch (aluno.status) {
        case 'Qualificado':
        case 'Defendido':
            statusSolicitacao = 'Aprovada';
            dataSolicitacao = `2024-10-${String((index % 28) + 1).padStart(2, '0')}`; 
            break;
        case 'Trancado':
        case 'Desligado':
            statusSolicitacao = 'Rejeitada';
            dataSolicitacao = `2024-09-${String((index % 28) + 1).padStart(2, '0')}`;
            break;
        case 'Ativo':
        default:
            statusSolicitacao = 'Aguardando';
            dataSolicitacao = `2024-11-${String((index % 10) + 1).padStart(2, '0')}`;
    }

    return {
        idAluno: aluno.id,
        nome: aluno.nome,
        matricula: aluno.matricula,
        status: statusSolicitacao,
        data: dataSolicitacao,
        tipo: tipoSolicitacao,
        alunoOriginal: aluno 
    };
});
let paginaAtual = 1;
const ITENS_POR_PAGINA = 5; 
let dadosFiltrados = [...listaSolicitacoes];
let containerLista = null;
let containerPaginacao = null; 
let modalDetalhes = null; 
let btnAplicarFiltros = null;
let campoNome = null;
let campoStatus = null;
let campoData = null;
function getClasseStatus(status) {
    switch (status.toLowerCase()) {
        case 'aprovada':
            return 'bg-green-700/30 text-green-400';
        case 'rejeitada':
            return 'bg-red-700/30 text-red-400';
        case 'aguardando':
        default:
            return 'bg-yellow-700/30 text-yellow-400';
    }
}

function desenharLista() {
    if (!containerLista) return; 
    containerLista.innerHTML = ''; 
    if (dadosFiltrados.length === 0) {
        containerLista.innerHTML = `<div class="p-8 text-center text-sgd-muted">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto mb-3 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Nenhuma solicitação encontrada para os filtros aplicados.
        </div>`;
        desenharPaginacao(); 
        return;
    }
    const indiceInicio = (paginaAtual - 1) * ITENS_POR_PAGINA;
    const indiceFim = indiceInicio + ITENS_POR_PAGINA;
    const dadosPaginados = dadosFiltrados.slice(indiceInicio, indiceFim);
    dadosPaginados.forEach(solicitacao => {
        const divItem = document.createElement('div');
        divItem.className = "flex flex-col md:flex-row items-start md:items-center justify-between p-5 solicitacao-item";
        
        const classeStatus = getClasseStatus(solicitacao.status);

        divItem.innerHTML = `
            <div>
                <h4 class="text-lg font-semibold text-white">${solicitacao.nome}</h4>
                <p class="text-sm text-sgd-muted">Matrícula: ${solicitacao.matricula} | Tipo: ${solicitacao.tipo}</p>
            </div>
            <div class="flex items-center gap-4 mt-3 md:mt-0">
                <span class="px-3 py-1 text-sm rounded-full ${classeStatus}">
                    ${solicitacao.status}
                </span>
                <button class="btn-primary btn-view-details text-sm px-4 py-2" onclick="verDetalhes(${solicitacao.idAluno})">
                    Ver Detalhes
                </button>
            </div>
        `;
        containerLista.appendChild(divItem);
    });

    desenharPaginacao();
}

function desenharPaginacao() {
    if (!containerPaginacao) return;
    const totalPaginas = Math.ceil(dadosFiltrados.length / ITENS_POR_PAGINA);
    
    if (totalPaginas <= 1) { 
        containerPaginacao.innerHTML = ''; 
        return; 
    }
    
    let htmlBotoes = `<button onclick="mudarPagina(${paginaAtual - 1})" class="px-3 py-1 rounded border border-sgd-border text-sm transition ${paginaAtual === 1 ? 'text-sgd-muted opacity-50 cursor-not-allowed' : 'text-sgd-text hover:bg-sgd-border hover:text-sgd-gold'}" ${paginaAtual === 1 ? 'disabled' : ''}>Anterior</button>`;
    
    let paginaInicio = Math.max(1, paginaAtual - 2);
    let paginaFim = Math.min(totalPaginas, paginaAtual + 2);

    if (paginaInicio > 1) {
        htmlBotoes += `<button onclick="mudarPagina(1)" class="px-3 py-1 rounded border text-sm transition border-sgd-border text-sgd-text hover:bg-sgd-border hover:text-sgd-gold">1</button>`;
        if (paginaInicio > 2) {
            htmlBotoes += `<span class="px-3 py-1 text-sgd-muted">...</span>`;
        }
    }

    for (let i = paginaInicio; i <= paginaFim; i++) {
        htmlBotoes += `<button onclick="mudarPagina(${i})" class="px-3 py-1 rounded border text-sm transition ${i === paginaAtual ? 'bg-sgd-gold text-black border-sgd-gold font-bold' : 'border-sgd-border text-sgd-text hover:bg-sgd-border hover:text-sgd-gold'}">${i}</button>`;
    }

    if (paginaFim < totalPaginas) {
        if (paginaFim < totalPaginas - 1) {
            htmlBotoes += `<span class="px-3 py-1 text-sgd-muted">...</span>`;
        }
        htmlBotoes += `<button onclick="mudarPagina(${totalPaginas})" class="px-3 py-1 rounded border text-sm transition border-sgd-border text-sgd-text hover:bg-sgd-border hover:text-sgd-gold">${totalPaginas}</button>`;
    }

    htmlBotoes += `<button onclick="mudarPagina(${paginaAtual + 1})" class="px-3 py-1 rounded border border-sgd-border text-sm transition ${paginaAtual === totalPaginas ? 'text-sgd-muted opacity-50 cursor-not-allowed' : 'text-sgd-text hover:bg-sgd-border hover:text-sgd-gold'}" ${paginaAtual === totalPaginas ? 'disabled' : ''}>Próximo</button>`;
    
    containerPaginacao.innerHTML = `<span class="text-xs text-sgd-muted mr-4">Pág. ${paginaAtual} de ${totalPaginas} (${dadosFiltrados.length} total)</span>${htmlBotoes}`;
}

function mudarPagina(numPagina) { 
    const total = Math.ceil(dadosFiltrados.length / ITENS_POR_PAGINA); 
    if (numPagina >= 1 && numPagina <= total) { 
        paginaAtual = numPagina; 
        desenharLista(); 
    }
}
function aplicarFiltros() {
    const nomeBusca = campoNome.value.toLowerCase();
    const statusBusca = campoStatus.value;
    const dataBusca = campoData.value;

    dadosFiltrados = listaSolicitacoes.filter(solicitacao => {
        const nomeCorresponde = solicitacao.nome.toLowerCase().includes(nomeBusca) || 
                                solicitacao.matricula.includes(nomeBusca);
        
        const statusCorresponde = (statusBusca === "") || 
                                  (solicitacao.status.toLowerCase() === statusBusca);
        
        const dataCorresponde = (dataBusca === "") || 
                                (solicitacao.data === dataBusca);
        
        return nomeCorresponde && statusCorresponde && dataCorresponde;
    });
    paginaAtual = 1; 
    desenharLista();
}

function fecharModalDetalhes() {
    if (modalDetalhes) {
        modalDetalhes.classList.add('hidden');
    }
}

function verDetalhes(idAluno) {
    const solicitacao = listaSolicitacoes.find(s => s.idAluno === idAluno);
    
    if (!solicitacao || !modalDetalhes) {
        console.error("Não foi possível encontrar a solicitação ou o modal.", idAluno);
        return;
    }
    const aluno = solicitacao.alunoOriginal;
    document.getElementById('detail-nome').textContent = aluno.nome;
    document.getElementById('detail-matricula').textContent = aluno.matricula;
    document.getElementById('detail-email').textContent = aluno.email;
    document.getElementById('detail-curso').textContent = `${aluno.curso} (Ingresso: ${aluno.ingresso})`;
    document.getElementById('detail-orientador').textContent = aluno.orientador || 'Não definido';
    const statusAlunoEl = document.getElementById('detail-status');
    statusAlunoEl.textContent = aluno.status;
    statusAlunoEl.className = 'inline-block px-2 py-1 text-xs rounded-full mt-1'; 
    let statusClasse = 'bg-gray-900 text-gray-400 border-gray-700'; 
    switch(aluno.status) {
        case 'Ativo': statusClasse = 'bg-sky-900/30 text-sky-400 border-sky-800'; break;
        case 'Qualificado': statusClasse = 'bg-sgd-gold/20 text-sgd-gold border-sgd-gold/50'; break;
        case 'Defendido': statusClasse = 'bg-emerald-900/30 text-emerald-400 border-emerald-800'; break;
        case 'Trancado': case 'Desligado': statusClasse = 'bg-red-900/30 text-red-400 border-red-800 opacity-70'; break;
    }
    statusAlunoEl.classList.add(...statusClasse.split(' ')); 

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
            <p>Nenhuma defesa registrada para este aluno.</p>
        </div>`;
    }

    modalDetalhes.classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    
    containerLista = document.getElementById('solicitacoes-container');
    containerPaginacao = document.getElementById('pagination-container'); 
    modalDetalhes = document.getElementById('detalhes-modal'); 
    btnAplicarFiltros = document.querySelector('.btn-apply-filters');
    campoNome = document.querySelector('input[placeholder="Nome do aluno"]');
    campoStatus = document.querySelector('select');
    campoData = document.querySelector('input[type="date"]');

    if (!containerLista || !containerPaginacao || !modalDetalhes) { 
        console.error("Erro: Um dos containers (lista, paginação, modal) não foi encontrado."); 
        return;
    }

    if (btnAplicarFiltros) {
        btnAplicarFiltros.addEventListener('click', aplicarFiltros);
    }

    modalDetalhes.addEventListener('click', (evento) => {
        if (evento.target.id === 'detalhes-modal') {
            fecharModalDetalhes();
        }
    });

    if (campoNome) campoNome.addEventListener('keyup', aplicarFiltros);
    if (campoStatus) campoStatus.addEventListener('change', aplicarFiltros);
    if (campoData) campoData.addEventListener('change', aplicarFiltros);

    desenharLista();
});

window.verDetalhes = verDetalhes;
window.mudarPagina = mudarPagina; 
window.fecharModalDetalhes = fecharModalDetalhes; 