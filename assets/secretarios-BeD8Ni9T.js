import{listaSecretarios as d}from"./database-DD0UnsdB.js";import{fecharModal as g,abrirModal as x,configurarListenersModal as b,renderizarPaginacao as I}from"./funcoesGerais-DYcR_P5N.js";let c=1;const s=8;let r=[...d];function p(){const n=document.getElementById("secretarios-table-body"),o=document.getElementById("secretarios-mobile-container");if(!n){console.warn("Elemento 'secretarios-table-body' não encontrado.");return}if(n.innerHTML="",o&&(o.innerHTML=""),r.length===0){const t='<div class="px-6 py-8 text-center text-sgd-muted">Nenhum usuário encontrado.</div>';n.innerHTML=`<tr><td colspan="6" class="px-6 py-8 text-center text-sgd-muted flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mb-4 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <p class="text-lg">Nenhum usuário encontrado.</p>
        </td></tr>`,o&&(o.innerHTML=t),f();return}const e=(c-1)*s,a=e+s;r.slice(e,a).forEach(t=>{const v=t.role==="Coordenador"?'<span class="px-2 py-1 text-xs font-bold rounded-full bg-sgd-gold/20 text-sgd-gold border border-sgd-gold/50">Coordenador</span>':'<span class="px-2 py-1 text-xs font-medium rounded-full bg-blue-900/30 text-blue-400 border border-blue-800">Secretário</span>',y=t.ativo?'<div class="flex justify-center sm:justify-start" title="Ativo"><span class="flex h-3 w-3 relative"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span><span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span></span></div>':'<div class="flex justify-center sm:justify-start" title="Inativo"><span class="h-3 w-3 rounded-full bg-red-900 border border-red-700 inline-block"></span></div>',E=t.ativo?'<span class="w-2 h-2 rounded-full bg-green-500 mr-2"></span> Ativo':'<span class="w-2 h-2 rounded-full bg-red-500 mr-2"></span> Inativo',u=document.createElement("tr");if(u.className=`hover:bg-[#1A1A1A] transition-colors ${t.ativo?"":"opacity-50 bg-black/40"}`,u.innerHTML=`
            <td class="table-cell">
                <a href="#" onclick="verSecretario(event, ${t.id})" class="font-medium text-white hover:text-sgd-gold hover:underline transition">
                    ${t.nome}
                </a>
                <div class="text-sgd-muted text-xs truncate max-w-[200px]" title="${t.email}">
                    ${t.email}
                </div>
            </td>
            <td class="table-cell">${t.siape}</td>
            <td class="table-cell">${t.campus}</td>
            <td class="table-cell">${v}</td>
            <td class="table-cell">${y}</td>
            <td class="table-cell text-right">
                <div class="flex items-center justify-end space-x-2">
                    <button onclick="resetarSenha('${t.nome}')" class="text-sgd-muted hover:text-blue-400 p-1" title="Resetar Senha"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg></button>
                    <button onclick="abrirModalSecretario(${t.id})" class="text-sgd-muted hover:text-sgd-gold p-1" title="Editar"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg></button>
                    <button onclick="deletarSecretario(${t.id}, '${t.nome}')" class="text-sgd-muted hover:text-red-500 p-1" title="Revogar/Reativar Acesso"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg></button>
                </div>
            </td>`,n.appendChild(u),o){const m=document.createElement("div");m.className="mobile-card",m.innerHTML=`
                <div class="flex justify-between items-start mb-3">
                    <div>
                        <h3 class="text-lg font-semibold text-white" onclick="verSecretario(event, ${t.id})">${t.nome}</h3>
                        <p class="text-sm text-sgd-muted">${t.siape} | ${t.campus}</p>
                    </div>
                    ${v}
                </div>
                
                <div class="grid grid-cols-2 gap-2 mb-3">
                    <div>
                        <p class="mobile-label">E-mail</p>
                        <p class="mobile-value truncate" title="${t.email}">${t.email}</p>
                    </div>
                    <div>
                        <p class="mobile-label">Status</p>
                        <p class="mobile-value flex items-center">
                           ${E}
                        </p>
                    </div>
                </div>

                <div class="flex justify-end gap-3 border-t border-sgd-border pt-3">
                    <button onclick="resetarSenha('${t.nome}')" class="text-sm text-blue-400 border border-blue-900/50 px-3 py-1 rounded hover:bg-blue-900/20">Senha</button>
                    <button onclick="abrirModalSecretario(${t.id})" class="text-sm text-sgd-gold border border-sgd-gold px-3 py-1 rounded hover:bg-sgd-gold hover:text-black transition">Editar</button>
                    <button onclick="deletarSecretario(${t.id}, '${t.nome}')" class="text-sm text-red-500 border border-red-900/50 px-3 py-1 rounded hover:bg-red-900/20">
                        ${t.ativo?"Inativar":"Reativar"}
                    </button>
                </div>
            `,o.appendChild(m)}}),f()}function f(){I({idContainer:"pagination-container",paginaAtual:c,totalItens:r.length,itensPorPagina:s,nomeFuncaoMudarPagina:"mudarPagina"})}function B(n){const o=Math.ceil(r.length/s);n>=1&&n<=o&&(c=n,p())}function i(){const n=document.getElementById("search-input")?document.getElementById("search-input").value.toLowerCase():"",o=document.getElementById("filter-role")?document.getElementById("filter-role").value:"";r=d.filter(e=>{const a=e.nome.toLowerCase().includes(n)||e.siape.includes(n)||e.email.toLowerCase().includes(n),l=o===""||e.role===o;return a&&l}),c=1,p()}function M(n,o){n&&n.preventDefault();const e=d.find(l=>l.id===o);if(!e)return;document.getElementById("detail-nome").textContent=e.nome,document.getElementById("detail-email").textContent=e.email,document.getElementById("detail-siape").textContent=e.siape,document.getElementById("detail-campus").textContent=e.campus,document.getElementById("detail-role").innerHTML=e.role==="Coordenador"?'<span class="px-2 py-1 text-xs font-bold rounded-full bg-sgd-gold/20 text-sgd-gold border border-sgd-gold/50">Coordenador</span>':'<span class="px-2 py-1 text-xs font-medium rounded-full bg-blue-900/30 text-blue-400 border border-blue-800">Secretário</span>';const a=e.ativo?'<span class="px-2 py-1 text-xs font-medium rounded-full bg-green-900/30 text-green-400 border border-green-800">Conta Ativa</span>':'<span class="px-2 py-1 text-xs font-medium rounded-full bg-red-900/30 text-red-400 border border-red-800">Conta Inativa</span>';document.getElementById("detail-status").innerHTML=a,x("detalhes-modal")}function k(n=null){if(!document.getElementById("secretario-modal"))return;const e=document.getElementById("secretario-form");if(e&&e.reset(),n){document.getElementById("modal-title").textContent="Editar Usuário";const a=d.find(l=>l.id===n);a&&(document.getElementById("secretario-id").value=a.id,document.getElementById("input-nome").value=a.nome,document.getElementById("input-siape").value=a.siape,document.getElementById("select-campus").value=a.campus,document.getElementById("input-email").value=a.email,document.getElementById("select-role").value=a.role,document.getElementById("check-ativo").checked=a.ativo)}else document.getElementById("modal-title").textContent="Novo Usuário",document.getElementById("secretario-id").value="",document.getElementById("select-role").value="Secretário";x("secretario-modal")}function h(n){n.preventDefault();const o=document.getElementById("secretario-id").value,e=o?parseInt(o):null,a={id:e||Date.now(),nome:document.getElementById("input-nome").value,siape:document.getElementById("input-siape").value,campus:document.getElementById("select-campus").value,email:document.getElementById("input-email").value,role:document.getElementById("select-role").value,ativo:document.getElementById("check-ativo").checked};if(e){const l=d.findIndex(t=>t.id===e);l!==-1&&(d[l]=a)}else d.unshift(a);i(),g("secretario-modal")}function S(n,o){const e=d.find(t=>t.id===n);if(!e)return;const a=e.ativo?"revogar":"reativar",l=e.ativo?"Revogar Acesso?":"Reativar Acesso?";confirm(`${l}

Deseja ${a} o acesso de "${o}"?`)&&(e.ativo=!e.ativo,i())}function $(n){console.info(`Um link de redefinição de senha (simulado) foi enviado para o e-mail de ${n}.`)}function w(){if(document.getElementById("secretarios-table-body")||document.getElementById("secretarios-mobile-container")){p();const n=document.getElementById("secretario-form");n&&n.addEventListener("submit",h),b({idModal:"secretario-modal",fecharAoClicarFora:!0}),b({idModal:"detalhes-modal",fecharAoClicarFora:!0});const o=document.getElementById("search-input"),e=document.getElementById("filter-role");o&&o.addEventListener("keyup",i),e&&e.addEventListener("change",i)}else console.warn("Elementos de 'secretarios.js' não encontrados. Aguardando DOMContentLoaded."),document.addEventListener("DOMContentLoaded",w)}window.aplicarFiltros=i;window.abrirModalSecretario=k;window.deletarSecretario=S;window.resetarSenha=$;window.mudarPagina=B;window.verSecretario=M;window.salvarSecretario=h;window.fecharModalSecretario=()=>g("secretario-modal");window.closeDetalhesModal=()=>g("detalhes-modal");w();
