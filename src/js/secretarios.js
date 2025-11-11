let mockSecretarios = [
    { id: 1, nome: "Ana Paula Ribeiro", siape: "1928374", campus: "João Pessoa", email: "ana.ribeiro@ifpb.edu.br", role: "Secretário", ativo: true },
    { id: 2, nome: "Carlos Mendes", siape: "9182736", campus: "Campina Grande", email: "carlos.mendes@ifpb.edu.br", role: "Secretário", ativo: true },
    { id: 3, nome: "Diogo Aguiar", siape: "1020304", campus: "João Pessoa", email: "diogo.aguiar@ifpb.edu.br", role: "Coordenador", ativo: true },
    { id: 4, nome: "Mariana Lima", siape: "5647382", campus: "João Pessoa", email: "mariana.lima@ifpb.edu.br", role: "Secretário", ativo: false },
    { id: 5, nome: "Ricardo Alves", siape: "7766554", campus: "Cajazeiras", email: "ricardo.alves@ifpb.edu.br", role: "Secretário", ativo: true },
    { id: 6, nome: "Beatriz Costa", siape: "3322110", campus: "Reitoria", email: "beatriz.costa@ifpb.edu.br", role: "Coordenador", ativo: true },
    { id: 7, nome: "Felipe Nogueira", siape: "9876543", campus: "Campina Grande", email: "felipe.nogueira@ifpb.edu.br", role: "Secretário", ativo: true },
    { id: 8, nome: "Luiza Fernandes", siape: "1231234", campus: "João Pessoa", email: "luiza.fernandes@ifpb.edu.br", role: "Secretário", ativo: false },
    { id: 9, nome: "Marcos Oliveira", siape: "4564567", campus: "Cajazeiras", email: "marcos.oliveira@ifpb.edu.br", role: "Coordenador", ativo: true },
    { id: 10, nome: "Júlia Pereira", siape: "7897890", campus: "João Pessoa", email: "julia.pereira@ifpb.edu.br", role: "Secretário", ativo: true },
    { id: 11, nome: "Vitor Santos", siape: "1112223", campus: "Campina Grande", email: "vitor.santos@ifpb.edu.br", role: "Secretário", ativo: true }
];

let currentPage = 1;
const ITEMS_PER_PAGE = 8;
let filteredData = [...mockSecretarios];

function renderTable() {
    const tbody = document.getElementById('secretarios-table-body');
    if (!tbody) { setTimeout(renderTable, 100); return; }
    tbody.innerHTML = '';

    if (filteredData.length === 0) {

        tbody.innerHTML = `<tr><td colspan="6" class="px-6 py-8 text-center text-sgd-muted flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mb-4 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <p class="text-lg">Nenhum usuário encontrado.</p>
        </td></tr>`;
        renderPagination();
        return;
    }

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedData = filteredData.slice(startIndex, endIndex);

    paginatedData.forEach(sec => {
        const tr = document.createElement('tr');
        tr.className = `hover:bg-[#1A1A1A] transition-colors ${!sec.ativo ? 'opacity-50 bg-black/40' : ''}`;

        const roleBadge = sec.role === 'Coordenador'
            ? `<span class="px-2 py-1 text-xs font-bold rounded-full bg-sgd-gold/20 text-sgd-gold border border-sgd-gold/50">Coordenador</span>`
            : `<span class="px-2 py-1 text-xs font-medium rounded-full bg-blue-900/30 text-blue-400 border border-blue-800">Secretário</span>`;

        const statusIcon = sec.ativo
            ? `<div class="flex justify-center" title="Ativo"><span class="flex h-3 w-3 relative"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span><span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span></span></div>`
            : `<div class="flex justify-center" title="Inativo"><span class="h-3 w-3 rounded-full bg-red-900 border border-red-700 inline-block"></span></div>`;

        tr.innerHTML = `
            <td class="table-cell">
                <a href="#" onclick="viewSecretario(event, ${sec.id})" class="font-medium text-white hover:text-sgd-gold hover:underline transition">
                    ${sec.nome}
                </a>
                <div class="text-sgd-muted text-xs truncate max-w-[200px]" title="${sec.email}">
                    ${sec.email}
                </div>
            </td>
            <td class="table-cell">${sec.siape}</td>
            <td class="table-cell">${sec.campus}</td>
            <td class="table-cell">${roleBadge}</td>
            <td class="table-cell">${statusIcon}</td>
            <td class="table-cell text-right">
                <div class="flex items-center justify-end space-x-2">
                    <button onclick="resetPassword('${sec.nome}')" class="text-sgd-muted hover:text-blue-400 p-1" title="Resetar Senha"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg></button>
                    <button onclick="openSecretarioModal(${sec.id})" class="text-sgd-muted hover:text-sgd-gold p-1" title="Editar"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg></button>
                    <button onclick="deleteSecretario(${sec.id}, '${sec.nome}')" class="text-sgd-muted hover:text-red-500 p-1" title="Revogar/Reativar Acesso"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg></button>
                </div>
            </td>`;
        tbody.appendChild(tr);
    });
    renderPagination();
}

function renderPagination() {
    const container = document.getElementById('pagination-container');
    if (!container) return;
    const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
    if (totalPages <= 1) { container.innerHTML = ''; return; }
    
    let buttonsHtml = `<button onclick="changePage(${currentPage - 1})" class="px-3 py-1 rounded border border-sgd-border text-sm transition ${currentPage === 1 ? 'text-sgd-muted opacity-50 cursor-not-allowed' : 'text-sgd-text hover:bg-sgd-border hover:text-sgd-gold'}" ${currentPage === 1 ? 'disabled' : ''}>Anterior</button>`;
    
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (startPage > 1) {
        buttonsHtml += `<button onclick="changePage(1)" class="px-3 py-1 rounded border text-sm transition border-sgd-border text-sgd-text hover:bg-sgd-border hover:text-sgd-gold">1</button>`;
        if (startPage > 2) {
            buttonsHtml += `<span class="px-3 py-1 text-sgd-muted">...</span>`;
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        buttonsHtml += `<button onclick="changePage(${i})" class="px-3 py-1 rounded border text-sm transition ${i === currentPage ? 'bg-sgd-gold text-black border-sgd-gold font-bold' : 'border-sgd-border text-sgd-text hover:bg-sgd-border hover:text-sgd-gold'}">${i}</button>`;
    }

    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            buttonsHtml += `<span class="px-3 py-1 text-sgd-muted">...</span>`;
        }
        buttonsHtml += `<button onclick="changePage(${totalPages})" class="px-3 py-1 rounded border text-sm transition border-sgd-border text-sgd-text hover:bg-sgd-border hover:text-sgd-gold">${totalPages}</button>`;
    }

    buttonsHtml += `<button onclick="changePage(${currentPage + 1})" class="px-3 py-1 rounded border border-sgd-border text-sm transition ${currentPage === totalPages ? 'text-sgd-muted opacity-50 cursor-not-allowed' : 'text-sgd-text hover:bg-sgd-border hover:text-sgd-gold'}" ${currentPage === totalPages ? 'disabled' : ''}>Próximo</button>`;
    
    container.innerHTML = `<span class="text-xs text-sgd-muted mr-4">Pág. ${currentPage} de ${totalPages} (${filteredData.length} total)</span>${buttonsHtml}`;
}

function changePage(n) { 
    const total = Math.ceil(filteredData.length/ITEMS_PER_PAGE); 
    if(n>=1 && n<=total){ 
        currentPage=n; 
        renderTable(); 
    }
}

function applyFilters() {
    const search = document.getElementById('search-input') ? document.getElementById('search-input').value.toLowerCase() : '';
    const role = document.getElementById('filter-role') ? document.getElementById('filter-role').value : '';
    filteredData = mockSecretarios.filter(sec => {
        const matchSearch = sec.nome.toLowerCase().includes(search) || sec.siape.includes(search) || sec.email.toLowerCase().includes(search);
        const matchRole = role === "" || sec.role === role;
        return matchSearch && matchRole;
    });
    currentPage = 1; 
    renderTable();
}

function viewSecretario(e, id) {
    if (e) e.preventDefault();
    const sec = mockSecretarios.find(s => s.id === id);
    if (!sec) return;
    document.getElementById('detail-nome').textContent = sec.nome;
    document.getElementById('detail-email').textContent = sec.email;
    document.getElementById('detail-siape').textContent = sec.siape;
    document.getElementById('detail-campus').textContent = sec.campus;

    document.getElementById('detail-role').innerHTML = sec.role === 'Coordenador' 
        ? `<span class="px-2 py-1 text-xs font-bold rounded-full bg-sgd-gold/20 text-sgd-gold border border-sgd-gold/50">Coordenador</span>` 
        : `<span class="px-2 py-1 text-xs font-medium rounded-full bg-blue-900/30 text-blue-400 border border-blue-800">Secretário</span>`;

    const statusBadge = sec.ativo 
        ? '<span class="px-2 py-1 text-xs font-medium rounded-full bg-green-900/30 text-green-400 border border-green-800">Conta Ativa</span>'
        : '<span class="px-2 py-1 text-xs font-medium rounded-full bg-red-900/30 text-red-400 border border-red-800">Conta Inativa</span>';
    document.getElementById('detail-status').innerHTML = statusBadge;
    
    document.getElementById('detalhes-modal').classList.remove('hidden');
}
function closeDetailsModal() { document.getElementById('detalhes-modal').classList.add('hidden'); }

function openSecretarioModal(id = null) {
    const modal = document.getElementById('secretario-modal');
    if (!modal) return;
    document.getElementById('secretario-form').reset();
    if (id) {
        document.getElementById('modal-title').textContent = "Editar Usuário";
        const sec = mockSecretarios.find(s => s.id === id);
        if (sec) {
            document.getElementById('secretario-id').value = sec.id;
            document.getElementById('input-nome').value = sec.nome;
            document.getElementById('input-siape').value = sec.siape;
            document.getElementById('select-campus').value = sec.campus;
            document.getElementById('input-email').value = sec.email;
            document.getElementById('select-role').value = sec.role;
            document.getElementById('check-ativo').checked = sec.ativo;
        }
    } else {
        document.getElementById('modal-title').textContent = "Novo Usuário";
        document.getElementById('secretario-id').value = '';
        document.getElementById('select-role').value = 'Secretário'; 
    }
    modal.classList.remove('hidden');
}
function closeSecretarioModal() { document.getElementById('secretario-modal').classList.add('hidden'); }

function saveSecretario(e) {
    e.preventDefault();
    const idStr = document.getElementById('secretario-id').value;
    const id = idStr ? parseInt(idStr) : null;
    const formData = {
        id: id || Date.now(),
        nome: document.getElementById('input-nome').value,
        siape: document.getElementById('input-siape').value,
        campus: document.getElementById('select-campus').value,
        email: document.getElementById('input-email').value,
        role: document.getElementById('select-role').value,
        ativo: document.getElementById('check-ativo').checked
    };
    if (id) { 
        const idx = mockSecretarios.findIndex(s => s.id === id); 
        if (idx !== -1) mockSecretarios[idx] = formData; 
    }
    else { mockSecretarios.unshift(formData); }
    applyFilters(); 
    closeSecretarioModal();
}

function deleteSecretario(id, nome) {
    const sec = mockSecretarios.find(s => s.id === id);
    if (!sec) return;
    const action = sec.ativo ? "revogar" : "reativar";
    const title = sec.ativo ? "Revogar Acesso?" : "Reativar Acesso?";
    if (confirm(`${title}\n\nDeseja ${action} o acesso de "${nome}"?`)) { 
        sec.ativo = !sec.ativo; 
        applyFilters(); 
    }
}

function resetPassword(nome) { 
    alert(`Um link de redefinição de senha foi enviado para o e-mail de ${nome}.`); 
}

document.addEventListener("DOMContentLoaded", () => {
    renderTable(); 
    
    const modal = document.getElementById('secretario-modal');
    const form = document.getElementById('secretario-form');
    if (modal && form) {
        modal.addEventListener('click', (e) => { 
            if (e.target.id === 'secretario-modal') closeSecretarioModal(); 
        });
        form.addEventListener('submit', saveSecretario);
    }
    
    const detailsModal = document.getElementById('detalhes-modal');
    if (detailsModal) {
        detailsModal.addEventListener('click', (e) => {
            if (e.target.id === 'detalhes-modal') closeDetailsModal();
        });
    }
});

window.applyFilters = applyFilters;
window.openSecretarioModal = openSecretarioModal;
window.closeSecretarioModal = closeSecretarioModal;
window.deleteSecretario = deleteSecretario;
window.resetPassword = resetPassword;
window.changePage = changePage;
window.viewSecretario = viewSecretario;
window.closeDetailsModal = closeDetailsModal;
window.saveSecretario = saveSecretario;