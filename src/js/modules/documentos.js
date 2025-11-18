import { abrirModal, configurarListenersModal } from '@js/modules/funcoesGerais.js';

function inicializarDocumentos() {
    console.log('documentos.js carregado com sucesso.');

    const botaoAdicionarMembro = document.querySelector('.btn-add-member');
    const containerBanca = document.querySelector('#banca-container');
    const blocoModelo = document.querySelector('.member-form-block');
    const formDocumentos = document.querySelector('#documentos-form');

    if (!botaoAdicionarMembro || !containerBanca || !blocoModelo || !formDocumentos) {
        console.warn("Elementos de 'documentos.js' não encontrados. Aguardando DOMContentLoaded.");
        document.addEventListener('DOMContentLoaded', inicializarDocumentos);
        return;
    }

    configurarListenersModal({
        idModal: 'success-modal',
        idsBotoesFechar: ['close-success-modal-button', 'close-success-modal-icon'],
        fecharAoClicarFora: true
    });
    const removerMembrosExtrasBanca = () => {
        if (!containerBanca) return;
        const todosOsMembros = containerBanca.querySelectorAll('.member-form-block');
        todosOsMembros.forEach((membro, indice) => {
            if (indice > 0) {
                membro.remove();
            }
        });
    };
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

    const manipularEnvioFormulario = (evento) => {
        evento.preventDefault(); 
        console.log('Formulário válido, enviando...');

        const dadosFormulario = new FormData(formDocumentos);
        const dados = {};
        dadosFormulario.forEach((valor, chave) => {
            dados[chave] = valor;
        });

        console.log("Dados do Formulário (simplificado):", dados);

        abrirModal('success-modal');

        formDocumentos.reset(); 
        removerMembrosExtrasBanca(); 
    };

    if (botaoAdicionarMembro) {
        botaoAdicionarMembro.addEventListener('click', adicionarMembroBanca);
    }

    if (formDocumentos) {
        formDocumentos.addEventListener('submit', manipularEnvioFormulario);
    }
}

inicializarDocumentos();