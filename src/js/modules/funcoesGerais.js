/**
 * Torna um modal visível.
 * @param {string} idModal O ID do elemento modal que deve ser aberto.
 */
export function abrirModal(idModal) {
    const modal = document.getElementById(idModal);
    if (modal) {
        modal.classList.remove('hidden');
    } else {
        console.warn(`Modal com ID "${idModal}" não encontrado.`);
    }
}

/**
 * Torna um modal invisível.
 * @param {string} idModal O ID do elemento modal que deve ser fechado.
 */
export function fecharModal(idModal) {
    const modal = document.getElementById(idModal);
    if (modal) {
        modal.classList.add('hidden');
    } else {
        console.warn(`Modal com ID "${idModal}" não encontrado.`);
    }
}

/**
 * Configura todos os listeners de evento para um modal (abrir, fechar, clicar fora).
 * @param {Object} config
 * @param {string} config.idModal O ID do modal.
 * @param {string} [config.idBotaoAbrir] O ID do botão que abre o modal.
 * @param {string[]} [config.idsBotoesFechar] Um array de IDs de botões que fecham o modal.
 * @param {boolean} [config.fecharAoClicarFora=true] Define se o modal fecha ao clicar no backdrop (fora).
 */
export function configurarListenersModal({ idModal, idBotaoAbrir, idsBotoesFechar = [], fecharAoClicarFora = true }) {
    const modal = document.getElementById(idModal);
    if (!modal) {
        console.warn(`Modal com ID "${idModal}" não encontrado para configurar listeners.`);
        return;
    }

    // 1. Botão de Abrir
    if (idBotaoAbrir) {
        const botaoAbrir = document.getElementById(idBotaoAbrir);
        if (botaoAbrir) {
            botaoAbrir.addEventListener('click', () => abrirModal(idModal));
        }
    }

    // 2. Botões de Fechar (Ex: 'X', 'Cancelar', 'OK')
    idsBotoesFechar.forEach(idBotao => {
        const botaoFechar = document.getElementById(idBotao);
        if (botaoFechar) {
            botaoFechar.addEventListener('click', () => fecharModal(idModal));
        }
    });

    // 3. Fechar ao Clicar Fora (no backdrop)
    if (fecharAoClicarFora) {
        modal.addEventListener('click', (evento) => {
            // Verifica se o clique foi no próprio elemento modal (o backdrop)
            // e não em um elemento filho (o conteúdo do modal)
            if (evento.target.id === idModal) {
                fecharModal(idModal);
            }
        });
    }
}

/**
 * Renderiza os controles de paginação em um container.
 * @param {Object} config
 * @param {string} config.idContainer O ID do container onde a paginação será renderizada.
 * @param {number} config.paginaAtual A página atual.
 * @param {number} config.totalItens O número total de itens (ex: dadosFiltrados.length).
 * @param {number} config.itensPorPagina O número de itens por página.
 * @param {string} config.nomeFuncaoMudarPagina O nome da *função global* (em window) a ser chamada no onclick (ex: 'mudarPagina').
 */
export function renderizarPaginacao({ idContainer, paginaAtual, totalItens, itensPorPagina, nomeFuncaoMudarPagina }) {
    const containerPaginacao = document.getElementById(idContainer);
    if (!containerPaginacao) {
        console.warn(`Container de paginação "${idContainer}" não encontrado.`);
        return;
    }

    const totalPaginas = Math.ceil(totalItens / itensPorPagina);
    containerPaginacao.innerHTML = ''; 

    if (totalPaginas <= 1) {
        return; 
    }
    
    // Botão Anterior
    let htmlBotoes = `<button onclick="${nomeFuncaoMudarPagina}(${paginaAtual - 1})" class="px-3 py-1 rounded border border-sgd-border text-sm transition ${paginaAtual === 1 ? 'text-sgd-muted opacity-50 cursor-not-allowed' : 'text-sgd-text hover:bg-sgd-border hover:text-sgd-gold'}" ${paginaAtual === 1 ? 'disabled' : ''}>Anterior</button>`;
    
    // Lógica de '...' no início
    let paginaInicio = Math.max(1, paginaAtual - 2);
    let paginaFim = Math.min(totalPaginas, paginaAtual + 2);

    if (paginaInicio > 1) {
        htmlBotoes += `<button onclick="${nomeFuncaoMudarPagina}(1)" class="px-3 py-1 rounded border text-sm transition border-sgd-border text-sgd-text hover:bg-sgd-border hover:text-sgd-gold">1</button>`;
        if (paginaInicio > 2) {
            htmlBotoes += `<span class="px-3 py-1 text-sgd-muted">...</span>`;
        }
    }

    // Botões de Números
    for (let i = paginaInicio; i <= paginaFim; i++) {
        htmlBotoes += `<button onclick="${nomeFuncaoMudarPagina}(${i})" class="px-3 py-1 rounded border text-sm transition ${i === paginaAtual ? 'bg-sgd-gold text-black border-sgd-gold font-bold' : 'border-sgd-border text-sgd-text hover:bg-sgd-border hover:text-sgd-gold'}">${i}</button>`;
    }

    // Lógica de '...' no fim
    if (paginaFim < totalPaginas) {
        if (paginaFim < totalPaginas - 1) {
            htmlBotoes += `<span class="px-3 py-1 text-sgd-muted">...</span>`;
        }
        htmlBotoes += `<button onclick="${nomeFuncaoMudarPagina}(${totalPaginas})" class="px-3 py-1 rounded border text-sm transition border-sgd-border text-sgd-text hover:bg-sgd-border hover:text-sgd-gold">${totalPaginas}</button>`;
    }

    // Botão Próximo
    htmlBotoes += `<button onclick="${nomeFuncaoMudarPagina}(${paginaAtual + 1})" class="px-3 py-1 rounded border border-sgd-border text-sm transition ${paginaAtual === totalPaginas ? 'text-sgd-muted opacity-50 cursor-not-allowed' : 'text-sgd-text hover:bg-sgd-border hover:text-sgd-gold'}" ${paginaAtual === totalPaginas ? 'disabled' : ''}>Próximo</button>`;
    
    // Contagem
    containerPaginacao.innerHTML = `<span class="text-xs text-sgd-muted mr-4">Pág. ${paginaAtual} de ${totalPaginas} (${totalItens} total)</span>${htmlBotoes}`;
}