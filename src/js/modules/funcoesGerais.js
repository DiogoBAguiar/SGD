export function abrirModal(idModal) {
    const modal = document.getElementById(idModal);
    if (modal) {
        modal.classList.remove('hidden');
    } else {
        console.warn(`Modal com ID "${idModal}" não encontrado.`);
    }
}
export function fecharModal(idModal) {
    const modal = document.getElementById(idModal);
    if (modal) {
        modal.classList.add('hidden');
    } else {
        console.warn(`Modal com ID "${idModal}" não encontrado.`);
    }
}
export function configurarListenersModal({ idModal, idBotaoAbrir, idsBotoesFechar = [], fecharAoClicarFora = true }) {
    const modal = document.getElementById(idModal);
    if (!modal) {
        console.warn(`Modal com ID "${idModal}" não encontrado para configurar listeners.`);
        return;
    }

    if (idBotaoAbrir) {
        const botaoAbrir = document.getElementById(idBotaoAbrir);
        if (botaoAbrir) {
            botaoAbrir.addEventListener('click', () => abrirModal(idModal));
        }
    }

    idsBotoesFechar.forEach(idBotao => {
        const botaoFechar = document.getElementById(idBotao);
        if (botaoFechar) {
            botaoFechar.addEventListener('click', () => fecharModal(idModal));
        }
    });

    if (fecharAoClicarFora) {
        modal.addEventListener('click', (evento) => {
            if (evento.target.id === idModal) {
                fecharModal(idModal);
            }
        });
    }
}
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

    let htmlBotoes = `<button onclick="${nomeFuncaoMudarPagina}(${paginaAtual - 1})" class="px-3 py-1 rounded border border-sgd-border text-sm transition ${paginaAtual === 1 ? 'text-sgd-muted opacity-50 cursor-not-allowed' : 'text-sgd-text hover:bg-sgd-border hover:text-sgd-gold'}" ${paginaAtual === 1 ? 'disabled' : ''}>Anterior</button>`;
    let paginaInicio = Math.max(1, paginaAtual - 2);
    let paginaFim = Math.min(totalPaginas, paginaAtual + 2);

    if (paginaInicio > 1) {
        htmlBotoes += `<button onclick="${nomeFuncaoMudarPagina}(1)" class="px-3 py-1 rounded border text-sm transition border-sgd-border text-sgd-text hover:bg-sgd-border hover:text-sgd-gold">1</button>`;
        if (paginaInicio > 2) {
            htmlBotoes += `<span class="px-3 py-1 text-sgd-muted">...</span>`;
        }
    }

    for (let i = paginaInicio; i <= paginaFim; i++) {
        htmlBotoes += `<button onclick="${nomeFuncaoMudarPagina}(${i})" class="px-3 py-1 rounded border text-sm transition ${i === paginaAtual ? 'bg-sgd-gold text-black border-sgd-gold font-bold' : 'border-sgd-border text-sgd-text hover:bg-sgd-border hover:text-sgd-gold'}">${i}</button>`;
    }

    if (paginaFim < totalPaginas) {
        if (paginaFim < totalPaginas - 1) {
            htmlBotoes += `<span class="px-3 py-1 text-sgd-muted">...</span>`;
        }
        htmlBotoes += `<button onclick="${nomeFuncaoMudarPagina}(${totalPaginas})" class="px-3 py-1 rounded border text-sm transition border-sgd-border text-sgd-text hover:bg-sgd-border hover:text-sgd-gold">${totalPaginas}</button>`;
    }

    htmlBotoes += `<button onclick="${nomeFuncaoMudarPagina}(${paginaAtual + 1})" class="px-3 py-1 rounded border border-sgd-border text-sm transition ${paginaAtual === totalPaginas ? 'text-sgd-muted opacity-50 cursor-not-allowed' : 'text-sgd-text hover:bg-sgd-border hover:text-sgd-gold'}" ${paginaAtual === totalPaginas ? 'disabled' : ''}>Próximo</button>`;
    containerPaginacao.innerHTML = `<span class="text-xs text-sgd-muted mr-4">Pág. ${paginaAtual} de ${totalPaginas} (${totalItens} total)</span>${htmlBotoes}`;
}