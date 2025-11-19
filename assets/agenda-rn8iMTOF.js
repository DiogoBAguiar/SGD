import{mockAlunos as f}from"./database-DD0UnsdB.js";import{configurarListenersModal as h,abrirModal as x,fecharModal as w}from"./funcoesGerais-DYcR_P5N.js";const i=document.getElementById("allDefensesList"),a=document.getElementById("eventForm"),u=document.getElementById("evento_aluno");function d(){const t=localStorage.getItem("defenses");if(t)return JSON.parse(t);{const o=f.filter(e=>e.defesa).map(e=>({id:String(e.id),start:`${e.defesa.data}T${e.defesa.horario}:00`,extendedProps:{student:e.nome,title:e.defesa.titulo}}));return localStorage.setItem("defenses",JSON.stringify(o)),o}}function E(t){localStorage.setItem("defenses",JSON.stringify(t))}function m(){if(!i)return;const t=d();if(t.sort((o,e)=>new Date(o.start)-new Date(e.start)),i.innerHTML="",t.length===0){i.innerHTML=`<div class="text-center py-8 text-[#AAAAAA]">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto mb-2 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Nenhum agendamento realizado.
        </div>`;return}t.forEach(o=>{const e=new Date(o.start),l=e.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"}),r=e.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}),n=o.extendedProps.student,s=o.extendedProps.title||"Título não informado",c=`
            <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-[#1A1A1A] rounded-lg border border-[#333] hover:border-[#C0A040] transition-colors gap-4 group">
                
                <div class="flex-1 min-w-0">
                    <h4 class="text-sm font-bold text-white group-hover:text-[#E6C850] transition-colors truncate">${n}</h4>
                    <p class="text-xs text-[#888888] truncate mt-1" title="${s}">${s}</p>
                </div>

                <div class="flex items-center bg-[#121212] px-4 py-2 rounded-md border border-[#333] shrink-0 w-full sm:w-auto justify-center">
                    <!-- Ícone de Calendário -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-[#C0A040] mr-3 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    
                    <!-- Data e Hora Formatadas -->
                    <div class="text-sm font-medium">
                        <span class="text-[#E0E0E0]">${l}</span>
                        <span class="text-[#555] text-xs mx-1">às</span>
                        <span class="text-[#C0A040] font-bold">${r}</span>
                    </div>
                </div>
            </div>
        `;i.innerHTML+=c})}function g(){if(!u)return;const t=f;u.innerHTML='<option value="" disabled selected>Selecione um aluno</option>',t.forEach(o=>{const e=document.createElement("option");e.value=o.nome,e.textContent=o.nome,u.appendChild(e)})}function A(){a&&a.reset();const t=document.getElementById("evento_data");t&&(t.value=new Date().toISOString().split("T")[0]);const o=document.getElementById("evento_hora");o&&(o.value="09:00"),x("eventModal")}function D(t){t.preventDefault();const o=new FormData(a),e=o.get("aluno");if(!e){console.warn("Seleção de aluno é obrigatória.");return}const l=`${o.get("data")}T${o.get("hora")}:00`;let r=d();const n=f.find(v=>v.nome===e);let s="";n&&n.defesa&&n.defesa.titulo&&(s=n.defesa.titulo);const c={id:String(Date.now()),start:l,extendedProps:{student:e,title:s}};r.push(c),E(r),m(),w("eventModal")}function p(){const t=document.getElementById("addEventButton");t&&t.addEventListener("click",A),h({idModal:"eventModal",idsBotoesFechar:["modalCloseButton","cancelButton"],fecharAoClicarFora:!0}),a&&a.addEventListener("submit",D)}function y(){document.getElementById("allDefensesList")||document.getElementById("eventForm")?(d(),m(),g(),p()):document.addEventListener("DOMContentLoaded",()=>{document.getElementById("allDefensesList")&&(d(),m(),g(),p())})}y();
