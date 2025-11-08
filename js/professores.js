let mockProfessores = [
    { id: 1, nome: "Damires Yluska", email: "damires@ifpb.edu.br", lattes: "http://lattes.cnpq.br/ex1", instituicao: "IFPB", titulacao: "Doutorado", tipo: "Permanente", areas: "Redes de Computadores, Segurança da Informação", ativo: true },
    { id: 2, nome: "Francisco Dantas", email: "dantas@ifpb.edu.br", lattes: "", instituicao: "IFPB", titulacao: "Mestrado", tipo: "Colaborador", areas: "Engenharia de Software, Banco de Dados", ativo: true },
    { id: 3, nome: "Valéria Maria", email: "valeria.maria@ufpb.br", lattes: "http://lattes.cnpq.br/ex2", instituicao: "UFPB", titulacao: "Doutorado", tipo: "Visitante", areas: "Inteligência Artificial, Data Science", ativo: false },
    { id: 4, nome: "Ana Paula Silva", email: "ana.paula@ifpb.edu.br", lattes: "http://lattes.cnpq.br/ex4", instituicao: "IFPB", titulacao: "Doutorado", tipo: "Permanente", areas: "Banco de Dados, Big Data", ativo: true },
    { id: 5, nome: "Carlos Eduardo", email: "carlos.edu@ifpb.edu.br", lattes: "http://lattes.cnpq.br/ex5", instituicao: "IFPB", titulacao: "Mestrado", tipo: "Colaborador", areas: "Desenvolvimento Web, Front-end", ativo: true },
    { id: 6, nome: "Fernanda Oliveira", email: "fernanda.o@ufpb.edu.br", lattes: "http://lattes.cnpq.br/ex6", instituicao: "UFPB", titulacao: "Doutorado", tipo: "Visitante", areas: "Machine Learning, Visão Computacional", ativo: true },
    { id: 7, nome: "Ricardo Santos", email: "ricardo.s@ifpb.edu.br", lattes: "http://lattes.cnpq.br/ex7", instituicao: "IFPB", titulacao: "Doutorado", tipo: "Permanente", areas: "Redes sem Fio, IoT", ativo: true },
    { id: 8, nome: "Juliana Costa", email: "juliana.c@ifpb.edu.br", lattes: "", instituicao: "IFPB", titulacao: "Mestrado", tipo: "Colaborador", areas: "Engenharia de Requisitos, Qualidade de Software", ativo: false },
    { id: 9, nome: "Marcos Vinicius", email: "marcos.v@uepb.edu.br", lattes: "http://lattes.cnpq.br/ex9", instituicao: "UEPB", titulacao: "Doutorado", tipo: "Visitante", areas: "Processamento de Linguagem Natural", ativo: true },
    { id: 10, nome: "Patrícia Lima", email: "patricia.l@ifpb.edu.br", lattes: "http://lattes.cnpq.br/ex10", instituicao: "IFPB", titulacao: "Doutorado", tipo: "Permanente", areas: "Criptografia, Segurança de Redes", ativo: true },
    { id: 11, nome: "Gustavo Henrique", email: "gustavo.h@ifpb.edu.br", lattes: "http://lattes.cnpq.br/ex11", instituicao: "IFPB", titulacao: "Mestrado", tipo: "Colaborador", areas: "Desenvolvimento Mobile, Android", ativo: true },
    { id: 12, nome: "Larissa Mendes", email: "larissa.m@ufcg.edu.br", lattes: "http://lattes.cnpq.br/ex12", instituicao: "UFCG", titulacao: "Doutorado", tipo: "Visitante", areas: "Ciência de Dados, Estatística Aplicada", ativo: true },
    { id: 13, nome: "Felipe Rocha", email: "felipe.r@ifpb.edu.br", lattes: "http://lattes.cnpq.br/ex13", instituicao: "IFPB", titulacao: "Doutorado", tipo: "Permanente", areas: "Sistemas Distribuídos, Computação em Nuvem", ativo: true },
    { id: 14, nome: "Camila Ferreira", email: "camila.f@ifpb.edu.br", lattes: "", instituicao: "IFPB", titulacao: "Mestrado", tipo: "Colaborador", areas: "Interface Humano-Computador (IHC), UX Design", ativo: false },
    { id: 15, nome: "Rodrigo Almeida", email: "rodrigo.a@unipe.edu.br", lattes: "http://lattes.cnpq.br/ex15", instituicao: "UNIPÊ", titulacao: "Doutorado", tipo: "Visitante", areas: "Jogos Digitais, Realidade Virtual", ativo: true },
    { id: 16, nome: "Beatriz Sousa", email: "beatriz.s@ifpb.edu.br", lattes: "http://lattes.cnpq.br/ex16", instituicao: "IFPB", titulacao: "Doutorado", tipo: "Permanente", areas: "Engenharia de Software, Métodos Ágeis", ativo: true },
    { id: 17, nome: "Thiago Silva", email: "thiago.s@ifpb.edu.br", lattes: "http://lattes.cnpq.br/ex17", instituicao: "IFPB", titulacao: "Mestrado", tipo: "Colaborador", areas: "Redes de Computadores, Administração de Sistemas", ativo: true },
    { id: 18, nome: "Mariana Costa", email: "mariana.c@ufpb.edu.br", lattes: "http://lattes.cnpq.br/ex18", instituicao: "UFPB", titulacao: "Doutorado", tipo: "Visitante", areas: "Inteligência Artificial, Redes Neurais", ativo: false },
    { id: 19, nome: "João Pedro", email: "joao.p@ifpb.edu.br", lattes: "http://lattes.cnpq.br/ex19", instituicao: "IFPB", titulacao: "Doutorado", tipo: "Permanente", areas: "Segurança da Informação, Forense Digital", ativo: true },
    { id: 20, nome: "Isabela Santos", email: "isabela.s@ifpb.edu.br", lattes: "", instituicao: "IFPB", titulacao: "Mestrado", tipo: "Colaborador", areas: "Desenvolvimento Web, Full-stack", ativo: true },
    { id: 21, nome: "Lucas Oliveira", email: "lucas.o@uepb.edu.br", lattes: "http://lattes.cnpq.br/ex21", instituicao: "UEPB", titulacao: "Doutorado", tipo: "Visitante", areas: "Ciência de Dados, Visualização de Dados", ativo: true },
    { id: 22, nome: "Amanda Lima", email: "amanda.l@ifpb.edu.br", lattes: "http://lattes.cnpq.br/ex22", instituicao: "IFPB", titulacao: "Doutorado", tipo: "Permanente", areas: "Banco de Dados, NoSQL", ativo: true },
    { id: 23, nome: "Rafael Souza", email: "rafael.s@ifpb.edu.br", lattes: "http://lattes.cnpq.br/ex23", instituicao: "IFPB", titulacao: "Mestrado", tipo: "Colaborador", areas: "Engenharia de Software, Testes Automatizados", ativo: false },
    { id: 24, nome: "Gabriela Rocha", email: "gabriela.r@ufcg.edu.br", lattes: "http://lattes.cnpq.br/ex24", instituicao: "UFCG", titulacao: "Doutorado", tipo: "Visitante", areas: "Sistemas Distribuídos, Blockchain", ativo: true },
    { id: 25, nome: "Daniel Ferreira", email: "daniel.f@ifpb.edu.br", lattes: "http://lattes.cnpq.br/ex25", instituicao: "IFPB", titulacao: "Doutorado", tipo: "Permanente", areas: "Redes de Computadores, SDN", ativo: true },
    { id: 26, nome: "Sofia Almeida", email: "sofia.a@ifpb.edu.br", lattes: "", instituicao: "IFPB", titulacao: "Mestrado", tipo: "Colaborador", areas: "IHC, Acessibilidade Digital", ativo: true },
    { id: 27, nome: "Bruno Costa", email: "bruno.c@unipe.edu.br", lattes: "http://lattes.cnpq.br/ex27", instituicao: "UNIPÊ", titulacao: "Doutorado", tipo: "Visitante", areas: "Jogos Digitais, Gamificação", ativo: false },
    { id: 28, nome: "Laura Santos", email: "laura.s@ifpb.edu.br", lattes: "http://lattes.cnpq.br/ex28", instituicao: "IFPB", titulacao: "Doutorado", tipo: "Permanente", areas: "Inteligência Artificial, Sistemas Especialistas", ativo: true },
    { id: 29, nome: "André Silva", email: "andre.s@ifpb.edu.br", lattes: "http://lattes.cnpq.br/ex29", instituicao: "IFPB", titulacao: "Mestrado", tipo: "Colaborador", areas: "Desenvolvimento Mobile, iOS", ativo: true },
    { id: 30, nome: "Clara Oliveira", email: "clara.o@ufpb.edu.br", lattes: "http://lattes.cnpq.br/ex30", instituicao: "UFPB", titulacao: "Doutorado", tipo: "Visitante", areas: "Segurança da Informação, Criptografia Aplicada", ativo: true },
    { id: 31, nome: "Eduardo Lima", email: "eduardo.l@ifpb.edu.br", lattes: "http://lattes.cnpq.br/ex31", instituicao: "IFPB", titulacao: "Doutorado", tipo: "Permanente", areas: "Ciência de Dados, Mineração de Dados", ativo: true },
    { id: 32, nome: "Vitória Souza", email: "vitoria.s@ifpb.edu.br", lattes: "", instituicao: "IFPB", titulacao: "Mestrado", tipo: "Colaborador", areas: "Engenharia de Software, Arquitetura de Software", ativo: false },
    { id: 33, nome: "Guilherme Rocha", email: "guilherme.r@uepb.edu.br", lattes: "http://lattes.cnpq.br/ex33", instituicao: "UEPB", titulacao: "Doutorado", tipo: "Visitante", areas: "Redes de Computadores, 5G", ativo: true },
    { id: 34, nome: "Helena Martins", email: "helena.m@ifpb.edu.br", lattes: "http://lattes.cnpq.br/ex34", instituicao: "IFPB", titulacao: "Doutorado", tipo: "Permanente", areas: "Informática na Educação, Pensamento Computacional", ativo: true },
    { id: 35, nome: "Samuel Alves", email: "samuel.a@ifpb.edu.br", lattes: "http://lattes.cnpq.br/ex35", instituicao: "IFPB", titulacao: "Mestrado", tipo: "Colaborador", areas: "DevOps, Infraestrutura Ágil", ativo: true },
    { id: 36, nome: "Lorena Dias", email: "lorena.d@ufcg.edu.br", lattes: "http://lattes.cnpq.br/ex36", instituicao: "UFCG", titulacao: "Doutorado", tipo: "Visitante", areas: "Engenharia de Software, Linhas de Produto", ativo: true },
    { id: 37, nome: "Vitor Hugo", email: "vitor.h@ifpb.edu.br", lattes: "http://lattes.cnpq.br/ex37", instituicao: "IFPB", titulacao: "Doutorado", tipo: "Permanente", areas: "Visão Computacional, Processamento de Imagens", ativo: true },
    { id: 38, nome: "Manuela Ribeiro", email: "manuela.r@ifpb.edu.br", lattes: "", instituicao: "IFPB", titulacao: "Mestrado", tipo: "Colaborador", areas: "Gestão de Projetos de TI, Scrum", ativo: true },
    { id: 39, nome: "Davi Lucca", email: "davi.l@ufpb.edu.br", lattes: "http://lattes.cnpq.br/ex39", instituicao: "UFPB", titulacao: "Doutorado", tipo: "Visitante", areas: "Bioinformática, Computação Evolutiva", ativo: false },
    { id: 40, nome: "Sophia Nunes", email: "sophia.n@ifpb.edu.br", lattes: "http://lattes.cnpq.br/ex40", instituicao: "IFPB", titulacao: "Doutorado", tipo: "Permanente", areas: "Interação Humano-Computador, Realidade Aumentada", ativo: true }
];
for (let i = 11; i <= 33; i++) {
    mockProfessores.push({
        id: i,
        nome: `Professor Teste ${i}`,
        email: `prof${i}@exemplo.com`,
        lattes: i % 2 === 0 ? `http://lattes.cnpq.br/${i}` : "",
        instituicao: i % 3 === 0 ? "UFPB" : "IFPB",
        titulacao: i % 4 === 0 ? "Mestrado" : "Doutorado",
        tipo: i % 3 === 0 ? "Visitante" : (i % 2 === 0 ? "Colaborador" : "Permanente"),
        areas: "Área Genérica A, Área Genérica B",
        ativo: i % 5 !== 0
    });
}

let currentPage = 1;
const ITEMS_PER_PAGE = 8;
let filteredData = [...mockProfessores];

function renderTable() {
    const tbody = document.getElementById('professores-table-body');
    tbody.innerHTML = '';

    if (filteredData.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="px-6 py-8 text-center text-sgd-muted flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mb-4 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <p class="text-lg">Nenhum professor encontrado.</p>
        </td></tr>`;
        renderPagination();
        return;
    }

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedData = filteredData.slice(startIndex, endIndex);

    paginatedData.forEach(prof => {
        const tr = document.createElement('tr');
        tr.className = `hover:bg-[#1A1A1A] transition-colors ${!prof.ativo ? 'opacity-50 bg-black/40' : ''}`;

        let tipoBadgeClass = prof.tipo === 'Permanente' ? 'bg-sgd-gold/20 text-sgd-gold border-sgd-gold/50' :
                             prof.tipo === 'Colaborador' ? 'bg-blue-900/30 text-blue-400 border-blue-800' :
                             'bg-purple-900/30 text-purple-400 border-purple-800';

        const statusIcon = prof.ativo
            ? `<div class="flex justify-center" title="Ativo"><span class="flex h-3 w-3 relative"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span><span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span></span></div>`
            : `<div class="flex justify-center" title="Inativo"><span class="h-3 w-3 rounded-full bg-red-900 border border-red-700 inline-block"></span></div>`;

        const lattesLink = prof.lattes
            ? `<a href="${prof.lattes}" target="_blank" class="flex justify-center text-sgd-muted hover:text-sgd-gold transition" title="Ver Lattes"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg></a>`
            : `<span class="flex justify-center text-sgd-border opacity-30 cursor-not-allowed"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg></span>`;

        tr.innerHTML = `
            <td class="table-cell">
                <a href="#" onclick="viewProfessor(event, ${prof.id})" class="font-medium text-white hover:text-sgd-gold hover:underline transition">
                    ${prof.nome}
                </a>
                <div class="text-sgd-muted text-xs truncate max-w-[200px]" title="${prof.areas || ''}">
                    ${prof.areas || '—'}
                </div>
            </td>
            <td class="table-cell">${prof.instituicao}</td>
            <td class="table-cell">${prof.titulacao}</td>
            <td class="table-cell">${lattesLink}</td>
            <td class="table-cell"><span class="px-2 py-1 text-xs font-medium rounded-full border ${tipoBadgeClass}">${prof.tipo}</span></td>
            <td class="table-cell">${statusIcon}</td>
            <td class="table-cell text-right">
                <div class="flex items-center justify-end space-x-3">
                    <button onclick="editProfessor(${prof.id})" class="text-sgd-muted hover:text-sgd-gold transition"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg></button>
                    <button onclick="deleteProfessor(${prof.id}, '${prof.nome}')" class="text-sgd-muted hover:text-red-500 transition"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></button>
                </div>
            </td>`;
        tbody.appendChild(tr);
    });
    renderPagination();
}

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

function applyFilters() {
    const search = document.getElementById('search-input').value.toLowerCase();
    const tipo = document.getElementById('filter-tipo').value.toLowerCase();
    filteredData = mockProfessores.filter(p => (p.nome.toLowerCase().includes(search) || p.email.toLowerCase().includes(search) || (p.areas && p.areas.toLowerCase().includes(search))) && (tipo === "" || p.tipo.toLowerCase() === tipo));
    currentPage = 1; renderTable();
}

function viewProfessor(e, id) {
    if (e) e.preventDefault();
    const prof = mockProfessores.find(p => p.id === id);
    if (!prof) return;

    document.getElementById('detail-nome').textContent = prof.nome;
    document.getElementById('detail-titulacao').textContent = prof.titulacao;
    document.getElementById('detail-email').textContent = prof.email;
    document.getElementById('detail-instituicao').textContent = prof.instituicao;

    const lattesEl = document.getElementById('detail-lattes-link');
    if (prof.lattes) {
        lattesEl.href = prof.lattes;
        lattesEl.classList.remove('hidden');
    } else {
        lattesEl.classList.add('hidden');
    }

    let tipoBadgeClass = prof.tipo === 'Permanente' ? 'bg-sgd-gold/20 text-sgd-gold border-sgd-gold/50' : (prof.tipo === 'Colaborador' ? 'bg-blue-900/30 text-blue-400 border-blue-800' : 'bg-purple-900/30 text-purple-400 border-purple-800');
    document.getElementById('detail-categoria-badge').innerHTML = `<span class="px-2 py-1 text-xs font-medium rounded-full border ${tipoBadgeClass}">${prof.tipo}</span>`;
    
    const statusBadge = prof.ativo 
        ? '<span class="px-2 py-1 text-xs font-medium rounded-full bg-green-900/30 text-green-400 border border-green-800">Ativo</span>'
        : '<span class="px-2 py-1 text-xs font-medium rounded-full bg-red-900/30 text-red-400 border border-red-800">Inativo</span>';
    document.getElementById('detail-status-badge').innerHTML = statusBadge;

    const areasContainer = document.getElementById('detail-areas-container');
    areasContainer.innerHTML = '';
    if (prof.areas) {
        prof.areas.split(',').forEach(area => {
            const tag = document.createElement('span');
            tag.className = 'px-3 py-1 bg-[#333333] text-sgd-text text-sm rounded-full border border-sgd-border';
            tag.textContent = area.trim();
            areasContainer.appendChild(tag);
        });
    } else {
        areasContainer.innerHTML = '<span class="text-sgd-muted italic">Nenhuma área registrada.</span>';
    }

    document.getElementById('detalhes-modal').classList.remove('hidden');
}
function closeDetailsModal() { document.getElementById('detalhes-modal').classList.add('hidden'); }

function toggleInstituicao(tipo) {
    const inputInst = document.getElementById('input-instituicao');
    if (tipo === 'Permanente') { inputInst.value = 'IFPB'; inputInst.setAttribute('readonly', true); inputInst.classList.add('opacity-50', 'cursor-not-allowed'); }
    else { if (inputInst.value === 'IFPB') inputInst.value = ''; inputInst.removeAttribute('readonly'); inputInst.classList.remove('opacity-50', 'cursor-not-allowed'); }
}
function openProfessorModal(id=null) {
    const modal = document.getElementById('professor-modal'); document.getElementById('professor-form').reset();
    if(id){
        document.getElementById('modal-title').textContent="Editar Professor";
        const p=mockProfessores.find(x=>x.id===id);
        if(p){
            document.getElementById('professor-id').value=p.id; document.getElementById('input-nome').value=p.nome; document.getElementById('input-email').value=p.email;
            document.getElementById('input-lattes').value=p.lattes; document.getElementById('select-tipo').value=p.tipo; document.getElementById('input-instituicao').value=p.instituicao;
            document.getElementById('select-titulacao').value=p.titulacao; document.getElementById('input-areas').value=p.areas||''; document.getElementById('check-ativo').checked=p.ativo;
            toggleInstituicao(p.tipo);
        }
    }else{ document.getElementById('modal-title').textContent="Novo Professor"; document.getElementById('professor-id').value=''; toggleInstituicao('Permanente'); }
    modal.classList.remove('hidden');
}
function closeProfessorModal() { document.getElementById('professor-modal').classList.add('hidden'); }
function saveProfessor(e) {
    e.preventDefault(); const id=document.getElementById('professor-id').value;
    const formData={ id:id?parseInt(id):Date.now(), nome:document.getElementById('input-nome').value, email:document.getElementById('input-email').value, lattes:document.getElementById('input-lattes').value, tipo:document.getElementById('select-tipo').value, instituicao:document.getElementById('input-instituicao').value, titulacao:document.getElementById('select-titulacao').value, areas:document.getElementById('input-areas').value, ativo:document.getElementById('check-ativo').checked };
    if(id){ const idx=mockProfessores.findIndex(p=>p.id===parseInt(id)); if(idx!==-1) mockProfessores[idx]=formData; }
    else{ mockProfessores.unshift(formData); }
    closeProfessorModal(); applyFilters();
}
function deleteProfessor(id,nome) { if(confirm(`Remover "${nome}"?`)){ mockProfessores=mockProfessores.filter(p=>p.id!==id); applyFilters(); }}

document.addEventListener("DOMContentLoaded",()=>{
    renderTable();
    document.getElementById('professor-modal').addEventListener('click',(e)=>{if(e.target.id==='professor-modal')closeProfessorModal();});
    document.getElementById('detalhes-modal').addEventListener('click',(e)=>{if(e.target.id==='detalhes-modal')closeDetailsModal();});
    document.getElementById('professor-form').addEventListener('submit',saveProfessor);
});

window.applyFilters=applyFilters; window.openProfessorModal=openProfessorModal; window.closeProfessorModal=closeProfessorModal;
window.toggleInstituicao=toggleInstituicao; window.deleteProfessor=deleteProfessor; window.editProfessor=openProfessorModal;
window.changePage=changePage; window.viewProfessor=viewProfessor; window.closeDetailsModal=closeDetailsModal;