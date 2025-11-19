import{mockAlunos as k}from"./database-DD0UnsdB.js";import{fecharModal as C,configurarListenersModal as E,abrirModal as L,renderizarPaginacao as S}from"./funcoesGerais-DYcR_P5N.js";const x=k.map((t,o)=>{let e,a,n=t.id%3===0?"Qualificação":"Defesa";switch(t.status){case"Qualificado":case"Defendido":e="Aprovada",a=`2024-10-${String(o%28+1).padStart(2,"0")}`;break;case"Trancado":case"Desligado":e="Rejeitada",a=`2024-09-${String(o%28+1).padStart(2,"0")}`;break;case"Ativo":default:e="Aguardando",a=`2024-11-${String(o%10+1).padStart(2,"0")}`}return{idAluno:t.id,nome:t.nome,matricula:t.matricula,status:e,data:a,tipo:n,alunoOriginal:t}});let p=1;const g=5;let u=[...x],i=null,h=null,f=null,r=null,l=null,c=null;function M(t){switch(t.toLowerCase()){case"aprovada":return"bg-green-700/30 text-green-400";case"rejeitada":return"bg-red-700/30 text-red-400";case"aguardando":default:return"bg-yellow-700/30 text-yellow-400"}}function b(){if(!i)return;if(i.innerHTML="",u.length===0){i.innerHTML=`<div class="p-8 text-center text-sgd-muted">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto mb-3 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Nenhuma solicitação encontrada para os filtros aplicados.
        </div>`,v();return}const t=(p-1)*g,o=t+g;u.slice(t,o).forEach(a=>{const n=document.createElement("div");n.className="flex flex-col md:flex-row items-start md:items-center justify-between p-5 solicitacao-item";const d=M(a.status);n.innerHTML=`
            <div>
                <h4 class="text-lg font-semibold text-white">${a.nome}</h4>
                <p class="text-sm text-sgd-muted">Matrícula: ${a.matricula} | Tipo: ${a.tipo}</p>
            </div>
            <div class="flex items-center gap-4 mt-3 md:mt-0">
                <span class="px-3 py-1 text-sm rounded-full ${d}">
                    ${a.status}
                </span>
                <button class="btn-primary btn-view-details text-sm px-4 py-2" onclick="verDetalhes(${a.idAluno})">
                    Ver Detalhes
                </button>
            </div>
        `,i.appendChild(n)}),v()}function v(){h&&S({idContainer:"pagination-container",paginaAtual:p,totalItens:u.length,itensPorPagina:g,nomeFuncaoMudarPagina:"mudarPagina"})}function $(t){const o=Math.ceil(u.length/g);t>=1&&t<=o&&(p=t,b())}function m(){const t=r?r.value.toLowerCase():"",o=l?l.value:"",e=c?c.value:"";u=x.filter(a=>{const n=a.nome.toLowerCase().includes(t)||a.matricula.includes(t),d=o===""||a.status.toLowerCase()===o,s=e===""||a.data===e;return n&&d&&s}),p=1,b()}function A(t){const o=x.find(s=>s.idAluno===t);if(!o){console.error("Não foi possível encontrar a solicitação.",t);return}const e=o.alunoOriginal;document.getElementById("detail-nome").textContent=e.nome,document.getElementById("detail-matricula").textContent=e.matricula,document.getElementById("detail-email").textContent=e.email,document.getElementById("detail-curso").textContent=`${e.curso} (Ingresso: ${e.ingresso})`,document.getElementById("detail-orientador").textContent=e.orientador||"Não definido";const a=document.getElementById("detail-status");a.textContent=e.status,a.className="inline-block px-2 py-1 text-xs rounded-full mt-1";let n="bg-gray-900 text-gray-400 border-gray-700";switch(e.status){case"Ativo":n="bg-sky-900/30 text-sky-400 border-sky-800";break;case"Qualificado":n="bg-sgd-gold/20 text-sgd-gold border-sgd-gold/50";break;case"Defendido":n="bg-emerald-900/30 text-emerald-400 border-emerald-800";break;case"Trancado":case"Desligado":n="bg-red-900/30 text-red-400 border-red-800 opacity-70";break}a.classList.add(...n.split(" "));const d=document.getElementById("detail-defesa-container");if(e.defesa){let s='<ul class="list-disc list-inside text-sgd-muted">';e.defesa.banca.forEach(y=>{s+=`<li>${y}</li>`}),s+="</ul>",d.innerHTML=`
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
                ${s}
            </div>
        `}else d.innerHTML=`<div class="text-center py-6 text-sgd-muted bg-black/20 rounded-lg border border-dashed border-sgd-border">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto mb-2 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
            <p>Nenhuma defesa registrada para este aluno.</p>
        </div>`;L("detalhes-modal")}function w(){if(i=document.getElementById("solicitacoes-container"),h=document.getElementById("pagination-container"),f=document.querySelector(".btn-apply-filters"),r=document.querySelector('input[placeholder="Nome do aluno"]'),l=document.querySelector("select"),c=document.querySelector('input[type="date"]'),!i||!h){console.warn("Elementos de 'solicitacoes.js' não encontrados. Aguardando DOMContentLoaded."),document.addEventListener("DOMContentLoaded",w);return}f&&f.addEventListener("click",m),E({idModal:"detalhes-modal",fecharAoClicarFora:!0}),r&&r.addEventListener("keyup",m),l&&l.addEventListener("change",m),c&&c.addEventListener("change",m),b()}w();window.verDetalhes=A;window.mudarPagina=$;window.fecharModalDetalhes=()=>C("detalhes-modal");
