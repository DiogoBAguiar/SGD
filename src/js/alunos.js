
let mockAlunos = [

    {
        id: 101, nome: "Diogo Bruno Aguiar", matricula: "2023201405", email: "diogo@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2023, orientador: "Damires Yluska", status: "Qualificado",
        defesa: {
            titulo: "Arquitetura de Microsserviços para Sistemas Acadêmicos",
            data: "2026-12-31", horario: "14:00", local: "Laboratório 3",
            banca: ["Profa. Dra. Damires Yluska (Orientadora)", "Prof. Dr. Francisco Dantas (Examinador Interno)", "Prof. Dr. José Silva (Examinador Externo - UFPB)"]
        }
    },
    {
        id: 102, nome: "Laura Beatriz Souza", matricula: "2024100550", email: "laura@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2024, orientador: "Francisco Dantas", status: "Ativo",
        defesa: null
    },
    {
        id: 103, nome: "Carlos Gabriel Silva", matricula: "2022100100", email: "carlos@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2022, orientador: "Valéria Maria", status: "Defendido",
        defesa: {
            titulo: "Uso de IA na Detecção de Pragas em Lavouras de Algodão",
            data: "2024-02-20", horario: "09:00", local: "Auditório Central",
            banca: ["Profa. Dra. Valéria Maria (Orientadora)", "Prof. Dr. Giovanni Silva (Examinador Interno)", "Dra. Ana Pereira (Embrapa)"]
        }
    },
    {
        id: 104, nome: "Ana Clara Mendes", matricula: "2023100200", email: "ana@aluno.ifpb.edu.br", curso: "Especialização", ingresso: 2023, orientador: "", status: "Trancado",
        defesa: null
    },

    {
        id: 105, nome: "Lucas Pereira Santos", matricula: "2023101101", email: "lucas.p@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2023, orientador: "Damires Yluska", status: "Ativo",
        defesa: null
    },
    {
        id: 106, nome: "Fernanda Lima Costa", matricula: "2021200305", email: "fernanda.l@aluno.ifpb.edu.br", curso: "Doutorado", ingresso: 2021, orientador: "Francisco Dantas", status: "Qualificado",
        defesa: {
            titulo: "Framework para Segurança em IoT Utilizando Blockchain",
            data: "2025-03-10", horario: "10:00", local: "Sala de Videoconferência",
            banca: ["Prof. Dr. Francisco Dantas (Orientador)", "Prof. Dr. Ricardo Santos (Interno)", "Dra. Carla Moraes (UFPE)", "Dr. Marcos Souza (UFRN)"]
        }
    },
    { id: 107, nome: "Rafael Almeida Rocha", matricula: "2024100001", email: "rafael.a@aluno.ifpb.edu.br", curso: "Especialização", ingresso: 2024, orientador: "Valéria Maria", status: "Ativo", defesa: null },
    {
        id: 108, nome: "Patricia Gomes Silva", matricula: "2022200150", email: "patricia.g@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2022, orientador: "Giovanni Silva", status: "Defendido",
        defesa: {
            titulo: "Análise de Sentimentos em Redes Sociais para Prevenção de Burnout",
            data: "2024-06-15", horario: "15:00", local: "Laboratório 1",
            banca: ["Prof. Dr. Giovanni Silva (Orientador)", "Profa. Dra. Damires Yluska (Interna)", "Dr. Pedro Henrique (PsychTech)"]
        }
    },
    { id: 109, nome: "Marcos Vinicius Dias", matricula: "2023200500", email: "marcos.v@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2023, orientador: "Francisco Dantas", status: "Ativo", defesa: null },
    {
        id: 110, nome: "Juliana Martins Ferreira", matricula: "2020100999", email: "juliana.m@aluno.ifpb.edu.br", curso: "Doutorado", ingresso: 2020, orientador: "Damires Yluska", status: "Defendido",
        defesa: {
            titulo: "Modelo Preditivo para Evasão Escolar no Ensino Técnico",
            data: "2024-08-05", horario: "09:00", local: "Auditório Central",
            banca: ["Profa. Dra. Damires Yluska (Orientadora)", "Prof. Dr. Giovanni Silva (Interno)", "Dra. Elena Ferrante (MEC)", "Dr. Saulo Ramos (UFCG)"]
        }
    },
    { id: 111, nome: "Roberto Alves Souza", matricula: "2024100202", email: "roberto.a@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2024, orientador: "Valéria Maria", status: "Ativo", defesa: null },
    { id: 112, nome: "Camila Rocha Ribeiro", matricula: "2023100888", email: "camila.r@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2023, orientador: "Giovanni Silva", status: "Desligado", defesa: null },
    {
        id: 113, nome: "Anderson Silva Costa", matricula: "2022100777", email: "anderson.s@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2022, orientador: "Francisco Dantas", status: "Qualificado",
        defesa: {
            titulo: "Otimização de Consultas em Bancos de Dados NoSQL",
            data: "2024-11-20", horario: "16:00", local: "Sala 102",
            banca: ["Prof. Dr. Francisco Dantas (Orientador)", "Profa. Dra. Ana Paula Silva (Interna)", "Dr. Lucio Mauro (DB Services)"]
        }
    },
    { id: 114, nome: "Beatriz Oliveira Lima", matricula: "2024200111", email: "beatriz.o@aluno.ifpb.edu.br", curso: "Especialização", ingresso: 2024, orientador: "", status: "Ativo", defesa: null },
    { id: 115, nome: "Felipe Santos Cardoso", matricula: "2021100222", email: "felipe.s@aluno.ifpb.edu.br", curso: "Doutorado", ingresso: 2021, orientador: "Valéria Maria", status: "Ativo", defesa: null },
    { id: 116, nome: "Mariana Duarte Nunes", matricula: "2023200333", email: "mariana.d@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2023, orientador: "Giovanni Silva", status: "Trancado", defesa: null },
    { id: 117, nome: "Gustavo Henrique Melo", matricula: "2022200444", email: "gustavo.m@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2022, orientador: "Damires Yluska", status: "Ativo", defesa: null },
    { id: 118, nome: "Larissa Campos Teixeira", matricula: "2024100555", email: "larissa.c@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2024, orientador: "Francisco Dantas", status: "Ativo", defesa: null },
    {
        id: 119, nome: "Rodrigo Farias Araujo", matricula: "2020200666", email: "rodrigo.f@aluno.ifpb.edu.br", curso: "Doutorado", ingresso: 2020, orientador: "Valéria Maria", status: "Defendido",
        defesa: {
            titulo: "Deep Learning aplicado ao Diagnóstico por Imagem",
            data: "2024-01-15", horario: "14:00", local: "Auditório do HU",
            banca: ["Profa. Dra. Valéria Maria (Orientadora)", "Prof. Dr. Giovanni Silva (Interno)", "Dr. Drauzio Varella (USP)", "Dra. Nise Yamaguchi (Einstein)"]
        }
    },
    { id: 120, nome: "Amanda Cruz Figueiredo", matricula: "2023100777", email: "amanda.c@aluno.ifpb.edu.br", curso: "Especialização", ingresso: 2023, orientador: "", status: "Ativo", defesa: null },
    { id: 121, nome: "Paulo Ricardo Mendes", matricula: "2022100888", email: "paulo.r@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2022, orientador: "Giovanni Silva", status: "Ativo", defesa: null },
    { id: 122, nome: "Jessica Bianca Andrade", matricula: "2024200999", email: "jessica.b@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2024, orientador: "Damires Yluska", status: "Ativo", defesa: null },
    { id: 123, nome: "Renato Augusto Lima", matricula: "2021201000", email: "renato.a@aluno.ifpb.edu.br", curso: "Doutorado", ingresso: 2021, orientador: "Francisco Dantas", status: "Qualificado", defesa: { titulo: "Computação Quântica: Algoritmos e Aplicações", data: "2025-06-20", horario: "10:00", local: "Auditório Central", banca: ["Prof. Dr. Francisco Dantas (Orientador)"] } },
    { id: 124, nome: "Vanessa Carvalho Pinto", matricula: "2023201111", email: "vanessa.c@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2023, orientador: "Valéria Maria", status: "Ativo", defesa: null },
    { id: 125, nome: "Thiago Moraes Sales", matricula: "2022201222", email: "thiago.m@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2022, orientador: "Giovanni Silva", status: "Defendido", defesa: { titulo: "Gamificação no Ensino de Lógica de Programação", data: "2023-12-10", horario: "09:00", local: "Lab 5", banca: ["Prof. Dr. Giovanni Silva (Orientador)"] } },
    { id: 126, nome: "Natália Ribeiro Castro", matricula: "2024101333", email: "natalia.r@aluno.ifpb.edu.br", curso: "Especialização", ingresso: 2024, orientador: "", status: "Ativo", defesa: null },
    { id: 127, nome: "Leonardo Freitas Gomes", matricula: "2023101444", email: "leonardo.f@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2023, orientador: "Damires Yluska", status: "Ativo", defesa: null },
    { id: 128, nome: "Isabela Monteiro Cruz", matricula: "2021101555", email: "isabela.m@aluno.ifpb.edu.br", curso: "Doutorado", ingresso: 2021, orientador: "Francisco Dantas", status: "Trancado", defesa: null },
    { id: 129, nome: "Daniel Barbosa Lopes", matricula: "2022101666", email: "daniel.b@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2022, orientador: "Valéria Maria", status: "Qualificado", defesa: { titulo: "Redes Neurais Convolucionais para Reconhecimento Facial", data: "2024-10-05", horario: "14:00", local: "Sala 201", banca: ["Profa. Dra. Valéria Maria (Orientadora)"] } },
    { id: 130, nome: "Priscila Santana Reis", matricula: "2024201777", email: "priscila.s@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2024, orientador: "Giovanni Silva", status: "Ativo", defesa: null },
    { id: 131, nome: "Eduardo Nunes Vieira", matricula: "2023201888", email: "eduardo.n@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2023, orientador: "Damires Yluska", status: "Ativo", defesa: null },
    { id: 132, nome: "Gabriela Torres Maia", matricula: "2020201999", email: "gabriela.t@aluno.ifpb.edu.br", curso: "Doutorado", ingresso: 2020, orientador: "Francisco Dantas", status: "Defendido", defesa: { titulo: "Metodologias Ativas na Pós-Graduação em Computação", data: "2024-04-25", horario: "15:00", local: "Auditório", banca: ["Prof. Dr. Francisco Dantas (Orientador)"] } },
    { id: 133, nome: "Vitor Hugo Ramos", matricula: "2024102000", email: "vitor.h@aluno.ifpb.edu.br", curso: "Especialização", ingresso: 2024, orientador: "", status: "Ativo", defesa: null },
    { id: 134, nome: "Lorena Peixoto Silva", matricula: "2022202111", email: "lorena.p@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2022, orientador: "Valéria Maria", status: "Qualificado", defesa: { titulo: "Ética em IA: Vieses Algorítmicos", data: "2024-11-01", horario: "10:00", local: "Miniauditório", banca: ["Profa. Dra. Valéria Maria (Orientadora)"] } },
    { id: 135, nome: "Samuel Alves Rocha", matricula: "2023102222", email: "samuel.a@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2023, orientador: "Giovanni Silva", status: "Ativo", defesa: null },
    { id: 136, nome: "Bianca Costa Lima", matricula: "2021202333", email: "bianca.c@aluno.ifpb.edu.br", curso: "Doutorado", ingresso: 2021, orientador: "Damires Yluska", status: "Ativo", defesa: null },
    { id: 137, nome: "Diego Fernandes", matricula: "2024102444", email: "diego.f@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2024, orientador: "Francisco Dantas", status: "Ativo", defesa: null },
    { id: 138, nome: "Clara Mendes Araújo", matricula: "2022202555", email: "clara.m@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2022, orientador: "Valéria Maria", status: "Defendido", defesa: { titulo: "Acessibilidade Web para Deficientes Visuais", data: "2024-05-20", horario: "14:00", local: "Lab 3", banca: ["Profa. Dra. Valéria Maria (Orientadora)"] } },
    { id: 139, nome: "Fernando Oliveira", matricula: "2023202666", email: "fernando.o@aluno.ifpb.edu.br", curso: "Especialização", ingresso: 2023, orientador: "", status: "Desligado", defesa: null },
    { id: 140, nome: "Helena Santos Cruz", matricula: "2024202777", email: "helena.s@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2024, orientador: "Giovanni Silva", status: "Ativo", defesa: null }
];

for (let i = 105; i <= 134; i++) {
     mockAlunos.push({ id: i, nome: `Aluno Teste ${i}`, matricula: `2023${i}`, email: `aluno${i}@ifpb.edu.br`, curso: "Mestrado", ingresso: 2023, orientador: "Damires Yluska", status: "Ativo", defesa: null });
}

let currentPage = 1;
const ITEMS_PER_PAGE = 8;
let filteredData = [...mockAlunos];

function renderTable() {
    const tbody = document.getElementById('alunos-table-body');
    tbody.innerHTML = '';

    if (filteredData.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" class="px-6 py-8 text-center text-sgd-muted">Nenhum aluno encontrado.</td></tr>`;
        renderPagination();
        return;
    }

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedData = filteredData.slice(startIndex, endIndex);

    paginatedData.forEach(aluno => {
        const tr = document.createElement('tr');
        tr.className = "hover:bg-[#1A1A1A] transition-colors";

        // Define o status de cada aluno
        let statusClass = 'bg-gray-900 text-gray-400 border-gray-700';
        switch(aluno.status) {
            case 'Ativo': statusClass = 'bg-sky-900/30 text-sky-400 border-sky-800'; break;
            case 'Qualificado': statusClass = 'bg-sgd-gold/20 text-sgd-gold border-sgd-gold/50'; break;
            case 'Defendido': statusClass = 'bg-emerald-900/30 text-emerald-400 border-emerald-800'; break;
            case 'Trancado': case 'Desligado': statusClass = 'bg-red-900/30 text-red-400 border-red-800 opacity-70'; break;
        }

        tr.innerHTML = `
            <td class="table-cell">
                <a href="#" onclick="viewStudent(event, ${aluno.id})" class="font-medium text-white hover:text-sgd-gold hover:underline transition">
                    ${aluno.nome}
                </a>
                <div class="text-sgd-muted text-xs">${aluno.matricula}</div>
            </td>
            <td class="table-cell">
                <div>${aluno.curso}</div>
                <div class="text-sgd-muted text-xs">Ingresso: ${aluno.ingresso}</div>
            </td>
            <td class="table-cell">${aluno.orientador || '<span class="text-sgd-muted italic">—</span>'}</td>
            <td class="table-cell"><span class="px-2 py-1 text-xs font-medium rounded-full border ${statusClass}">${aluno.status}</span></td>
            <td class="table-cell text-right">
                <div class="flex items-center justify-end space-x-3">
                    <button onclick="editAluno(${aluno.id})" class="text-sgd-muted hover:text-sgd-gold transition" title="Editar"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg></button>
                    <button onclick="deleteAluno(${aluno.id}, '${aluno.nome}')" class="text-sgd-muted hover:text-red-500 transition" title="Excluir"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></button>
                </div>
            </td>`;
        tbody.appendChild(tr);
    });
    renderPagination();
}

// Funções de paginação
function renderPagination() {
    const container = document.getElementById('pagination-container');
    const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
    if (totalPages <= 1) { container.innerHTML = ''; return; }
    let buttonsHtml = `<button onclick="changePage(${currentPage - 1})" class="px-3 py-1 rounded border border-sgd-border text-sm transition ${currentPage === 1 ? 'text-sgd-muted opacity-50 cursor-not-allowed' : 'text-sgd-text hover:bg-sgd-border hover:text-sgd-gold'}" ${currentPage === 1 ? 'disabled' : ''}>Anterior</button>`;
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);
    for (let i = startPage; i <= endPage; i++) {
        buttonsHtml += `<button onclick="changePage(${i})" class="px-3 py-1 rounded border text-sm transition ${i === currentPage ? 'bg-sgd-gold text-black border-sgd-gold font-bold' : 'border-sgd-border text-sgd-text hover:bg-sgd-border hover:text-sgd-gold'}">${i}</button>`;
    }
    buttonsHtml += `<button onclick="changePage(${currentPage + 1})" class="px-3 py-1 rounded border border-sgd-border text-sm transition ${currentPage === totalPages ? 'text-sgd-muted opacity-50 cursor-not-allowed' : 'text-sgd-text hover:bg-sgd-border hover:text-sgd-gold'}" ${currentPage === totalPages ? 'disabled' : ''}>Próximo</button>`;
    container.innerHTML = `<span class="text-xs text-sgd-muted mr-4">Pág. ${currentPage} de ${totalPages} (${filteredData.length} total)</span>${buttonsHtml}`;
}
function changePage(n) { const total = Math.ceil(filteredData.length/ITEMS_PER_PAGE); if(n>=1 && n<=total){ currentPage=n; renderTable(); }}
// Fim das funções de paginação

function applyFilters() {
    const search = document.getElementById('search-input').value.toLowerCase();
    const status = document.getElementById('filter-status').value.toLowerCase();
    filteredData = mockAlunos.filter(a => (a.nome.toLowerCase().includes(search) || a.matricula.includes(search) || (a.orientador && a.orientador.toLowerCase().includes(search))) && (status === "" || a.status.toLowerCase() === status));
    currentPage = 1; renderTable();
}

// Função para visualizar detalhes do aluno
function viewStudent(e, id) {
    if (e) e.preventDefault(); 
    const aluno = mockAlunos.find(a => a.id === id);
    if (!aluno) return;

    document.getElementById('detail-nome').textContent = aluno.nome;
    document.getElementById('detail-matricula').textContent = aluno.matricula;
    document.getElementById('detail-email').textContent = aluno.email;
    document.getElementById('detail-curso').textContent = `${aluno.curso} (Ingresso: ${aluno.ingresso})`;
    document.getElementById('detail-status').textContent = aluno.status;
    document.getElementById('detail-orientador').textContent = aluno.orientador || 'Não definido';

    const defesaContainer = document.getElementById('detail-defesa-container');
    if (aluno.defesa) {
        let bancaHtml = '<ul class="list-disc list-inside text-sgd-muted">';
        aluno.defesa.banca.forEach(membro => { bancaHtml += `<li>${membro}</li>`; });
        bancaHtml += '</ul>';

        defesaContainer.innerHTML = `
            <div class="mb-4">
                <h4 class="text-sgd-gold text-sm font-semibold mb-1">Título do Trabalho</h4>
                <p class="text-white font-medium">${aluno.defesa.titulo}</p>
            </div>
            <div class="grid grid-cols-2 gap-4 mb-4">
                <div><h4 class="text-sgd-muted text-xs mb-1">Data</h4><p>${aluno.defesa.data}</p></div>
                <div><h4 class="text-sgd-muted text-xs mb-1">Horário</h4><p>${aluno.defesa.horario}</p></div>
                <div class="col-span-2"><h4 class="text-sgd-muted text-xs mb-1">Local</h4><p>${aluno.defesa.local}</p></div>
            </div>
            <div>
                <h4 class="text-sgd-gold text-sm font-semibold mb-2">Banca Examinadora</h4>
                ${bancaHtml}
            </div>
        `;
    } else {
        defesaContainer.innerHTML = `<div class="text-center py-6 text-sgd-muted bg-black/20 rounded-lg border border-dashed border-sgd-border">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto mb-2 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
            <p>Nenhuma defesa agendada ou registrada.</p>
        </div>`;
    }

    document.getElementById('detalhes-modal').classList.remove('hidden');
}
function closeDetailsModal() { document.getElementById('detalhes-modal').classList.add('hidden'); }


// Função para adicionar/editar aluno
function openAlunoModal(id = null) {
    const modal = document.getElementById('aluno-modal');
    document.getElementById('aluno-form').reset();
    
    if (id) {
        document.getElementById('modal-title').textContent = "Editar Aluno";
        const a = mockAlunos.find(x => x.id === id);
        
        if (a) {
            document.getElementById('aluno-id').value = a.id;
            document.getElementById('input-nome').value = a.nome;
            document.getElementById('input-matricula').value = a.matricula;
            document.getElementById('input-email').value = a.email;
            document.getElementById('select-curso').value = a.curso;
            document.getElementById('input-ingresso').value = a.ingresso;
            document.getElementById('select-orientador').value = a.orientador;
            document.getElementById('select-status').value = a.status;

            if (a.defesa) {
                document.getElementById('titulo').value = a.defesa.titulo || '';
                document.getElementById('data').value = a.defesa.data || '';
                document.getElementById('horario').value = a.defesa.horario || '';
                document.getElementById('local').value = a.defesa.local || '';
                document.getElementById('banca').value = a.defesa.banca.join(', ') || '';
            } else {

                document.getElementById('titulo').value = '';
                document.getElementById('data').value = '';
                document.getElementById('horario').value = '';
                document.getElementById('local').value = '';
                document.getElementById('banca').value = '';
            }
        }
    } else {
        document.getElementById('modal-title').textContent = "Novo Aluno";
        document.getElementById('aluno-id').value = '';
        
        document.getElementById('titulo').value = '';
        document.getElementById('data').value = '';
        document.getElementById('horario').value = '';
        document.getElementById('local').value = '';
        document.getElementById('banca').value = '';
    }
    
    modal.classList.remove('hidden');
}
function closeAlunoModal() { document.getElementById('aluno-modal').classList.add('hidden'); }

// Salva os aluno
function saveAluno(e) {
    e.preventDefault();
    const id = document.getElementById('aluno-id').value;

    // Objeto com os dados do formulário
    const FormData = {
        id: id ? parseInt(id) : Date.now(),
        nome: document.getElementById('input-nome').value,
        matricula: document.getElementById('input-matricula').value,
        email: document.getElementById('input-email').value,
        curso: document.getElementById('select-curso').value,
        ingresso: parseInt(document.getElementById('input-ingresso').value),
        orientador: document.getElementById('select-orientador').value,
        status: document.getElementById('select-status').value,
        defesa: null
    };

    // Adiciona a defesa se os campos estiverem preenchidos
    const titulo = document.getElementById('titulo').value;
    const data = document.getElementById('data').value;
    const horario = document.getElementById('horario').value;
    const local = document.getElementById('local').value;
    const banca = document.getElementById('banca').value.split(',').map(s => s.trim()).filter(s => s);

    // Adiciona a defesa ao objeto somente se todos os campos obrigatórios estiverem preenchidos
    if (titulo && data && horario && local && banca.length > 0) {
        FormData.defesa = {
            titulo,
            data,
            horario,
            local,
            banca
        };
    }

    if (id) {
        const idx = mockAlunos.findIndex(a => a.id === parseInt(id));
        if (idx !== -1) {
            mockAlunos[idx] = { ...mockAlunos[idx], ...FormData };
        }
    } else {
        mockAlunos.unshift(FormData);
    }

    applyFilters();
    closeAlunoModal();
}

function deleteAluno(id,nome) { if(confirm(`Remover "${nome}"?`)){ mockAlunos=mockAlunos.filter(a=>a.id!==id); applyFilters(); }}

document.addEventListener("DOMContentLoaded",()=>{
    renderTable();
    // Se clicar fora do modal, fecha ele
    document.getElementById('aluno-modal').addEventListener('click',(e)=>{if(e.target.id==='aluno-modal')closeAlunoModal();});
    document.getElementById('detalhes-modal').addEventListener('click',(e)=>{if(e.target.id==='detalhes-modal')closeDetailsModal();}); 
    // Chama a função de salvar aluno ao submeter o formulário
    document.getElementById('aluno-form').addEventListener('submit',saveAluno);
});

// As globais acessíveis no HTML
window.applyFilters=applyFilters;
window.openAlunoModal=openAlunoModal;
window.closeAlunoModal=closeAlunoModal;
window.deleteAluno=deleteAluno;
window.editAluno=openAlunoModal;
window.changePage=changePage;
window.viewStudent=viewStudent;
window.closeDetailsModal=closeDetailsModal;