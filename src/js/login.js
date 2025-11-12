const users = [
    {
        username: 'icaro.pontes@academico.ifpb.edu.br',
        password: 'icaro123',
        name: 'Ícaro Pontes',
        role: 'Administrador',
        department: 'Informática',
        email: 'icaro.pontes@academico.ifpb.edu.br',
        phone: '(83) 98888-8888',
        campus: 'João Pessoa'
    },
    {
        username: 'diogo.aguiar@academico.ifpb.edu.br',
        password: 'diogo123',
        name: 'Diogo Aguiar',
        role: 'Administrador',
        department: 'Sistema',
        email: 'diogo.aguiar@ifpb.edu.br',
        phone: '(83) 93333-3333',
        campus: 'João Pessoa'
    },
    {
        username: 'alan.clemente@academico.ifpb.edu.br',
        password: 'alan123',
        name: 'Alan Clemente',
        role: 'Administrador',
        department: 'Matemática',
        email: 'alan.clemente@ifpb.edu.br',
        phone: '(83) 92222-2222',
        campus: 'João Pessoa'
    },
    {
        username: 'carlos.gabriel@academico.ifpb.edu.br',
        password: 'carlos123',
        name: 'Carlos Gabriel',
        role: 'Administrador',
        department: 'Laboratório',
        email: 'carlos.gabriel@ifpb.edu.br',
        phone: '(83) 91111-1111',
        campus: 'João Pessoa'
    },
    {
        username: 'thalyson.felicio@academico.ifpb.edu.br',
        password: 'thalyson123',
        name: 'Thalyson Felício',
        role: 'Administrador',
        department: 'Secretaria',
        email: 'thalyson.felicio@ifpb.edu.br',
        phone: '(83) 94444-4444',
        campus: 'João Pessoa'
    }
];

export { users };

const validarLogin = (username, password) => {
    return users.some(user => user.username === username && user.password === password);
};

const gerarLoginHTML = () => {
    return `
    <div class="w-full max-w-md bg-[#121212] px-8 py-10 rounded-lg border border-[#333333] text-center shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
        <!-- CORREÇÃO: Caminho do logo (da pasta 'public') -->
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

const renderLogin = () => {
    document.body.innerHTML = gerarLoginHTML();

    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    togglePassword.addEventListener('click', function () {
        const isPassword = passwordInput.type === 'password';
        passwordInput.type = isPassword ? 'text' : 'password';
        togglePassword.setAttribute('aria-label', isPassword ? 'Ocultar senha' : 'Mostrar senha');
    });

    document.getElementById('loginButton').addEventListener('click', function () {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (validarLogin(username, password)) {
            localStorage.setItem('userEmail', username);// guarda o email do usuario logado
            window.location.href = 'index.html'; 
        } else {
            alert('Credenciais inválidas. Tente novamente.');// fazer algo melhor depois
        }
    });
};

document.addEventListener('DOMContentLoaded', renderLogin);