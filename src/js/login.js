// Simulação de um banco de dados de usuários
const users = [
    { username: 'icaro.pontes@academico.ifpb.edu.br', password: 'icaro123' },
    { username: 'diogo.aguiar@academico.ifpb.edu.br', password: 'diogo123' },
    { username: 'alan.clemente@academico.ifpb.edu.br', password: 'alan123' },
    { username: 'carlos.gabriel@academico.ifpb.edu.br', password: 'carlos123' },
    { username: 'thalyson.felicio@academico.ifpb.edu.br', password: 'thalyson123' }
];

// Função para validar login
const validateLogin = (username, password) => {
    return users.some(user => user.username === username && user.password === password);
};

// Função para gerar o HTML do formulário de login
const generateLoginHTML = () => {
    return `
    <div class="w-full max-w-md bg-[#121212] px-8 py-10 rounded-lg border border-[#333333] text-center shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
        <img src="../../public/logo_sgd.webp" alt="Logo do SGD" class="w-32 h-32 mb-6 object-cover rounded-md mx-auto">
        <h2 class="text-[#C0A040] text-2xl font-semibold mb-8">Acessar o Sistema</h2>
        <form class="login-form text-left" action="#" method="POST">
            <div class="mb-5">
                <label for="username" class="block mb-2 text-sm text-[#AAAAAA]">Matrícula ou E-mail</label>
                <input type="text" id="username" name="username" required
                    class="w-full p-3 bg-[#1F1F1F] border border-[#333333] rounded text-[#E0E0E0] text-base transition-colors duration-300 focus:outline-none focus:border-[#C0A040] focus:ring-4 focus:ring-[#C0A040]/20 [&:-webkit-autofill]:bg-[#1F1F1F] [&:-webkit-autofill]:text-[#E0E0E0] [&:-webkit-autofill]:shadow-[0_0_0_30px_#1F1F1F_inset] [&:-webkit-autofill]:[-webkit-text-fill-color:#E0E0E0] focus:shadow-[0_0_0_2px_rgba(192,160,64,0.3)]">
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

// Função para renderizar o login
const renderLogin = () => {
    document.body.innerHTML = generateLoginHTML();

    // Mostrar/Ocultar Senha
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    togglePassword.addEventListener('click', function () {
        const isPassword = passwordInput.type === 'password';
        passwordInput.type = isPassword ? 'text' : 'password';
        togglePassword.setAttribute('aria-label', isPassword ? 'Ocultar senha' : 'Mostrar senha');
    });

    // Evento de click no botão de login
    document.getElementById('loginButton').addEventListener('click', function () {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (validateLogin(username, password)) {
            localStorage.setItem('userEmail', username); // Armazena o e-mail do usuário
            window.location.href = 'dashboard.html'; // Redireciona para a página dashboard
        } else {
            alert('Credenciais inválidas. Tente novamente.'); // Alerta de erro
        }
    });
};

// Chama a função de renderização ao carregar
document.addEventListener('DOMContentLoaded', renderLogin);