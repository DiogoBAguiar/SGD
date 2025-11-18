import { mockAlunos } from '@js/modules/database.js';
import { abrirModal, fecharModal, configurarListenersModal } from '@js/modules/funcoesGerais.js';

const listaDefesas = document.getElementById('allDefensesList');
const formularioEvento = document.getElementById('eventForm');
const seletorAluno = document.getElementById('evento_aluno');

function obterDefesas() {
    const defesasJson = localStorage.getItem('defenses');
    if (defesasJson) {
        return JSON.parse(defesasJson);
    } else {
        const defesasIniciais = mockAlunos
            .filter(aluno => aluno.defesa)
            .map(aluno => ({
                id: String(aluno.id),
                start: `${aluno.defesa.data}T${aluno.defesa.horario}:00`,
                extendedProps: {
                    student: aluno.nome,
                    title: aluno.defesa.titulo
                }
            }));
        localStorage.setItem('defenses', JSON.stringify(defesasIniciais));
        return defesasIniciais;
    }
}

function salvarDefesas(defesas) {
    localStorage.setItem('defenses', JSON.stringify(defesas));
}

function popularListaDefesas() {
    if (!listaDefesas) return;

    const defesas = obterDefesas();
    defesas.sort((a, b) => new Date(a.start) - new Date(b.start));

    listaDefesas.innerHTML = '';

    if (defesas.length === 0) {
        listaDefesas.innerHTML = `<p class="text-[#AAAAAA]">Nenhum agendamento realizado.</p>`;
        return;
    }

    defesas.forEach(defesa => {
        const dataEvento = new Date(defesa.start);
        const dataString = dataEvento.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
        const horaString = dataEvento.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

        const nomeAluno = defesa.extendedProps.student;
        const tituloDefesa = defesa.extendedProps.title;

        let alunoDisplay = nomeAluno;
        if (tituloDefesa) {
            alunoDisplay = `${nomeAluno} (${tituloDefesa})`;
        }

        const itemHTML = `
            <div class="flex items-center justify-between p-3 bg-[#121212] rounded-lg border border-[#333] gap-4">
                <p class="text-sm font-medium text-[#E0E0E0]">${alunoDisplay}</p>
                <div class="text-right flex-shrink-0">
                    <span class="font-semibold text-[#E0E0E0]">${dataString} às ${horaString}</span>
                </div>
            </div>
        `;
        listaDefesas.innerHTML += itemHTML;
    });
}

function popularSeletorAluno() {
    if (!seletorAluno) return;

    const todosAlunos = mockAlunos;

    seletorAluno.innerHTML = '<option value="" disabled selected>Selecione um aluno</option>';
    todosAlunos.forEach(aluno => {
        const opcao = document.createElement('option');
        opcao.value = aluno.nome;
        opcao.textContent = aluno.nome;
        seletorAluno.appendChild(opcao);
    });
}
function abrirModalEvento() {
    if (formularioEvento) formularioEvento.reset();
    const dataInput = document.getElementById('evento_data');
    if (dataInput) dataInput.value = new Date().toISOString().split('T')[0];
    const horaInput = document.getElementById('evento_hora');
    if (horaInput) horaInput.value = '09:00';
    
    abrirModal('eventModal'); 
}

function tratarEnvioFormulario(e) {
    e.preventDefault();
    
    const dadosFormulario = new FormData(formularioEvento);
    const nomeAluno = dadosFormulario.get('aluno');
    
    if (!nomeAluno) {
        console.warn('Seleção de aluno é obrigatória.');
        return;
    }

    const dataHoraInicial = `${dadosFormulario.get('data')}T${dadosFormulario.get('hora')}:00`;
    let defesas = obterDefesas();

    const alunoSelecionado = mockAlunos.find(aluno => aluno.nome === nomeAluno);
    let tituloDefesa = '';
    if (alunoSelecionado && alunoSelecionado.defesa && alunoSelecionado.defesa.titulo) {
        tituloDefesa = alunoSelecionado.defesa.titulo;
    }

    const novosDadosEvento = {
        id: String(Date.now()),
        start: dataHoraInicial,
        extendedProps: {
            student: nomeAluno,
            title: tituloDefesa
        }
    };

    defesas.push(novosDadosEvento);
    salvarDefesas(defesas);
    popularListaDefesas();
    fecharModal('eventModal');
}

function initControlesModal() {
    const addEventButton = document.getElementById('addEventButton');

    if (addEventButton) {
        addEventButton.addEventListener('click', abrirModalEvento);
    }
    configurarListenersModal({
        idModal: 'eventModal',
        idsBotoesFechar: ['modalCloseButton', 'cancelButton'],
        fecharAoClicarFora: true 
    });

    if (formularioEvento) {
        formularioEvento.addEventListener('submit', tratarEnvioFormulario);
    }
}

function inicializarAgenda() {

    if (document.getElementById('allDefensesList') && document.getElementById('eventForm')) {
        obterDefesas();
        popularListaDefesas();
        popularSeletorAluno();
        initControlesModal();
    } else {
        document.addEventListener('DOMContentLoaded', () => {
            obterDefesas();
            popularListaDefesas();
            popularSeletorAluno();
            initControlesModal();
        });
    }
}

inicializarAgenda();