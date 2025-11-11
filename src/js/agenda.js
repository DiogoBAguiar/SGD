// Removed: import { mockAlunos } from './alunos.js';

const allDefensesList = document.getElementById('allDefensesList');
const modal = document.getElementById('eventModal');
const eventForm = document.getElementById('eventForm');
const studentSelect = document.getElementById('evento_aluno');

function getDefenses() {
    const defensesJson = localStorage.getItem('defenses');
    if (defensesJson) {
        return JSON.parse(defensesJson);
    } else {
        // Access mockAlunos globally
        const initialDefenses = mockAlunos
            .filter(aluno => aluno.defesa)
            .map(aluno => ({
                id: String(aluno.id),
                start: `${aluno.defesa.data}T${aluno.defesa.horario}:00`,
                extendedProps: {
                    student: aluno.nome,
                }
            }));
        localStorage.setItem('defenses', JSON.stringify(initialDefenses));
        return initialDefenses;
    }
}

function saveDefenses(defenses) {
    localStorage.setItem('defenses', JSON.stringify(defenses));
}

function populateAllDefenses() {
    if (!allDefensesList) return;

    const defenses = getDefenses();
    defenses.sort((a, b) => new Date(a.start) - new Date(b.start));

    allDefensesList.innerHTML = '';

    if (defenses.length === 0) {
        allDefensesList.innerHTML = `<p class="text-[#AAAAAA]">Nenhum agendamento realizado.</p>`;
        return;
    }

    defenses.forEach(defesa => {
        const eventDate = new Date(defesa.start);
        const dateString = eventDate.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
        const timeString = eventDate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

        const itemHTML = `
            <div class="flex items-center justify-between p-3 bg-[#121212] rounded-lg border border-[#333] gap-4">
                <p class="text-sm font-medium text-[#E0E0E0]">${defesa.extendedProps.student}</p>
                <div class="text-right flex-shrink-0">
                    <span class="font-semibold text-[#E0E0E0]">${dateString} às ${timeString}</span>
                </div>
            </div>
        `;
        allDefensesList.innerHTML += itemHTML;
    });
}

function populateStudentSelector() {
    if (!studentSelect) return;

    // Access mockAlunos globally
    const studentsWithoutDefense = mockAlunos.filter(aluno => !aluno.defesa);

    studentSelect.innerHTML = '<option value="" disabled selected>Selecione um aluno</option>';
    studentsWithoutDefense.forEach(aluno => {
        const option = document.createElement('option');
        option.value = aluno.nome;
        option.textContent = aluno.nome;
        studentSelect.appendChild(option);
    });
}

function openEventModal() {
    eventForm.reset();
    document.getElementById('evento_data').value = new Date().toISOString().split('T')[0];
    document.getElementById('evento_hora').value = '09:00';
    modal.classList.remove('hidden');
}

function closeModal() {
    modal.classList.add('hidden');
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(eventForm);
    const studentName = formData.get('aluno');
    
    if (!studentName) {
        alert('Por favor, selecione um aluno.');
        return;
    }

    const startDateTime = `${formData.get('data')}T${formData.get('hora')}:00`;
    let defenses = getDefenses();

    const newEventData = {
        id: String(Date.now()),
        start: startDateTime,
        extendedProps: {
            student: studentName,
        }
    };

    defenses.push(newEventData);
    saveDefenses(defenses);
    populateAllDefenses();
    closeModal();
}

function initModalControls() {
    document.getElementById('addEventButton').addEventListener('click', openEventModal);
    document.getElementById('modalCloseButton').addEventListener('click', closeModal);
    document.getElementById('modalBackdrop').addEventListener('click', closeModal);
    document.getElementById('cancelButton').addEventListener('click', closeModal);
    eventForm.addEventListener('submit', handleFormSubmit);
}

document.addEventListener('DOMContentLoaded', () => {
    getDefenses();
    populateAllDefenses();
    populateStudentSelector();
    initModalControls();
});