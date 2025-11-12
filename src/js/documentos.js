document.addEventListener('DOMContentLoaded', () => {
    console.log('documentos.js carregado com sucesso.');

    const botaoAdicionarMembro = document.querySelector('.btn-add-member');
    const containerBanca = document.querySelector('#banca-container');
    const blocoModelo = document.querySelector('.member-form-block');
    const formDocumentos = document.querySelector('#documentos-form');
    const modalSucesso = document.querySelector('#success-modal');
    const botaoFecharModal = document.querySelector('#close-success-modal-button');
    const iconeFecharModal = document.querySelector('#close-success-modal-icon');

    const removerMembrosExtrasBanca = () => {
        if (!containerBanca) return;
        const todosOsMembros = containerBanca.querySelectorAll('.member-form-block');
        todosOsMembros.forEach((membro, indice) => {
            if (indice > 0) {
                membro.remove();
            }
        });
    };

    const abrirModalSucesso = () => {
        if (modalSucesso) modalSucesso.classList.remove('hidden');
    };


    const fecharModalSucesso = () => {
        if (modalSucesso) modalSucesso.classList.add('hidden');
    };

    const adicionarMembroBanca = () => {
        console.log('Botão "Adicionar Membro" clicado.');

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
     * 
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

        abrirModalSucesso();
        formDocumentos.reset(); 
        removerMembrosExtrasBanca(); 
    };

    if (botaoAdicionarMembro && containerBanca && blocoModelo) {
        botaoAdicionarMembro.addEventListener('click', adicionarMembroBanca);
    }

    if (formDocumentos) {
        formDocumentos.addEventListener('submit', manipularEnvioFormulario);
    }

    if (modalSucesso && botaoFecharModal && iconeFecharModal) {
        botaoFecharModal.addEventListener('click', fecharModalSucesso);
        iconeFecharModal.addEventListener('click', fecharModalSucesso);

        modalSucesso.addEventListener('click', (evento) => {
            if (evento.target.id === 'success-modal') {
                fecharModalSucesso();
            }
        });
    }
});