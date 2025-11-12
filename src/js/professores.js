
let listaProfessores = [
    { id: 1, nome: "Damires Yluska", email: "damires@ifpb.edu.br", lattes: "[http://lattes.cnpq.br/ex1](http://lattes.cnpq.br/ex1)", instituicao: "IFPB", titulacao: "Doutorado", tipo: "Permanente", areas: "Redes de Computadores, Segurança da Informação", ativo: true },
    { id: 2, nome: "Francisco Dantas", email: "dantas@ifpb.edu.br", lattes: "", instituicao: "IFPB", titulacao: "Mestrado", tipo: "Colaborador", areas: "Engenharia de Software, Banco de Dados", ativo: true },
    { id: 3, nome: "Valéria Maria", email: "valeria.maria@ufpb.br", lattes: "[http://lattes.cnpq.br/ex2](http://lattes.cnpq.br/ex2)", instituicao: "UFPB", titulacao: "Doutorado", tipo: "Visitante", areas: "Inteligência Artificial, Data Science", ativo: false },
    // ... (restante dos dados mockados)
    { id: 40, nome: "Sophia Nunes", email: "sophia.n@ifpb.edu.br", lattes: "[http://lattes.cnpq.br/ex40](http://lattes.cnpq.br/ex40)", instituicao: "IFPB", titulacao: "Doutorado", tipo: "Permanente", areas: "Interação Humano-Computador, Realidade Aumentada", ativo: true }
];

for (let i = 11; i <= 33; i++) {
    listaProfessores.push({
        id: i,
        nome: `Professor Teste ${i}`,
        email: `prof${i}@exemplo.com`,
        lattes: i % 2 === 0 ? `http://lattes.cnpq.br/${i}` : "",
        instituicao: i % 3 === 0 ? "UFPB" : "IFPB",
        titulacao: i % 4 === 0 ? "Mestrado" : "Doutorado",
        tipo: i % 3 === 0 ? "Visitante" : (i % 2 === 0 ? "Colaborador" : "Permanente"),
        areas: "Área Genérica A, Área Genérica B",
        ativo: i % 5 !== 0
    });
}

let paginaAtual = 1;
const ITENS_POR_PAGINA = 8;
let dadosFiltrados = [...listaProfessores]; 

function desenharTabela() {
    const corpoTabela = document.getElementById('professores-table-body');
    corpoTabela.innerHTML = ''; 

    if (dadosFiltrados.length === 0) {
        corpoTabela.innerHTML = `<tr><td colspan="7" class="px-6 py-8 text-center text-sgd-muted flex flex-col items-center">
            <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" class="h-12 w-12 mb-4 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <p class="text-lg">Nenhum professor encontrado.</p>
        </td></tr>`;
        desenharPaginacao(); 
        return; 
    }

    const indiceInicio = (paginaAtual - 1) * ITENS_POR_PAGINA;
    const indiceFim = indiceInicio + ITENS_POR_PAGINA;
    const dadosPaginados = dadosFiltrados.slice(indiceInicio, indiceFim);

    dadosPaginados.forEach(prof => {
        const linha = document.createElement('tr');
        linha.className = `hover:bg-[#1A1A1A] transition-colors ${!prof.ativo ? 'opacity-50 bg-black/40' : ''}`;

        let classeCrachaTipo = prof.tipo === 'Permanente' ? 'bg-sgd-gold/20 text-sgd-gold border-sgd-gold/50' :
                             prof.tipo === 'Colaborador' ? 'bg-blue-900/30 text-blue-400 border-blue-800' :
                             'bg-purple-900/30 text-purple-400 border-purple-800';

        const iconeStatus = prof.ativo
            ? `<div class="flex justify-center" title="Ativo"><span class="flex h-3 w-3 relative"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span><span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span></span></div>`
            : `<div class="flex justify-center" title="Inativo"><span class="h-3 w-3 rounded-full bg-red-900 border border-red-700 inline-block"></span></div>`;

        const linkLattes = prof.lattes
            ? `<a href="${prof.lattes}" target="_blank" class="flex justify-center text-sgd-muted hover:text-sgd-gold transition" title="Ver Lattes"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg></a>`
            : `<span class="flex justify-center text-sgd-border opacity-30 cursor-not-allowed"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg></span>`;

        linha.innerHTML = `
            <td class="table-cell">
                <a href="#" onclick="verProfessor(event, ${prof.id})" class="font-medium text-white hover:text-sgd-gold hover:underline transition">
                    ${prof.nome}
                </a>
                <div class="text-sgd-muted text-xs truncate max-w-[200px]" title="${prof.areas || ''}">
                    ${prof.areas || '—'}
                </div>
            </td>
            <td class="table-cell">${prof.instituicao}</td>
            <td class="table-cell">${prof.titulacao}</td>
            <td class="table-cell">${linkLattes}</td>
            <td class="table-cell"><span class="px-2 py-1 text-xs font-medium rounded-full border ${classeCrachaTipo}">${prof.tipo}</span></td>
            <td class="table-cell">${iconeStatus}</td>
            <td class="table-cell text-right">
                <div class="flex items-center justify-end space-x-3">
                    <button onclick="editarProfessor(${prof.id})" class="text-sgd-muted hover:text-sgd-gold transition"><svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg></button>
                    <button onclick="deletarProfessor(${prof.id}, '${prof.nome}')" class="text-sgd-muted hover:text-red-500 transition"><svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></button>
                </div>
            </td>`;
        corpoTabela.appendChild(linha);
    });

    desenharPaginacao();
}

function desenharPaginacao() {
    const divPaginacao = document.getElementById('pagination-container');
    const totalPaginas = Math.ceil(dadosFiltrados.length / ITENS_POR_PAGINA);
    
    if (totalPaginas <= 1) { 
        divPaginacao.innerHTML = ''; 
        return; 
    }
    
    let htmlBotoes = `<button onclick="mudarPagina(${paginaAtual - 1})" class="px-3 py-1 rounded border border-sgd-border text-sm transition ${paginaAtual === 1 ? 'text-sgd-muted opacity-50 cursor-not-allowed' : 'text-sgd-text hover:bg-sgd-border hover:text-sgd-gold'}" ${paginaAtual === 1 ? 'disabled' : ''}>Anterior</button>`;
    
    let paginaInicio = Math.max(1, paginaAtual - 2);
    let paginaFim = Math.min(totalPaginas, paginaAtual + 2);
    
    for (let i = paginaInicio; i <= paginaFim; i++) {
        htmlBotoes += `<button onclick="mudarPagina(${i})" class="px-3 py-1 rounded border text-sm transition ${i === paginaAtual ? 'bg-sgd-gold text-black border-sgd-gold font-bold' : 'border-sgd-border text-sgd-text hover:bg-sgd-border hover:text-sgd-gold'}">${i}</button>`;
    }

    htmlBotoes += `<button onclick="mudarPagina(${paginaAtual + 1})" class="px-3 py-1 rounded border border-sgd-border text-sm transition ${paginaAtual === totalPaginas ? 'text-sgd-muted opacity-50 cursor-not-allowed' : 'text-sgd-text hover:bg-sgd-border hover:text-sgd-gold'}" ${paginaAtual === totalPaginas ? 'disabled' : ''}>Próximo</button>`;
    
    divPaginacao.innerHTML = `<span class="text-xs text-sgd-muted mr-4">Pág. ${paginaAtual} de ${totalPaginas} (${dadosFiltrados.length} total)</span>${htmlBotoes}`;
}

function mudarPagina(numPagina) { 
    const total = Math.ceil(dadosFiltrados.length / ITENS_POR_PAGINA); 
    if (numPagina >= 1 && numPagina <= total) { 
        paginaAtual = numPagina; 
        desenharTabela(); 
    }
}

function aplicarFiltros() {
    const busca = document.getElementById('search-input').value.toLowerCase();
    const tipo = document.getElementById('filter-tipo').value.toLowerCase();
    
    dadosFiltrados = listaProfessores.filter(p => 
        (p.nome.toLowerCase().includes(busca) || p.email.toLowerCase().includes(busca) || (p.areas && p.areas.toLowerCase().includes(busca))) && 
        (tipo === "" || p.tipo.toLowerCase() === tipo)
    );
    
    paginaAtual = 1; 
    desenharTabela();
}

function verProfessor(evento, id) {
    if (evento) evento.preventDefault();
    const professor = listaProfessores.find(p => p.id === id);
    if (!professor) return;

    document.getElementById('detail-nome').textContent = professor.nome;
    document.getElementById('detail-titulacao').textContent = professor.titulacao;
    document.getElementById('detail-email').textContent = professor.email;
    document.getElementById('detail-instituicao').textContent = professor.instituicao;

    const linkLattesDetalhe = document.getElementById('detail-lattes-link');
    if (professor.lattes) {
        linkLattesDetalhe.href = professor.lattes;
        linkLattesDetalhe.classList.remove('hidden');
    } else {
        linkLattesDetalhe.classList.add('hidden');
    }

    let classeCrachaTipo = professor.tipo === 'Permanente' ? 'bg-sgd-gold/20 text-sgd-gold border-sgd-gold/50' : (professor.tipo === 'Colaborador' ? 'bg-blue-900/30 text-blue-400 border-blue-800' : 'bg-purple-900/30 text-purple-400 border-purple-800');
    document.getElementById('detail-categoria-badge').innerHTML = `<span class="px-2 py-1 text-xs font-medium rounded-full border ${classeCrachaTipo}">${professor.tipo}</span>`;
    
    const crachaStatus = professor.ativo 
        ? '<span class="px-2 py-1 text-xs font-medium rounded-full bg-green-900/30 text-green-400 border border-green-800">Ativo</span>'
        : '<span class="px-2 py-1 text-xs font-medium rounded-full bg-red-900/30 text-red-400 border border-red-800">Inativo</span>';
    document.getElementById('detail-status-badge').innerHTML = crachaStatus;

    const divAreas = document.getElementById('detail-areas-container');
    divAreas.innerHTML = '';
    if (professor.areas) {
        professor.areas.split(',').forEach(area => {
            const etiqueta = document.createElement('span');
            etiqueta.className = 'px-3 py-1 bg-[#333333] text-sgd-text text-sm rounded-full border border-sgd-border';
            etiqueta.textContent = area.trim();
            divAreas.appendChild(etiqueta);
        });
    } else {
        divAreas.innerHTML = '<span class="text-sgd-muted italic">Nenhuma área registrada.</span>';
    }

    document.getElementById('detalhes-modal').classList.remove('hidden');
}

function fecharModalDetalhes() { 
    document.getElementById('detalhes-modal').classList.add('hidden'); 
}

function alternarInstituicao(tipo) {
    const campoInstituicao = document.getElementById('input-instituicao');
    if (tipo === 'Permanente') { 
        campoInstituicao.value = 'IFPB'; 
        campoInstituicao.setAttribute('readonly', true); 
        campoInstituicao.classList.add('opacity-50', 'cursor-not-allowed'); 
    } else { 
        if (campoInstituicao.value === 'IFPB') campoInstituicao.value = ''; 
        campoInstituicao.removeAttribute('readonly'); 
        campoInstituicao.classList.remove('opacity-50', 'cursor-not-allowed'); 
    }
}

function abrirModalProfessor(id = null) {
    const janelaModal = document.getElementById('professor-modal'); 
    document.getElementById('professor-form').reset(); 
    
    if (id) {
 
        document.getElementById('modal-title').textContent = "Editar Professor";
        const professor = listaProfessores.find(p => p.id === id);
        if (professor) {
            document.getElementById('professor-id').value = professor.id; 
            document.getElementById('input-nome').value = professor.nome; 
            document.getElementById('input-email').value = professor.email;
            document.getElementById('input-lattes').value = professor.lattes; 
            document.getElementById('select-tipo').value = professor.tipo; 
            document.getElementById('input-instituicao').value = professor.instituicao;
            document.getElementById('select-titulacao').value = professor.titulacao; 
            document.getElementById('input-areas').value = professor.areas || ''; 
            document.getElementById('check-ativo').checked = professor.ativo;
            alternarInstituicao(professor.tipo); 
        }
    } else { 
        // Modo Novo
        document.getElementById('modal-title').textContent = "Novo Professor"; 
        document.getElementById('professor-id').value = ''; 
        alternarInstituicao('Permanente'); 
    }
    
    janelaModal.classList.remove('hidden'); 
}

function fecharModalProfessor() { 
    document.getElementById('professor-modal').classList.add('hidden'); 
}

function salvarProfessor(evento) {
    evento.preventDefault(); 
    const idProfessor = document.getElementById('professor-id').value;
    
    const dadosFormulario = { 
        id: idProfessor ? parseInt(idProfessor) : Date.now(), 
        nome: document.getElementById('input-nome').value, 
        email: document.getElementById('input-email').value, 
        lattes: document.getElementById('input-lattes').value, 
        tipo: document.getElementById('select-tipo').value, 
        instituicao: document.getElementById('input-instituicao').value, 
        titulacao: document.getElementById('select-titulacao').value, 
        areas: document.getElementById('input-areas').value, 
        ativo: document.getElementById('check-ativo').checked 
    };
    
    if (idProfessor) { 
        const indice = listaProfessores.findIndex(p => p.id === parseInt(idProfessor)); 
        if (indice !== -1) listaProfessores[indice] = dadosFormulario; 
    } else {        
        listaProfessores.unshift(dadosFormulario); 
    }
    
    fecharModalProfessor(); 
    aplicarFiltros(); 
}

// Função para deletar um professor
function deletarProfessor(id, nome) { 
    if (confirm(`Remover "${nome}"?\n\n(Atenção: Esta ação é permanente!)`)) { 
        listaProfessores = listaProfessores.filter(p => p.id !== id); 
        aplicarFiltros(); // Atualiza a tabela
    }
}

// --- Funções que rodam quando a página carrega ---

document.addEventListener("DOMContentLoaded", () => {
    desenharTabela(); 
    
    document.getElementById('professor-modal').addEventListener('click', (evento) => {
        if (evento.target.id === 'professor-modal') fecharModalProfessor();
    });
    
    document.getElementById('detalhes-modal').addEventListener('click', (evento) => {
        if (evento.target.id === 'detalhes-modal') fecharModalDetalhes();
    });

    document.getElementById('professor-form').addEventListener('submit', salvarProfessor);
});

window.aplicarFiltros = aplicarFiltros; 
window.abrirModalProfessor = abrirModalProfessor; 
window.fecharModalProfessor = fecharModalProfessor;
window.alternarInstituicao = alternarInstituicao; 
window.deletarProfessor = deletarProfessor; 
window.editarProfessor = abrirModalProfessor; 
window.mudarPagina = mudarPagina; 
window.verProfessor = verProfessor; 
window.fecharModalDetalhes = fecharModalDetalhes;