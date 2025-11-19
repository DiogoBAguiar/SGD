import{mockAlunos as i}from"./database-DD0UnsdB.js";import{fecharModal as m,abrirModal as y,configurarListenersModal as p,renderizarPaginacao as I}from"./funcoesGerais-DYcR_P5N.js";for(let o=105;o<=134;o++)i.some(n=>n.id===o)||i.push({id:o,nome:`Aluno Teste ${o}`,matricula:`2023${o}`,email:`aluno${o}@ifpb.edu.br`,curso:"Mestrado",ingresso:2023,orientador:"Damires Yluska",status:"Ativo",defesa:null});let v=1;const g=8;let c=[...i];function f(){const o=document.getElementById("alunos-table-body"),n=document.getElementById("alunos-mobile-container");if(!o&&!n)return;if(o&&(o.innerHTML=""),n&&(n.innerHTML=""),c.length===0){const t='<div class="px-6 py-8 text-center text-sgd-muted">Nenhum aluno encontrado.</div>';o&&(o.innerHTML=`<tr><td colspan="5">${t}</td></tr>`),n&&(n.innerHTML=t),h();return}const e=(v-1)*g,d=e+g;c.slice(e,d).forEach(t=>{let l="bg-gray-900 text-gray-400 border-gray-700";switch(t.status){case"Ativo":l="bg-sky-900/30 text-sky-400 border-sky-800";break;case"Qualificado":l="bg-sgd-gold/20 text-sgd-gold border-sgd-gold/50";break;case"Defendido":l="bg-emerald-900/30 text-emerald-400 border-emerald-800";break;case"Trancado":case"Desligado":l="bg-red-900/30 text-red-400 border-red-800 opacity-70";break}if(o){const s=document.createElement("tr");s.className="hover:bg-[#1A1A1A] transition-colors",s.innerHTML=`
                <td class="table-cell">
                    <a href="#" onclick="verAluno(event, ${t.id})" class="font-medium text-white hover:text-sgd-gold hover:underline transition">
                        ${t.nome}
                    </a>
                    <div class="text-sgd-muted text-xs">${t.matricula}</div>
                </td>
                <td class="table-cell">
                    <div>${t.curso}</div>
                    <div class="text-sgd-muted text-xs">Ingresso: ${t.ingresso}</div>
                </td>
                <td class="table-cell">${t.orientador||'<span class="text-sgd-muted italic">—</span>'}</td>
                <td class="table-cell"><span class="px-2 py-1 text-xs font-medium rounded-full border ${l}">${t.status}</span></td>
                <td class="table-cell text-right">
                    <div class="flex items-center justify-end space-x-3">
                        <button onclick="editarAluno(${t.id})" class="text-sgd-muted hover:text-sgd-gold transition" title="Editar"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg></button>
                        <button onclick="deletarAluno(${t.id}, '${t.nome}')" class="text-sgd-muted hover:text-red-500 transition" title="Excluir"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></button>
                    </div>
                </td>`,o.appendChild(s)}if(n){const s=document.createElement("div");s.className="mobile-card",s.innerHTML=`
                <div class="flex justify-between items-start mb-3">
                    <div>
                        <h3 class="text-lg font-semibold text-white" onclick="verAluno(event, ${t.id})">${t.nome}</h3>
                        <p class="text-sm text-sgd-muted">${t.matricula} | ${t.curso}</p>
                    </div>
                    <span class="px-2 py-1 text-xs font-medium rounded-full border ${l}">${t.status}</span>
                </div>
                
                <div class="grid grid-cols-2 gap-2 mb-4">
                    <div>
                        <p class="mobile-label">Orientador</p>
                        <p class="mobile-value">${t.orientador||"—"}</p>
                    </div>
                    <div>
                        <p class="mobile-label">Ingresso</p>
                        <p class="mobile-value">${t.ingresso}</p>
                    </div>
                </div>

                <div class="flex justify-end gap-3 border-t border-sgd-border pt-3">
                    <button onclick="verAluno(event, ${t.id})" class="text-sm text-sgd-muted hover:text-white px-3 py-1 rounded border border-sgd-border">Detalhes</button>
                    <button onclick="editarAluno(${t.id})" class="text-sm text-sgd-gold border border-sgd-gold px-3 py-1 rounded hover:bg-sgd-gold hover:text-black transition">Editar</button>
                    <button onclick="deletarAluno(${t.id}, '${t.nome}')" class="text-sm text-red-500 border border-red-900/50 px-3 py-1 rounded hover:bg-red-900/20">Excluir</button>
                </div>
            `,n.appendChild(s)}}),h()}function h(){I({idContainer:"pagination-container",paginaAtual:v,totalItens:c.length,itensPorPagina:g,nomeFuncaoMudarPagina:"mudarPagina"})}function w(o){const n=Math.ceil(c.length/g);o>=1&&o<=n&&(v=o,f())}function u(){const o=document.getElementById("search-input"),n=document.getElementById("filter-status"),e=o?o.value.toLowerCase():"",d=n?n.value.toLowerCase():"";c=i.filter(a=>(a.nome.toLowerCase().includes(e)||a.matricula.includes(e)||a.orientador&&a.orientador.toLowerCase().includes(e))&&(d===""||a.status.toLowerCase()===d)),v=1,f()}function B(o,n){o&&o.preventDefault();const e=i.find(t=>t.id===n);if(!e)return;const d=(t,l)=>{const s=document.getElementById(t);s&&(s.textContent=l)};d("detail-nome",e.nome),d("detail-matricula",e.matricula),d("detail-email",e.email),d("detail-curso",`${e.curso} (Ingresso: ${e.ingresso})`),d("detail-status",e.status),d("detail-orientador",e.orientador||"Não definido");const a=document.getElementById("detail-defesa-container");if(a)if(e.defesa){let t='<ul class="list-disc list-inside text-sgd-muted">';e.defesa.banca.forEach(l=>{t+=`<li>${l}</li>`}),t+="</ul>",a.innerHTML=`
                <div class="mb-4">
                    <h4 class="text-sgd-gold text-sm font-semibold mb-1">Título do Trabalho</h4>
                    <p class="text-white font-medium">${e.defesa.titulo}</p>
                </div>
                <div class="grid grid-cols-2 gap-4 mb-4">
                    <div><h4 class="text-sgd-muted text-xs mb-1">Data</h4><p>${e.defesa.data}</p></div>
                    <div><h4 class="text-sgd-muted text-xs mb-1">Horário</h4><p>${e.defesa.horario}</p></div>
                    <div class="col-span-2"><h4 class="text-sgd-muted text-xs mb-1">Local</h4><p>${e.defesa.local}</p></div>
                </div>
                <div>
                    <h4 class="text-sgd-gold text-sm font-semibold mb-2">Banca Examinadora</h4>
                    ${t}
                </div>
            `}else a.innerHTML=`<div class="text-center py-6 text-sgd-muted bg-black/20 rounded-lg border border-dashed border-sgd-border">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto mb-2 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                <p>Nenhuma defesa agendada ou registrada.</p>
            </div>`;y("detalhes-modal")}function b(o=null){const n=document.getElementById("aluno-form");if(n&&n.reset(),o){document.getElementById("modal-title").textContent="Editar Aluno";const e=i.find(d=>d.id===o);e&&(document.getElementById("aluno-id").value=e.id,document.getElementById("input-nome").value=e.nome,document.getElementById("input-matricula").value=e.matricula,document.getElementById("input-email").value=e.email,document.getElementById("select-curso").value=e.curso,document.getElementById("input-ingresso").value=e.ingresso,document.getElementById("select-orientador").value=e.orientador,document.getElementById("select-status").value=e.status,e.defesa?(document.getElementById("titulo").value=e.defesa.titulo||"",document.getElementById("data").value=e.defesa.data||"",document.getElementById("horario").value=e.defesa.horario||"",document.getElementById("local").value=e.defesa.local||"",document.getElementById("banca").value=e.defesa.banca.join(", ")||""):["titulo","data","horario","local","banca"].forEach(d=>{const a=document.getElementById(d);a&&(a.value="")}))}else document.getElementById("modal-title").textContent="Novo Aluno",document.getElementById("aluno-id").value="";y("aluno-modal")}function A(o){o.preventDefault();const n=document.getElementById("aluno-id").value,e={id:n?parseInt(n):Date.now(),nome:document.getElementById("input-nome").value,matricula:document.getElementById("input-matricula").value,email:document.getElementById("input-email").value,curso:document.getElementById("select-curso").value,ingresso:parseInt(document.getElementById("input-ingresso").value),orientador:document.getElementById("select-orientador").value,status:document.getElementById("select-status").value,defesa:null},d=document.getElementById("titulo").value,a=document.getElementById("data").value,t=document.getElementById("horario").value,l=document.getElementById("local").value,s=document.getElementById("banca").value.split(",").map(r=>r.trim()).filter(r=>r);if(d&&a&&t&&l&&s.length>0&&(e.defesa={titulo:d,data:a,horario:t,local:l,banca:s}),n){const r=i.findIndex(E=>E.id===parseInt(n));r!==-1&&(i[r]={...i[r],...e})}else i.unshift(e);u(),m("aluno-modal")}function $(o,n){if(confirm(`Remover "${n}"?`)){const e=i.findIndex(d=>d.id===o);e!==-1&&i.splice(e,1),u()}}function x(){f(),p({idModal:"aluno-modal",fecharAoClicarFora:!0}),p({idModal:"detalhes-modal",fecharAoClicarFora:!0});const o=document.getElementById("aluno-form");o&&o.addEventListener("submit",A);const n=document.getElementById("search-input"),e=document.getElementById("filter-status");n&&n.addEventListener("keyup",u),e&&e.addEventListener("change",u)}function k(){document.getElementById("alunos-table-body")||document.getElementById("alunos-mobile-container")?x():(console.warn("Elementos da página de alunos não encontrados. Aguardando DOMContentLoaded."),document.addEventListener("DOMContentLoaded",()=>{(document.getElementById("alunos-table-body")||document.getElementById("alunos-mobile-container"))&&x()}))}window.aplicarFiltros=u;window.abrirModalAluno=b;window.openAlunoModal=b;window.deletarAluno=$;window.editarAluno=b;window.mudarPagina=w;window.verAluno=B;window.fecharModalAluno=()=>m("aluno-modal");window.closeAlunoModal=()=>m("aluno-modal");window.fecharModalDetalhes=()=>m("detalhes-modal");window.closeDetalhesModal=()=>m("detalhes-modal");k();
