let listaSecretarios = [
    { id: 1, nome: "Ana Paula Ribeiro", siape: "1928374", campus: "João Pessoa", email: "ana.ribeiro@ifpb.edu.br", role: "Secretário", ativo: true },
    { id: 2, nome: "Carlos Mendes", siape: "9182736", campus: "Campina Grande", email: "carlos.mendes@ifpb.edu.br", role: "Secretário", ativo: true },
    { id: 3, nome: "Diogo Aguiar", siape: "1020304", campus: "João Pessoa", email: "diogo.aguiar@ifpb.edu.br", role: "Coordenador", ativo: true },
    { id: 4, nome: "Mariana Lima", siape: "5647382", campus: "João Pessoa", email: "mariana.lima@ifpb.edu.br", role: "Secretário", ativo: false },
    { id: 5, nome: "Ricardo Alves", siape: "7766554", campus: "Cajazeiras", email: "ricardo.alves@ifpb.edu.br", role: "Secretário", ativo: true },
    { id: 6, nome: "Beatriz Costa", siape: "3322110", campus: "Reitoria", email: "beatriz.costa@ifpb.edu.br", role: "Coordenador", ativo: true },
    { id: 7, nome: "Felipe Nogueira", siape: "9876543", campus: "Campina Grande", email: "felipe.nogueira@ifpb.edu.br", role: "Secretário", ativo: true },
    { id: 8, nome: "Luiza Fernandes", siape: "1231234", campus: "João Pessoa", email: "luiza.fernandes@ifpb.edu.br", role: "Secretário", ativo: false },
    { id: 9, nome: "Marcos Oliveira", siape: "4564567", campus: "Cajazeiras", email: "marcos.oliveira@ifpb.edu.br", role: "Coordenador", ativo: true },
    { id: 10, nome: "Júlia Pereira", siape: "7897890", campus: "João Pessoa", email: "julia.pereira@ifpb.edu.br", role: "Secretário", ativo: true },
    { id: 11, nome: "Vitor Santos", siape: "1112223", campus: "Campina Grande", email: "vitor.santos@ifpb.edu.br", role: "Secretário", ativo: true }
];

let paginaAtual = 1;
const ITENS_POR_PAGINA = 8;
let dadosFiltrados = [...listaSecretarios]; 

function desenharTabela() {
    const corpoTabela = document.getElementById('secretarios-table-body');
    if (!corpoTabela) { 
        setTimeout(desenharTabela, 100); 
        return; 
    }
    corpoTabela.innerHTML = ''; 

    if (dadosFiltrados.length === 0) {
        corpoTabela.innerHTML = `<tr><td colspan="6" class="px-6 py-8 text-center text-sgd-muted flex flex-col items-center">
            <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" class="h-12 w-12 mb-4 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
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
                    <button onclick="resetarSenha('${secretario.nome}')" class="text-sgd-muted hover:text-blue-400 p-1" title="Resetar Senha"><svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg></button>
                    <button onclick="abrirModalSecretario(${secretario.id})" class="text-sgd-muted hover:text-sgd-gold p-1" title="Editar"><svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg></button>
                    <button onclick="deletarSecretario(${secretario.id}, '${secretario.nome}')" class="text-sgd-muted hover:text-red-500 p-1" title="Revogar/Reativar Acesso"><svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg></button>
                </div>
            </td>`;
        corpoTabela.appendChild(linha);
    });
    
    desenharPaginacao();
}

function desenharPaginacao() {
    const divPaginacao = document.getElementById('pagination-container');
    if (!divPaginacao) return;
    const totalPaginas = Math.ceil(dadosFiltrados.length / ITENS_POR_PAGINA);
    
    if (totalPaginas <= 1) { 
        divPaginacao.innerHTML = ''; 
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
    document.getElementById('detalhes-modal').classList.remove('hidden');
}

function fecharModalDetalhes() { 
    document.getElementById('detalhes-modal').classList.add('hidden'); 
}

function abrirModalSecretario(id = null) {
    const janelaModal = document.getElementById('secretario-modal');
    if (!janelaModal) return;
    document.getElementById('secretario-form').reset(); 
    
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
        // Modo Novo
        document.getElementById('modal-title').textContent = "Novo Usuário";
        document.getElementById('secretario-id').value = '';
        document.getElementById('select-role').value = 'Secretário'; 
    }
    
    janelaModal.classList.remove('hidden'); // Mostra o modal
}

// Função para fechar o modal de criar/editar
function fecharModalSecretario() { 
    document.getElementById('secretario-modal').classList.add('hidden'); 
}

// Função para salvar (criar ou editar) um secretário
function salvarSecretario(evento) {
    evento.preventDefault(); // Impede o formulário de recarregar a página
    const idString = document.getElementById('secretario-id').value;
    const id = idString ? parseInt(idString) : null;
    
    // Pega todos os dados do formulário
    const dadosFormulario = {
        id: id || Date.now(), // Cria um ID novo se não existir
        nome: document.getElementById('input-nome').value,
        siape: document.getElementById('input-siape').value,
        campus: document.getElementById('select-campus').value,
        email: document.getElementById('input-email').value,
        role: document.getElementById('select-role').value,
        ativo: document.getElementById('check-ativo').checked
    };
    
    if (id) { 
        // Se tinha ID, está editando
        const indice = listaSecretarios.findIndex(s => s.id === id); 
        if (indice !== -1) listaSecretarios[indice] = dadosFormulario; 
    }
    else { 
        // Se não tinha ID, está criando
        listaSecretarios.unshift(dadosFormulario); // Adiciona no início da lista
    }
    
    aplicarFiltros(); // Atualiza a tabela
    fecharModalSecretario(); // Fecha o modal
}

// Função para "deletar" (na verdade, ativar/desativar)
function deletarSecretario(id, nome) {
    const secretario = listaSecretarios.find(s => s.id === id);
    if (!secretario) return;
    
    // Muda o texto da confirmação dependendo se está ativo ou inativo
    const acao = secretario.ativo ? "revogar" : "reativar";
    const titulo = secretario.ativo ? "Revogar Acesso?" : "Reativar Acesso?";
    
    if (confirm(`${titulo}\n\nDeseja ${acao} o acesso de "${nome}"?`)) { 
        secretario.ativo = !secretario.ativo; // Inverte o status (true vira false, false vira true)
        aplicarFiltros(); // Atualiza a tabela
    }
}

// Função para (simular) reset de senha
function resetarSenha(nome) { 
    // Em um app real, isso chamaria uma API. Aqui, só mostramos um alerta.
    alert(`Um link de redefinição de senha (simulado) foi enviado para o e-mail de ${nome}.`); 
}

// --- Funções que rodam quando a página carrega ---

// Adiciona os "ouvintes" de eventos quando o HTML estiver pronto
document.addEventListener("DOMContentLoaded", () => {
    desenharTabela(); // Desenha a tabela inicial
    
    const janelaModal = document.getElementById('secretario-modal');
    const formulario = document.getElementById('secretario-form');
    
    if (janelaModal && formulario) {
        // Fecha o modal se clicar fora da "janela"
        janelaModal.addEventListener('click', (evento) => { 
            if (evento.target.id === 'secretario-modal') fecharModalSecretario(); 
        });
        // Ouve o botão "submit" do formulário
        formulario.addEventListener('submit', salvarSecretario);
    }
    
    const modalDetalhes = document.getElementById('detalhes-modal');
    if (modalDetalhes) {
        // Fecha o modal de detalhes se clicar fora
        modalDetalhes.addEventListener('click', (evento) => {
            if (evento.target.id === 'detalhes-modal') fecharModalDetalhes();
        });
    }
});

// --- Expondo Funções para o HTML ---
// Coloca as funções na "janela" global para que os botões (onclick) no HTML possam usá-las
window.aplicarFiltros = aplicarFiltros;
window.abrirModalSecretario = abrirModalSecretario;
window.fecharModalSecretario = fecharModalSecretario;
window.deletarSecretario = deletarSecretario;
window.resetarSenha = resetarSenha;
window.mudarPagina = mudarPagina;
window.verSecretario = verSecretario;
window.fecharModalDetalhes = fecharModalDetalhes;
window.salvarSecretario = salvarSecretario; // Expondo para o form (embora o 'submit' já pegue)