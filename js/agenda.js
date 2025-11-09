let mockDefenses = [
    {
        id: '1',
        title: 'Sistema de Gerenciamento de Defesas',
        start: '2025-11-10T14:00:00',
        extendedProps: {
            student: 'Ana Clara Silva',
            status: 'confirmed',
            orientador: 'Dr. Carlos Andrade'
        }
    },
    {
        id: '2',
        title: 'Análise de Algoritmos de IA',
        start: '2025-11-12T09:00:00',
        extendedProps: {
            student: 'Bruno Costa',
            status: 'pending',
            orientador: 'Dra. Beatriz Martins'
        }
    },
    {
        id: '3',
        title: 'Desenvolvimento de App Mobile Híbrido',
        start: '2025-11-20T10:30:00',
        extendedProps: {
            student: 'Carla Mendes',
            status: 'confirmed',
            orientador: 'Dr. Eduardo Ferreira'
        }
    },
    {
        id: '4',
        title: 'Segurança em Redes 5G',
        start: '2025-10-30T16:00:00',
        extendedProps: {
            student: 'Daniel Oliveira',
            status: 'canceled',
            orientador: 'Dra. Gabriela Lopes'
        }
    }
];

let calendar;

document.addEventListener('DOMContentLoaded', () => {
    
    initUIControls();
    populateUpcomingDefenses();
    initAgendaCalendar();
    initModalControls();

});

function initUIControls() {
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const userMenuButton = document.getElementById('userMenuButton');
    const navbar = document.getElementById('navbar');
    const menuBackdrop = document.getElementById('menuBackdrop');
    const userMenu = document.getElementById('userMenu');

    mobileMenuButton?.addEventListener('click', (e) => {
        e.stopPropagation();
        navbar.classList.toggle('-translate-x-full');
        menuBackdrop.classList.toggle('hidden');
    });

    userMenuButton?.addEventListener('click', (e) => {
        e.stopPropagation();
        userMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
        if (!navbar?.contains(e.target) && !mobileMenuButton?.contains(e.target)) {
            navbar?.classList.add('-translate-x-full');
            menuBackdrop?.classList.add('hidden');
        }
        if (!userMenu?.contains(e.target) && !userMenuButton?.contains(e.target)) {
            userMenu?.classList.add('hidden');
        }
    });
}

function populateUpcomingDefenses() {
    const listContainer = document.getElementById('upcomingDefensesList');
    if (!listContainer) return;

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const sevenDaysFromNow = new Date();
    sevenDaysFromNow.setDate(today.getDate() + 7);

    const upcoming = mockDefenses.filter(defesa => {
        const eventDate = new Date(defesa.start);
        return eventDate >= today && eventDate <= sevenDaysFromNow && defesa.extendedProps.status !== 'canceled';
    });

    upcoming.sort((a, b) => new Date(a.start) - new Date(b.start));

    listContainer.innerHTML = '';

    if (upcoming.length === 0) {
        listContainer.innerHTML = `<p class="text-[#AAAAAA]">Nenhuma defesa agendada para os próximos 7 dias.</p>`;
        return;
    }

    upcoming.forEach(defesa => {
        const eventDate = new Date(defesa.start);
        const dateString = eventDate.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
        const timeString = eventDate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

        const statusInfo = {
            confirmed: { text: 'Confirmada', color: 'text-green-400' },
            pending: { text: 'Pendente', color: 'text-yellow-400' }
        };
        const status = statusInfo[defesa.extendedProps.status];

        const itemHTML = `
            <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 bg-[#121212] rounded-lg border border-[#333] gap-2">
                <div>
                    <p class="text-sm font-medium text-[#E0E0E0]">${defesa.extendedProps.student} (${defesa.title})</p>
                    <p class="text-xs text-[#AAAAAA]">Orientador: ${defesa.extendedProps.orientador}</p>
                </div>
                <div class="text-left sm:text-right flex-shrink-0">
                    <span class="font-semibold text-[#E0E0E0]">${dateString} às ${timeString}</span>
                    <span class="block text-xs font-medium ${status.color}">${status.text}</span>
                </div>
            </div>
        `;
        listContainer.innerHTML += itemHTML;
    });
}

function initAgendaCalendar() {
    const calendarEl = document.getElementById('calendar');
    if (!calendarEl) return;

    calendar = new FullCalendar.Calendar(calendarEl, {
        locale: 'pt-br',
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,listWeek'
        },
        buttonText: {
            today: 'Hoje',
            month: 'Mês',
            week: 'Semana',
            list: 'Lista'
        },
        events: mockDefenses,
        
        eventContent: function(arg) {
            let status = arg.event.extendedProps.status || 'pending';
            let student = arg.event.extendedProps.student || 'Aluno';
            let title = arg.event.title;

            return {
                html: `
                    <div class="fc-event-main-frame">
                        <div class="fc-event-time">${arg.timeText}</div>
                        <div class="fc-event-title-container">
                            <div class="fc-event-title" style="white-space: normal;">
                                <strong>${student}</strong>: ${title}
                            </div>
                        </div>
                    </div>
                `
            };
        },
        eventClassNames: function(arg) {
            let status = arg.event.extendedProps.status;
            if (status === 'confirmed') return 'fc-event-confirmed';
            if (status === 'pending') return 'fc-event-pending';
            if (status === 'canceled') return 'fc-event-canceled';
            return '';
        },

        dateClick: function(info) {
            openEventModal(null, info.dateStr);
        },

        eventClick: function(info) {
            openEventModal(info.event);
        }
    });

    calendar.render();
}


const modal = document.getElementById('eventModal');
const modalTitle = document.getElementById('modalTitle');
const eventForm = document.getElementById('eventForm');
const eventIdInput = document.getElementById('eventId');
const deleteButton = document.getElementById('deleteButton');

function initModalControls() {
    document.getElementById('addEventButton').addEventListener('click', () => {
        openEventModal(null, new Date().toISOString().split('T')[0]);
    });

    document.getElementById('modalCloseButton').addEventListener('click', closeModal);
    document.getElementById('modalBackdrop').addEventListener('click', closeModal);
    document.getElementById('cancelButton').addEventListener('click', closeModal);

    eventForm.addEventListener('submit', handleFormSubmit);

    deleteButton.addEventListener('click', handleDeleteEvent);
}

function openEventModal(event, dateStr = null) {
    eventForm.reset();

    if (event) {
        modalTitle.innerText = "Editar Agendamento";
        deleteButton.classList.remove('hidden');

        const start = new Date(event.start);
        
        const yyyy = start.getFullYear();
        const mm = String(start.getMonth() + 1).padStart(2, '0');
        const dd = String(start.getDate()).padStart(2, '0');
        const hh = String(start.getHours()).padStart(2, '0');
        const min = String(start.getMinutes()).padStart(2, '0');

        eventIdInput.value = event.id;
        document.getElementById('evento_aluno').value = event.extendedProps.student;
        document.getElementById('evento_titulo').value = event.title;
        document.getElementById('evento_data').value = `${yyyy}-${mm}-${dd}`;
        document.getElementById('evento_hora').value = `${hh}:${min}`;
        document.getElementById('evento_status').value = event.extendedProps.status;

    } else {
        modalTitle.innerText = "Novo Agendamento";
        deleteButton.classList.add('hidden');
        eventIdInput.value = '';
        
        if (dateStr) {
            document.getElementById('evento_data').value = dateStr;
        }
    }

    modal.classList.remove('hidden');
}

function closeModal() {
    modal.classList.add('hidden');
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(eventForm);
    const id = formData.get('eventId');
    const startDateTime = `${formData.get('data')}T${formData.get('hora')}:00`;

    const newEventData = {
        title: formData.get('titulo'),
        start: startDateTime,
        extendedProps: {
            student: formData.get('aluno'),
            status: formData.get('status'),
            orientador: 'Dr. (Definir Lógica)'
        }
    };

    if (id) {
        mockDefenses = mockDefenses.map(defesa => 
            defesa.id === id ? { ...defesa, ...newEventData } : defesa
        );
    } else {

        newEventData.id = String(Date.now());
        mockDefenses.push(newEventData);
    }


    calendar.refetchEvents();
    populateUpcomingDefenses();
    closeModal();
}

function handleDeleteEvent() {
    const id = eventIdInput.value;
    if (!id) return;

    if (confirm("Tem certeza que deseja excluir esta defesa? Esta ação não pode ser desfeita.")) {
        mockDefenses = mockDefenses.filter(defesa => defesa.id !== id);
        
        calendar.refetchEvents();
        populateUpcomingDefenses();
        closeModal();
    }
}

calendar?.setOption('events', mockDefenses);