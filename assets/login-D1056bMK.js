import{users as l}from"./auth-data-BHDS33Rl.js";const d=(e,t)=>l.some(o=>(o.username===e||o.email===e)&&o.password===t),c=()=>`
    <div class="min-h-screen w-full bg-black text-gray-200 flex items-center justify-center p-4 font-sans">
        <div class="w-full max-w-md bg-[#121212] px-8 py-10 rounded-xl border border-[#333333] text-center shadow-2xl shadow-[#C0A040]/20">
            
            <img src="/logo_sgd.webp" alt="Logo do SGD" class="w-28 h-28 mb-6 object-cover rounded-full mx-auto border-2 border-[#C0A040]/30">
            
            <h2 class="text-[#C0A040] text-3xl font-semibold mb-8">Acessar o Sistema</h2>
            
            <form class="login-form text-left" action="#" method="POST">
                <div class="mb-5">
                    <label for="username" class="block mb-2 text-sm text-[#AAAAAA]">Matrícula ou E-mail</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <input type="text" id="username" name="username" required
                            class="w-full pl-10 p-3 bg-[#1F1F1F] border border-[#333333] rounded-lg text-[#E0E0E0] text-base transition-colors duration-300 focus:outline-none focus:border-[#C0A040] focus:ring-4 focus:ring-[#C0A040]/20 [&:-webkit-autofill]:bg-[#1F1F1F] [&:-webkit-autofill]:text-[#E0E0E0] [&:-webkit-autofill]:shadow-[0_0_0_30px_#1F1F1F_inset] [&:-webkit-text-fill-color:#E0E0E0] focus:shadow-[0_0_0_2px_rgba(192,160,64,0.3)]">
                    </div>
                </div>
                <div class="mb-5">
                    <label for="password" class="block mb-2 text-sm text-[#AAAAAA]">Senha</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <input type="password" id="password" name="password" required
                            class="w-full pl-10 p-3 pr-10 bg-[#1F1F1F] border border-[#333333] rounded-lg text-[#E0E0E0] text-base transition-colors duration-300 focus:outline-none focus:border-[#C0A040] focus:ring-4 focus:ring-[#C0A040]/20 [&:-webkit-autofill]:bg-[#1F1F1F] [&:-webkit-autofill]:text-[#E0E0E0] [&:-webkit-autofill]:shadow-[0_0_0_30px_#1F1F1F_inset] [&:-webkit-text-fill-color:#E0E0E0] focus:shadow-[0_0_0_2px_rgba(192,160,64,0.3)]">
                        <button type="button" id="togglePassword" aria-label="Mostrar senha"
                            class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 p-1 flex items-center justify-center hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </button>
                    </div>
                </div>
                
                <!-- Div de Erro (Substitui o Alert) -->
                <div id="login-error" class="text-red-400 text-sm mb-4 h-5 text-center"></div>

                <button id="loginButton"
                    type="button"
                    class="w-full bg-[#C0A040] text-black py-3 text-lg font-extrabold rounded-lg shadow-lg shadow-[#C0A040]/40 transform transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5">
                    Entrar
                </button>
            </form>
            <div class="mt-6 text-center text-sm">
                <a href="#" class="text-[#AAAAAA] hover:text-[#C0A040] transition-colors">Esqueceu sua senha?</a>
            </div>
        </div>
    </div>
    `,r=e=>{const t=document.getElementById("login-error");t&&(t.textContent=e)},u=()=>{document.body.innerHTML=c();const e=document.getElementById("togglePassword"),t=document.getElementById("password"),o=document.getElementById("username");e.addEventListener("click",function(){const s=t.type==="password";t.type=s?"text":"password",e.setAttribute("aria-label",s?"Ocultar senha":"Mostrar senha")}),t.addEventListener("input",()=>r("")),o.addEventListener("input",()=>r("")),document.getElementById("loginButton").addEventListener("click",function(){const s=o.value,a=t.value;if(d(s,a)){r("");const i=l.find(n=>(n.username===s||n.email===s)&&n.password===a);localStorage.setItem("userEmail",i.email),window.location.href="index.html"}else r("Credenciais inválidas. Tente novamente.")})};u();
