import { mockAlunos } from './database.js';
import { abrirModal, fecharModal, configurarListenersModal } from './funcoesGerais.js';

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
        listaDefesas.innerHTML = `<div class="text-center py-8 text-[#AAAAAA]">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto mb-2 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Nenhum agendamento realizado.
        </div>`;
        return;
    }

    defesas.forEach(defesa => {
        const dataEvento = new Date(defesa.start);
        const dataString = dataEvento.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
        const horaString = dataEvento.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
        const nomeAluno = defesa.extendedProps.student;
        const tituloDefesa = defesa.extendedProps.title || 'Título não informado';
        const itemHTML = `
            <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-[#1A1A1A] rounded-lg border border-[#333] hover:border-[#C0A040] transition-colors gap-4 group">
                
                <div class="flex-1 min-w-0">
                    <h4 class="text-sm font-bold text-white group-hover:text-[#E6C850] transition-colors truncate">${nomeAluno}</h4>
                    <p class="text-xs text-[#888888] truncate mt-1" title="${tituloDefesa}">${tituloDefesa}</p>
                </div>

                <div class="flex items-center bg-[#121212] px-4 py-2 rounded-md border border-[#333] shrink-0 w-full sm:w-auto justify-center">
                    <!-- Ícone de Calendário -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-[#C0A040] mr-3 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    
                    <!-- Data e Hora Formatadas -->
                    <div class="text-sm font-medium">
                        <span class="text-[#E0E0E0]">${dataString}</span>
                        <span class="text-[#555] text-xs mx-1">às</span>
                        <span class="text-[#C0A040] font-bold">${horaString}</span>
                    </div>
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

    if (document.getElementById('allDefensesList') || document.getElementById('eventForm')) {
        obterDefesas();
        popularListaDefesas();
        popularSeletorAluno();
        initControlesModal();
    } else {
        document.addEventListener('DOMContentLoaded', () => {
            if (document.getElementById('allDefensesList')) {
                obterDefesas();
                popularListaDefesas();
                popularSeletorAluno();
                initControlesModal();
            }
        });
    }
}

inicializarAgenda();