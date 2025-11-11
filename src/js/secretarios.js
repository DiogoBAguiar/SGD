// Este código deve ser carregado como <script type="module">

let mockSecretarios = [
    { id: 1, nome: "Ana Paula Ribeiro", siape: "1928374", campus: "João Pessoa", email: "ana.ribeiro@ifpb.edu.br", role: "Secretário", ativo: true },
    { id: 2, nome: "Carlos Mendes", siape: "9182736", campus: "Campina Grande", email: "carlos.mendes@ifpb.edu.br", role: "Secretário", ativo: true },
    { id: 3, nome: "Diogo Aguiar", siape: "1020304", campus: "João Pessoa", email: "diogo.aguiar@ifpb.edu.br", role: "Coordenador", ativo: true },
    { id: 4, nome: "Mariana Lima", siape: "5647382", campus: "João Pessoa", email: "mariana.lima@ifpb.edu.br", role: "Secretário", ativo: false }
];

let currentPage = 1;
const ITEMS_PER_PAGE = 8;
let filteredData = [...mockSecretarios];

window.renderTable = function() {
    const tbody = document.getElementById('secretarios-table-body');
    if (!tbody) { setTimeout(window.renderTable, 100); return; }
    tbody.innerHTML = '';

    if (filteredData.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="px-6 py-8 text-center text-sgd-muted">Nenhum usuário encontrado.</td></tr>`;
        window.renderPagination(); return;
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
            ? `<div class="flex justify-center"><span class="h-3 w-3 rounded-full bg-green-500" title="Ativo"></span></div>`
            : `<div class="flex justify-center"><span class="h-3 w-3 rounded-full bg-red-500" title="Inativo"></span></div>`;

        tr.innerHTML = `
            <td class="table-cell">
                <a href="#" onclick="viewSecretario(event, ${sec.id})" class="font-medium text-white hover:text-sgd-gold hover:underline transition">${sec.nome}</a>
            </td>
            <td class="table-cell">${sec.siape}</td>
            <td class="table-cell">${sec.campus}</td>
            <td class="table-cell">${roleBadge}</td>
            <td class="table-cell">${statusIcon}</td>
            <td class="table-cell text-right">
                <div class="flex items-center justify-end space-x-2">
                    <button onclick="resetPassword('${sec.nome}')" class="text-sgd-muted hover:text-blue-400 p-1" title="Resetar Senha"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg></button>
                    <button onclick="openSecretarioModal(${sec.id})" class="text-sgd-muted hover:text-sgd-gold p-1" title="Editar"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002 2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg></button>
                    <button onclick="deleteSecretario(${sec.id}, '${sec.nome}')" class="text-sgd-muted hover:text-red-500 p-1" title="Revogar Acesso"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg></button>
                </div>
            </td>`;
        tbody.appendChild(tr);
    });
    window.renderPagination();
};

window.renderPagination = function() {
    const container = document.getElementById('pagination-container');
    if (!container) return;
    const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
    if (totalPages <= 1) { container.innerHTML = ''; return; }
    let buttons = `<button onclick="changePage(${currentPage - 1})" class="px-3 py-1 rounded border border-sgd-border text-sm transition ${currentPage === 1 ? 'text-sgd-muted opacity-50 cursor-not-allowed' : 'text-sgd-text hover:bg-sgd-border hover:text-sgd-gold'}" ${currentPage === 1 ? 'disabled' : ''}>Anterior</button>`;
    for (let i = 1; i <= totalPages; i++) { buttons += `<button onclick="changePage(${i})" class="px-3 py-1 rounded border text-sm transition ${i === currentPage ? 'bg-sgd-gold text-black border-sgd-gold font-bold' : 'border-sgd-border text-sgd-text hover:bg-sgd-border hover:text-sgd-gold'}">${i}</button>`; }
    buttons += `<button onclick="changePage(${currentPage + 1})" class="px-3 py-1 rounded border border-sgd-border text-sm transition ${currentPage === totalPages ? 'text-sgd-muted opacity-50 cursor-not-allowed' : 'text-sgd-text hover:bg-sgd-border hover:text-sgd-gold'}" ${currentPage === totalPages ? 'disabled' : ''}>Próximo</button>`;
    container.innerHTML = `<span class="text-xs text-sgd-muted mr-4">Pág. ${currentPage} de ${totalPages}</span>${buttons}`;
};
window.changePage = function(n) { const t = Math.ceil(filteredData.length/ITEMS_PER_PAGE); if(n>=1 && n<=t){ currentPage=n; window.renderTable(); }};

window.applyFilters = function() {
    const search = document.getElementById('search-input') ? document.getElementById('search-input').value.toLowerCase() : '';
    const role = document.getElementById('filter-role') ? document.getElementById('filter-role').value : '';
    filteredData = mockSecretarios.filter(sec => {
        const matchSearch = sec.nome.toLowerCase().includes(search) || sec.siape.includes(search);
        const matchRole = role === "" || sec.role === role;
        return matchSearch && matchRole;
    });
    currentPage = 1; window.renderTable();
};

window.viewSecretario = function(e, id) {
    if (e) e.preventDefault();
    const sec = mockSecretarios.find(s => s.id === id);
    if (!sec) return;
    document.getElementById('detail-nome').textContent = sec.nome;
    document.getElementById('detail-email').textContent = sec.email;
    document.getElementById('detail-siape').textContent = sec.siape;
    document.getElementById('detail-campus').textContent = sec.campus;
    document.getElementById('detail-role').innerHTML = sec.role === 'Coordenador' ? `<span class="px-2 py-1 text-xs font-bold rounded-full bg-sgd-gold/20 text-sgd-gold border border-sgd-gold/50">Coordenador</span>` : `<span class="px-2 py-1 text-xs font-medium rounded-full bg-blue-900/30 text-blue-400 border border-blue-800">Secretário</span>`;
    document.getElementById('detail-status').innerHTML = sec.ativo ? `<span class="text-green-400 font-medium flex items-center"><span class="h-2 w-2 rounded-full bg-green-500 mr-2"></span>Conta Ativa</span>` : `<span class="text-red-400 font-medium flex items-center"><span class="h-2 w-2 rounded-full bg-red-500 mr-2"></span>Conta Inativa</span>`;
    document.getElementById('detalhes-modal').classList.remove('hidden');
};
window.closeDetailsModal = function() { document.getElementById('detalhes-modal').classList.add('hidden'); };

window.openSecretarioModal = function(id = null) {
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
};
window.closeSecretarioModal = function() { document.getElementById('secretario-modal').classList.add('hidden'); };
window.saveSecretario = function(e) {
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
    if (id) { const idx = mockSecretarios.findIndex(s => s.id === id); if (idx !== -1) mockSecretarios[idx] = formData; }
    else { mockSecretarios.unshift(formData); }
    window.applyFilters(); window.closeSecretarioModal();
};
window.deleteSecretario = function(id, nome) {
    const sec = mockSecretarios.find(s => s.id === id);
    const action = sec.ativo ? "revogar" : "reativar";
    if (confirm(`Deseja ${action} o acesso de "${nome}"?`)) { sec.ativo = !sec.ativo; window.applyFilters(); }
};
window.resetPassword = function(nome) { alert(`Link de redefinição enviado para ${nome}.`); };

function init() {
    window.renderTable();
    const modal = document.getElementById('secretario-modal');
    const form = document.getElementById('secretario-form');
    if (modal && form) {
        modal.addEventListener('click', (e) => { if (e.target.id === 'secretario-modal') window.closeSecretarioModal(); });
        form.addEventListener('submit', window.saveSecretario);
    } else { setTimeout(init, 300); }
}

if (document.readyState === 'loading') { 
    document.addEventListener('DOMContentLoaded', init); 
} else { 
    init(); 
}