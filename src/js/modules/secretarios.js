import { listaSecretarios } from "./database.js";
import { abrirModal, fecharModal, configurarListenersModal, renderizarPaginacao } from './funcoesGerais.js';

let paginaAtual = 1;
const ITENS_POR_PAGINA = 8;
let dadosFiltrados = [...listaSecretarios]; 

function desenharTabela() {
    const corpoTabela = document.getElementById('secretarios-table-body');
    if (!corpoTabela) { 
        console.warn("Elemento 'secretarios-table-body' não encontrado.");
        return; 
    }
    corpoTabela.innerHTML = ''; 

    if (dadosFiltrados.length === 0) {
        corpoTabela.innerHTML = `<tr><td colspan="6" class="px-6 py-8 text-center text-sgd-muted flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mb-4 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <p class="text-lg">Nenhum usuário encontrado.</p>
        </td></tr>`;
        desenharPaginacao(); 
        return; 
    }

    const indiceInicio = (paginaAtual - 1) * ITENS_POR_PAGINA;
    const indiceFim = indiceInicio + ITENS_POR_PAGINA;
    const dadosPaginados = dadosFiltrados.slice(indiceInicio, indiceFim);

    dadosPaginados.forEach(secretario => {
        const linha = document.createElement('tr');
        linha.className = `hover:bg-[#1A1A1A] transition-colors ${!secretario.ativo ? 'opacity-50 bg-black/40' : ''}`;

        const crachaNivel = secretario.role === 'Coordenador'
            ? `<span class="px-2 py-1 text-xs font-bold rounded-full bg-sgd-gold/20 text-sgd-gold border border-sgd-gold/50">Coordenador</span>`
            : `<span class="px-2 py-1 text-xs font-medium rounded-full bg-blue-900/30 text-blue-400 border border-blue-800">Secretário</span>`;

        const iconeStatus = secretario.ativo
            ? `<div class="flex justify-center" title="Ativo"><span class="flex h-3 w-3 relative"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span><span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span></span></div>`
            : `<div class="flex justify-center" title="Inativo"><span class="h-3 w-3 rounded-full bg-red-900 border border-red-700 inline-block"></span></div>`;

        linha.innerHTML = `
            <td class="table-cell">
                <a href="#" onclick="verSecretario(event, ${secretario.id})" class="font-medium text-white hover:text-sgd-gold hover:underline transition">
                    ${secretario.nome}
                </a>
                <div class="text-sgd-muted text-xs truncate max-w-[200px]" title="${secretario.email}">
                    ${secretario.email}
                </div>
            </td>
            <td class="table-cell">${secretario.siape}</td>
            <td class="table-cell">${secretario.campus}</td>
            <td class="table-cell">${crachaNivel}</td>
            <td class="table-cell">${iconeStatus}</td>
            <td class="table-cell text-right">
                <div class="flex items-center justify-end space-x-2">
                    <button onclick="resetarSenha('${secretario.nome}')" class="text-sgd-muted hover:text-blue-400 p-1" title="Resetar Senha"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg></button>
                    <button onclick="abrirModalSecretario(${secretario.id})" class="text-sgd-muted hover:text-sgd-gold p-1" title="Editar"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg></button>
                    <button onclick="deletarSecretario(${secretario.id}, '${secretario.nome}')" class="text-sgd-muted hover:text-red-500 p-1" title="Revogar/Reativar Acesso"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg></button>
                </div>
            </td>`;
        corpoTabela.appendChild(linha);
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
function mudarPagina(numPagina) { 
    const total = Math.ceil(dadosFiltrados.length / ITENS_POR_PAGINA); 
    if (numPagina >= 1 && numPagina <= total) { 
        paginaAtual = numPagina; 
        desenharTabela(); 
    }
}

function aplicarFiltros() {
    const busca = document.getElementById('search-input') ? document.getElementById('search-input').value.toLowerCase() : '';
    const nivel = document.getElementById('filter-role') ? document.getElementById('filter-role').value : '';
    
    dadosFiltrados = listaSecretarios.filter(secretario => {
        const correspondeBusca = secretario.nome.toLowerCase().includes(busca) || secretario.siape.includes(busca) || secretario.email.toLowerCase().includes(busca);
        const correspondeNivel = nivel === "" || secretario.role === nivel;
        return correspondeBusca && correspondeNivel;
    });
    
    paginaAtual = 1; 
    desenharTabela(); 
}

function verSecretario(evento, id) {
    if (evento) evento.preventDefault();
    const secretario = listaSecretarios.find(s => s.id === id);
    if (!secretario) return;

    document.getElementById('detail-nome').textContent = secretario.nome;
    document.getElementById('detail-email').textContent = secretario.email;
    document.getElementById('detail-siape').textContent = secretario.siape;
    document.getElementById('detail-campus').textContent = secretario.campus;
    document.getElementById('detail-role').innerHTML = secretario.role === 'Coordenador' 
        ? `<span class="px-2 py-1 text-xs font-bold rounded-full bg-sgd-gold/20 text-sgd-gold border border-sgd-gold/50">Coordenador</span>` 
        : `<span class="px-2 py-1 text-xs font-medium rounded-full bg-blue-900/30 text-blue-400 border border-blue-800">Secretário</span>`;
    const crachaStatus = secretario.ativo 
        ? '<span class="px-2 py-1 text-xs font-medium rounded-full bg-green-900/30 text-green-400 border border-green-800">Conta Ativa</span>'
        : '<span class="px-2 py-1 text-xs font-medium rounded-full bg-red-900/30 text-red-400 border border-red-800">Conta Inativa</span>';
    document.getElementById('detail-status').innerHTML = crachaStatus;

    abrirModal('detalhes-modal');
}

function abrirModalSecretario(id = null) {
    const janelaModal = document.getElementById('secretario-modal');
    if (!janelaModal) return;
    const form = document.getElementById('secretario-form');
    if (form) form.reset(); 
    
    if (id) {
        document.getElementById('modal-title').textContent = "Editar Usuário";
        const secretario = listaSecretarios.find(s => s.id === id);
        if (secretario) {
            document.getElementById('secretario-id').value = secretario.id;
            document.getElementById('input-nome').value = secretario.nome;
            document.getElementById('input-siape').value = secretario.siape;
            document.getElementById('select-campus').value = secretario.campus;
            document.getElementById('input-email').value = secretario.email;
            document.getElementById('select-role').value = secretario.role;
            document.getElementById('check-ativo').checked = secretario.ativo;
        }
    } else {
        document.getElementById('modal-title').textContent = "Novo Usuário";
        document.getElementById('secretario-id').value = '';
        document.getElementById('select-role').value = 'Secretário'; 
    }

    abrirModal('secretario-modal');
}

function salvarSecretario(evento) {
    evento.preventDefault(); 
    const idString = document.getElementById('secretario-id').value;
    const id = idString ? parseInt(idString) : null;

    const dadosFormulario = {
        id: id || Date.now(), 
        nome: document.getElementById('input-nome').value,
        siape: document.getElementById('input-siape').value,
        campus: document.getElementById('select-campus').value,
        email: document.getElementById('input-email').value,
        role: document.getElementById('select-role').value,
        ativo: document.getElementById('check-ativo').checked
    };
    
    if (id) { 
        const indice = listaSecretarios.findIndex(s => s.id === id); 
        if (indice !== -1) listaSecretarios[indice] = dadosFormulario; 
    }
    else { 
        listaSecretarios.unshift(dadosFormulario); 
    }
    aplicarFiltros(); 
    fecharModal('secretario-modal'); 
}

function deletarSecretario(id, nome) {
    const secretario = listaSecretarios.find(s => s.id === id);
    if (!secretario) return;
    
    const acao = secretario.ativo ? "revogar" : "reativar";
    const titulo = secretario.ativo ? "Revogar Acesso?" : "Reativar Acesso?";
    
    if (confirm(`${titulo}\n\nDeseja ${acao} o acesso de "${nome}"?`)) { 
        secretario.ativo = !secretario.ativo; 
        aplicarFiltros(); 
    }
}

function resetarSenha(nome) { 

    console.info(`Um link de redefinição de senha (simulado) foi enviado para o e-mail de ${nome}.`); 
}

function inicializarSecretarios() {
    const tabelaBody = document.getElementById('secretarios-table-body');
    const formulario = document.getElementById('secretario-form');

    if (tabelaBody && formulario) {
        desenharTabela(); 
        
        formulario.addEventListener('submit', salvarSecretario);

        configurarListenersModal({
            idModal: 'secretario-modal',
            fecharAoClicarFora: true
        });
        
        configurarListenersModal({
            idModal: 'detalhes-modal',
            fecharAoClicarFora: true
        });
        const searchInput = document.getElementById('search-input');
        const filterRole = document.getElementById('filter-role');
        if (searchInput) searchInput.addEventListener('keyup', aplicarFiltros);
        if (filterRole) filterRole.addEventListener('change', aplicarFiltros);

    } else {
        console.warn("Elementos de 'secretarios.js' não encontrados. Aguardando DOMContentLoaded.");
        document.addEventListener("DOMContentLoaded", inicializarSecretarios);
    }
}

inicializarSecretarios();
window.aplicarFiltros = aplicarFiltros;
window.abrirModalSecretario = abrirModalSecretario;
window.deletarSecretario = deletarSecretario;
window.resetarSenha = resetarSenha;
window.mudarPagina = mudarPagina;
window.verSecretario = verSecretario;
window.salvarSecretario = salvarSecretario; 
window.fecharModalSecretario = () => fecharModal('secretario-modal');
window.fecharModalDetalhes = () => fecharModal('detalhes-modal');
