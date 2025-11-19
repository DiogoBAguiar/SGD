const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/agenda-rn8iMTOF.js","assets/database-DD0UnsdB.js","assets/funcoesGerais-DYcR_P5N.js","assets/alunos-0UN140qE.js","assets/configuracoes-Cb-QjC8x.js","assets/documentos-DflNGsHp.js","assets/login-D1056bMK.js","assets/auth-data-BHDS33Rl.js","assets/professores-DwvO5dHs.js","assets/profile-Db3yz0cL.js","assets/secretarios-BeD8Ni9T.js","assets/solicitacoes-aEKc97Ny.js"])))=>i.map(i=>d[i]);
(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const k="modulepreload",E=function(i){return"/"+i},f={},n=function(o,t,c){let e=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),a=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));e=Promise.allSettled(t.map(l=>{if(l=E(l),l in f)return;f[l]=!0;const h=l.endsWith(".css"),w=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${w}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":k,h||(d.as="script"),d.crossOrigin="",d.href=l,a&&d.setAttribute("nonce",a),document.head.appendChild(d),h)return new Promise((x,_)=>{d.addEventListener("load",x),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(r){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r}return e.then(r=>{for(const a of r||[])a.status==="rejected"&&s(a.reason);return o().catch(s)})},v=i=>{const o=c=>`flex items-center px-3 py-2 rounded transition-colors duration-200 ${i===c?"bg-[#C0A040] text-black font-bold":"text-[#E0E0E0] hover:bg-[#1F1F1F] hover:text-[#E6C850]"}`,t={dashboard:'<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>',agenda:'<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>',solicitacoes:'<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>',documentos:'<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>',alunos:'<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>',professores:'<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>',secretaria:'<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>',config:'<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',perfil:'<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>',sair:'<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>'};return`
    <style>
        .custom-scrollbar::-webkit-scrollbar {
            width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #333;
            border-radius: 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background-color: #C0A040;
        }
    </style>

    <div id="sidebarOverlay" class="fixed inset-0 top-20 bg-black/50 z-30 hidden md:hidden glass-effect"></div>
    
    <aside id="sidebar" class="
        fixed left-0 top-20 bottom-0 w-[260px] z-40 bg-[#000000] border-r border-[#333333] flex flex-col transition-transform duration-300 -translate-x-full shadow-2xl
        md:translate-x-0 md:static md:sticky md:top-0 md:h-screen md:shadow-none md:z-0
    ">
        <div class="hidden md:flex flex-col justify-between items-center mb-6 pt-5 px-5">
            <div class="text-center w-full">
                <img src="/logo_sgd.webp" alt="Logo SGD" class="w-20 h-20 rounded-xl object-cover mx-auto mb-3 border-2 border-[#333333]">
                <h2 class="text-[#C0A040] text-lg font-bold tracking-wider">SGD IFPB</h2>
            </div>
        </div>

        <nav class="flex-1 overflow-y-auto custom-scrollbar px-5 py-4 md:py-0">
            <ul class="space-y-1 text-sm">
                <li class="px-3 text-[#AAAAAA] uppercase tracking-widest text-[0.65rem] font-bold mt-2 md:mt-4 mb-2">Principal</li>
                <li><a href="index.html" class="${o("dashboard")}">${t.dashboard} Dashboard</a></li>
                <li><a href="agenda.html" class="${o("agenda")}">${t.agenda} Agenda</a></li>

                <li class="px-3 text-[#AAAAAA] uppercase tracking-widest text-[0.65rem] font-bold mt-6 mb-2">Processos</li>
                <li><a href="solicitacao.html" class="${o("solicitacoes")}">${t.solicitacoes} Solicitações</a></li>
                <li><a href="documentos.html" class="${o("documentos")}">${t.documentos} Documentos</a></li>

                <li class="px-3 text-[#AAAAAA] uppercase tracking-widest text-[0.65rem] font-bold mt-6 mb-2">Cadastros</li>
                <li><a href="student_management.html" class="${o("gerenciar_alunos")}">${t.alunos} Alunos</a></li>
                <li><a href="professores.html" class="${o("gerenciar_professores")}">${t.professores} Professores</a></li>

                <li class="px-3 text-[#AAAAAA] uppercase tracking-widest text-[0.65rem] font-bold mt-6 mb-2">Administração</li>
                <li><a href="secretarios.html" class="${o("gerenciar_secretaria")}">${t.secretaria} Secretaria</a></li>

                <li class="px-3 text-[#AAAAAA] uppercase tracking-widest text-[0.65rem] font-bold mt-6 mb-2">Sistema</li>
                <li><a href="configuracoes.html" class="${o("configuracoes")}">${t.config} Configurações</a></li>
                <li><a href="profile.html" class="${o("meu_perfil")}">${t.perfil} Meu Perfil</a></li>
                
                <li class="mt-6 pt-4 border-t border-[#333333]">
                    <a href="login.html" id="logoutButton" class="flex items-center px-3 py-2 rounded text-red-400 hover:bg-red-900/20 transition-colors duration-200">
                        ${t.sair} Sair
                    </a>
                </li>
            </ul>
        </nav>
    </aside>
    `},b=(i="")=>{const o=A(i),t=`https://ui-avatars.com/api/?name=${o.replace(" ","+")}&background=C0A040&color=1F1F1F&bold=true`;return`
    <header class="flex items-center justify-between px-4 sm:px-8 py-5 bg-[#000000] border-b border-[#333333] sticky top-0 z-50 h-20">
        <div class="flex items-center gap-4">
            
            <button id="mobileMenuBtn" class="md:hidden text-[#C0A040] w-10 h-10 flex items-center justify-center hover:bg-[#1F1F1F] rounded focus:outline-none group">
                <div class="w-6 flex flex-col gap-1.5 overflow-hidden relative">
                    <span id="hamburger-line-1" class="w-full h-0.5 bg-current rounded transition-all duration-300 origin-center"></span>
                    <span id="hamburger-line-2" class="w-full h-0.5 bg-current rounded transition-all duration-300"></span>
                    <span id="hamburger-line-3" class="w-full h-0.5 bg-current rounded transition-all duration-300 origin-center"></span>
                </div>
            </button>
            
            <div class="flex items-center gap-3">
                <img src="/logo_sgd.webp" alt="Logo Mobile" class="w-8 h-8 rounded object-cover border border-[#333333] md:hidden">
                <h1 class="text-lg sm:text-2xl font-semibold text-[#E0E0E0] truncate max-w-[150px] sm:max-w-none">Bem-vindo, ${o}!</h1>
            </div>
        </div>
        
        <div class="flex items-center text-sm">
            <div class="text-right mr-4 hidden sm:block">
                <span class="block text-[#E0E0E0] font-medium">${o}</span>
                <span class="block text-sgd-muted text-xs">Coordenador</span>
            </div>
            <img src="${t}" alt="Avatar" class="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#C0A040] object-cover">
        </div>
    </header>
    `},A=i=>{if(!i)return"Usuário";const t=i.split("@")[0].split(".")[0];return t.charAt(0).toUpperCase()+t.slice(1)};document.addEventListener("DOMContentLoaded",()=>{document.body.addEventListener("click",i=>{(i.target.id==="logoutButton"||i.target.closest("#logoutButton"))&&(i.preventDefault(),localStorage.removeItem("userEmail"),window.location.href="login.html")})});const y=Object.freeze(Object.defineProperty({__proto__:null,createHeader:b,createNavbar:v},Symbol.toStringTag,{value:"Module"})),p=Object.assign({"./modules/agenda.js":()=>n(()=>import("./agenda-rn8iMTOF.js"),__vite__mapDeps([0,1,2])),"./modules/alunos.js":()=>n(()=>import("./alunos-0UN140qE.js"),__vite__mapDeps([3,1,2])),"./modules/auth-data.js":()=>n(()=>import("./auth-data-BHDS33Rl.js"),[]),"./modules/configuracoes.js":()=>n(()=>import("./configuracoes-Cb-QjC8x.js"),__vite__mapDeps([4,2])),"./modules/dashboard.js":()=>n(()=>import("./dashboard-CN8vHpHv.js"),[]),"./modules/database.js":()=>n(()=>import("./database-DD0UnsdB.js"),[]),"./modules/documentos.js":()=>n(()=>import("./documentos-DflNGsHp.js"),__vite__mapDeps([5,2])),"./modules/funcoesGerais.js":()=>n(()=>import("./funcoesGerais-DYcR_P5N.js"),[]),"./modules/header.js":()=>n(()=>Promise.resolve().then(()=>y),void 0),"./modules/login.js":()=>n(()=>import("./login-D1056bMK.js"),__vite__mapDeps([6,7])),"./modules/professores.js":()=>n(()=>import("./professores-DwvO5dHs.js"),__vite__mapDeps([8,1,2])),"./modules/profile.js":()=>n(()=>import("./profile-Db3yz0cL.js"),__vite__mapDeps([9,7,2])),"./modules/secretarios.js":()=>n(()=>import("./secretarios-BeD8Ni9T.js"),__vite__mapDeps([10,1,2])),"./modules/solicitacoes.js":()=>n(()=>import("./solicitacoes-aEKc97Ny.js"),__vite__mapDeps([11,1,2]))}),L=window.location.pathname,g=L.split("/");let m=g[g.length-1];m?m.endsWith(".html")||(m+=".html"):m="index.html";console.log(`[SGD] Página detectada: ${m}`);const j={"index.html":{id:"dashboard",title:"Dashboard",script:"./modules/dashboard.js"},"student_management.html":{id:"gerenciar_alunos",title:"Gerenciar Alunos",script:"./modules/alunos.js"},"professores.html":{id:"gerenciar_professores",title:"Gerenciar Professores",script:"./modules/professores.js"},"secretarios.html":{id:"gerenciar_secretaria",title:"Equipe da Secretaria",script:"./modules/secretarios.js"},"agenda.html":{id:"agenda",title:"Gerenciar Agenda",script:"./modules/agenda.js"},"profile.html":{id:"meu_perfil",title:"Meu Perfil",script:"./modules/profile.js"},"configuracoes.html":{id:"configuracoes",title:"Configurações",script:"./modules/configuracoes.js"},"solicitacao.html":{id:"solicitacoes",title:"Gerenciar Solicitações",script:"./modules/solicitacoes.js"},"documentos.html":{id:"documentos",title:"Gerenciar Documentos",script:"./modules/documentos.js"},"login.html":{id:"login",title:"Login",script:"./modules/login.js"}},u=j[m]||{id:"",title:"SGD IFPB",script:null};document.addEventListener("DOMContentLoaded",()=>{if(m==="login.html"){u.script&&p[u.script]&&p[u.script]().catch(e=>console.error("[SGD] Erro login:",e));return}const i=localStorage.getItem("userEmail");if(!i){window.location.href="login.html";return}const o=document.getElementById("navbar");o&&(o.innerHTML=v(u.id));const t=document.getElementById("header");t&&(t.innerHTML=b(i,u.title));const c=e=>{const s=document.getElementById("hamburger-line-1"),r=document.getElementById("hamburger-line-2"),a=document.getElementById("hamburger-line-3");!s||!r||!a||(e?(s.classList.add("rotate-45","translate-y-2"),r.classList.add("opacity-0"),a.classList.add("-rotate-45","-translate-y-2")):(s.classList.remove("rotate-45","translate-y-2"),r.classList.remove("opacity-0"),a.classList.remove("-rotate-45","-translate-y-2")))};document.addEventListener("click",e=>{const s=e.target.closest("#mobileMenuBtn"),r=e.target.closest("#closeSidebarBtn")||e.target.closest("#sidebarOverlay"),a=document.getElementById("sidebar"),l=document.getElementById("sidebarOverlay");a&&(s&&(a.classList.contains("-translate-x-full")?(a.classList.remove("-translate-x-full"),l&&l.classList.remove("hidden"),c(!0),document.body.classList.add("overflow-hidden")):(a.classList.add("-translate-x-full"),l&&l.classList.add("hidden"),c(!1),document.body.classList.remove("overflow-hidden"))),r&&(a.classList.add("-translate-x-full"),l&&l.classList.add("hidden"),c(!1),document.body.classList.remove("overflow-hidden")))}),u.script&&p[u.script]&&p[u.script]().catch(e=>console.error("[SGD] Erro módulo:",e))});
