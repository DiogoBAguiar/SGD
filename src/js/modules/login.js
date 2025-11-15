import { users } from './auth-data.js';

const validarLogin = (login, password) => {
    return users.some(user => 
        (user.username === login || user.email === login) && user.password === password
    );
};

const gerarLoginHTML = () => {
    return `
    <div class="w-full max-w-md bg-[#121212] px-8 py-10 rounded-lg border border-[#333333] text-center shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
        <img src="/logo_sgd.webp" alt="Logo do SGD" class="w-32 h-32 mb-6 object-cover rounded-md mx-auto">
        <h2 class="text-[#C0A040] text-2xl font-semibold mb-8">Acessar o Sistema</h2>
        <form class="login-form text-left" action="#" method="POST">
            <div class="mb-5">
                <label for="username" class="block mb-2 text-sm text-[#AAAAAA]">Matrícula ou E-mail</label>
                <input type="text" id="username" name="username" required
                    class="w-full p-3 bg-[#1F1F1F] border border-[#333333] rounded text-[#E0E0E0] text-base transition-colors duration-300 focus:outline-none focus:border-[#C0A040] focus:ring-4 focus:ring-[#C0A040]/20 [&:-webkit-autofill]:bg-[#1F1F1F] [&:-webkit-autofill]:text-[#E0E0E0] [&:-webkit-autofill]:shadow-[0_0_0_30px_#1F1F1F_inset] [&:-webkit-text-fill-color:#E0E0E0] focus:shadow-[0_0_0_2px_rgba(192,160,64,0.3)]">
            </div>
            <div class="mb-5">
                <label for="password" class="block mb-2 text-sm text-[#AAAAAA]">Senha</label>
                <div class="relative">
                    <input type="password" id="password" name="password" required
                        class="w-full p-3 pr-10 bg-[#1F1F1F] border border-[#333333] rounded text-[#E0E0E0] text-base transition-colors duration-300 focus:outline-none focus:border-[#C0A040] focus:ring-4 focus:ring-[#C0A040]/20 [&:-webkit-autofill]:bg-[#1F1F1F] [&:-webkit-autofill]:text-[#E0E0E0] [&:-webkit-autofill]:shadow-[0_0_0_30px_#1F1F1F_inset] [&:-webkit-text-fill-color:#E0E0E0] focus:shadow-[0_0_0_2px_rgba(192,160,64,0.3)]">
                    <button type="button" id="togglePassword" aria-label="Mostrar senha"
                        class="absolute right-2 top-1/2 -translate-y-1/2 text-white p-1 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    </button>
                </div>
            </div>
            
            <!-- Div de Erro (Substitui o Alert) -->
            <div id="login-error" class="text-red-400 text-sm mb-4 h-5"></div>

            <button id="loginButton"
                type="button"
                class="w-full bg-[#C0A040] text-black py-3 text-lg font-extrabold rounded transition transform duration-200 hover:bg-[#E6C850] hover:scale-105">
                Entrar
            </button>
        </form>
        <div class="mt-6 text-center text-sm">
            <a href="#" class="text-[#AAAAAA] hover:text-[#C0A040] transition-colors">Esqueceu sua senha?</a>
        </div>
    </div>`;
};

const mostrarErro = (mensagem) => {
    const errorDiv = document.getElementById('login-error');
    if (errorDiv) {
        errorDiv.textContent = mensagem;
    }
};

const inicializarLogin = () => {

    document.body.innerHTML = gerarLoginHTML();

    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const usernameInput = document.getElementById('username'); 
    togglePassword.addEventListener('click', function () {
        const isPassword = passwordInput.type === 'password';
        passwordInput.type = isPassword ? 'text' : 'password';
        togglePassword.setAttribute('aria-label', isPassword ? 'Ocultar senha' : 'Mostrar senha');
    });

    passwordInput.addEventListener('input', () => mostrarErro(''));
    usernameInput.addEventListener('input', () => mostrarErro(''));

    document.getElementById('loginButton').addEventListener('click', function () {
        const loginInput = usernameInput.value;
        const password = passwordInput.value;

        if (validarLogin(loginInput, password)) {
            mostrarErro(''); 
            const loggedInUser = users.find(user => 
                (user.username === loginInput || user.email === loginInput) && user.password === password
            );

            localStorage.setItem('userEmail', loggedInUser.email);
            window.location.href = 'index.html'; 
        } else {
            mostrarErro('Credenciais inválidas. Tente novamente.');
  
        }
    });
};

inicializarLogin();
