// Importa as funções genéricas de modal
import { abrirModal, configurarListenersModal } from './funcoesGerais.js';

/**
 * Função de inicialização da página de Documentos.
 */
function inicializarDocumentos() {
    console.log('documentos.js carregado com sucesso.');

    const botaoAdicionarMembro = document.querySelector('.btn-add-member');
    const containerBanca = document.querySelector('#banca-container');
    const blocoModelo = document.querySelector('.member-form-block');
    const formDocumentos = document.querySelector('#documentos-form');

    // Se os elementos principais não existirem, não executa o script.
    // Isso evita erros caso o script seja carregado em outra página.
    // Adicionamos um fallback para DCL caso o import seja muito rápido.
    if (!botaoAdicionarMembro || !containerBanca || !blocoModelo || !formDocumentos) {
        console.warn("Elementos de 'documentos.js' não encontrados. Aguardando DOMContentLoaded.");
        document.addEventListener('DOMContentLoaded', inicializarDocumentos);
        return;
    }

    // Configura o modal de sucesso
    configurarListenersModal({
        idModal: 'success-modal',
        idsBotoesFechar: ['close-success-modal-button', 'close-success-modal-icon'],
        fecharAoClicarFora: true
        // Note que não passamos 'idBotaoAbrir', pois ele é aberto via código
    });

    /**
     * Remove membros extras da banca (deixando apenas o primeiro)
     */
    const removerMembrosExtrasBanca = () => {
        if (!containerBanca) return;
        const todosOsMembros = containerBanca.querySelectorAll('.member-form-block');
        todosOsMembros.forEach((membro, indice) => {
            if (indice > 0) {
                membro.remove();
            }
        });
    };

    /**
     * Clona e adiciona um novo bloco de membro da banca ao formulário.
     */
    const adicionarMembroBanca = () => {
        console.log('Botão "Adicionar Membro" clicado.');
        if (!blocoModelo || !containerBanca) return;

        const novoBloco = blocoModelo.cloneNode(true);

        novoBloco.querySelectorAll('input, select, textarea').forEach(campo => {
            if (campo.type === 'checkbox' || campo.type === 'radio') {
                campo.checked = false;
            } else {
                campo.value = '';
            }
            campo.removeAttribute('required');
        });

        const titulo = novoBloco.querySelector('h4');
        if (titulo) {
            titulo.textContent = "Membro da Banca (Interno/Externo)";
        }

        const botaoRemover = document.createElement('button');
        botaoRemover.type = 'button';
        botaoRemover.textContent = 'Remover Membro';
        botaoRemover.className = 'text-red-500 text-xs hover:underline mt-2 p-1';

        botaoRemover.addEventListener('click', () => {
            novoBloco.remove();
        });

        novoBloco.appendChild(botaoRemover);
        containerBanca.appendChild(novoBloco);
    };

    /**
     * Manipula o envio do formulário de documentos.
     * @param {Event} evento O evento de submit.
     */
    const manipularEnvioFormulario = (evento) => {
        evento.preventDefault(); 
        console.log('Formulário válido, enviando...');

        const dadosFormulario = new FormData(formDocumentos);
        const dados = {};
        dadosFormulario.forEach((valor, chave) => {
            dados[chave] = valor;
        });

        console.log("Dados do Formulário (simplificado):", dados);

        // Chamamos a função genérica 'abrirModal'
        abrirModal('success-modal');

        formDocumentos.reset(); 
        removerMembrosExtrasBanca(); 
    };

    // Adiciona os listeners aos botões
    if (botaoAdicionarMembro) {
        botaoAdicionarMembro.addEventListener('click', adicionarMembroBanca);
    }

    if (formDocumentos) {
        formDocumentos.addEventListener('submit', manipularEnvioFormulario);
    }
}

// Chama a inicialização
inicializarDocumentos();