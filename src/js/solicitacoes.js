document.addEventListener('DOMContentLoaded', () => {
    console.log('solicitacoes.js carregado com sucesso.');
    const botaoAplicarFiltros = document.querySelector('.btn-apply-filters');

    if (botaoAplicarFiltros) {
        botaoAplicarFiltros.addEventListener('click', () => {
            console.log('Botão "Aplicar Filtros" clicado.');
            const campoNome = document.querySelector('input[placeholder="Nome do aluno"]').value.toLowerCase();
            const campoStatus = document.querySelector('select').value; 
            const todosOsItens = document.querySelectorAll('.solicitacao-item');
            todosOsItens.forEach(item => {
                const nomeDoItem = item.querySelector('h4').textContent.toLowerCase();
                const spanStatusDoItem = item.querySelector('span[class*="rounded-full"]');
                const statusDoItem = spanStatusDoItem.textContent.trim().toLowerCase();
                const nomeCorresponde = nomeDoItem.includes(campoNome);
                const statusCorresponde = (campoStatus === "") || (statusDoItem === campoStatus); 
                if (nomeCorresponde && statusCorresponde) {
                    item.style.display = 'flex'; 
                } else {
                    item.style.display = 'none'; 
                }
            });
        });
    }

    const botoesVerDetalhes = document.querySelectorAll('.btn-view-details');
    
    botoesVerDetalhes.forEach((botao, indice) => {
        botao.addEventListener('click', (evento) => {
            const elementoItem = evento.target.closest('.solicitacao-item');
            const nomeAluno = elementoItem.querySelector('h4').textContent;
            console.log(`Botão "Ver Detalhes" clicado para: ${nomeAluno} (Item ${indice + 1})`);
            
        });
    });
});