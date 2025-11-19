import { fecharModal, configurarListenersModal } from '@js/modules/funcoesGerais.js';
function salvarConfiguracoes() {
    const settings = {
        email: document.getElementById("emailNotifications").checked,
        system: document.getElementById("systemNotifications").checked,
        deadlineReminder: document.getElementById("deadlineReminder").value,
    };
    localStorage.setItem("sgd_settings", JSON.stringify(settings));
    console.info("Configurações salvas com sucesso!");
    fecharModal('prazoModal');
}

function resetarConfiguracoes() {
    localStorage.removeItem("sgd_settings");
    console.info("Configurações restauradas ao padrão.");
    location.reload();
}

function carregarConfiguracoesSalvas() {
    const saved = JSON.parse(localStorage.getItem("sgd_settings"));
    if (saved) {
        const emailNotifications = document.getElementById("emailNotifications");
        const systemNotifications = document.getElementById("systemNotifications");
        const deadlineReminder = document.getElementById("deadlineReminder");

        if (emailNotifications) emailNotifications.checked = saved.email;
        if (systemNotifications) systemNotifications.checked = saved.system;
        if (deadlineReminder) deadlineReminder.value = saved.deadlineReminder;
    }
}
function inicializarConfiguracoes() {
    const homeBtn = document.getElementById("homeBtn");
    const saveBtn = document.getElementById("saveBtn");
    const resetBtn = document.getElementById("resetBtn");
    const openPrazoModalBtn = document.getElementById("openPrazoModal");

    if (homeBtn && saveBtn && resetBtn && openPrazoModalBtn) {

        homeBtn.addEventListener("click", () => {
            window.location.href = "./index.html";
        });

        configurarListenersModal({
            idModal: 'prazoModal',
            idBotaoAbrir: 'openPrazoModal',
            idsBotoesFechar: ['closePrazoModal'],
            fecharAoClicarFora: true
        });

        saveBtn.addEventListener("click", salvarConfiguracoes);
        resetBtn.addEventListener("click", resetarConfiguracoes);

        carregarConfiguracoesSalvas();

    } else {
        console.warn("Elementos de 'configuracoes.js' não encontrados. Aguardando DOMContentLoaded.");
        document.addEventListener("DOMContentLoaded", () => {
            const homeBtn = document.getElementById("homeBtn");
            const saveBtn = document.getElementById("saveBtn");
            const resetBtn = document.getElementById("resetBtn");

            if (homeBtn) {
                homeBtn.addEventListener("click", () => {
                    window.location.href = "./index.html";
                });
            }

            configurarListenersModal({
                idModal: 'prazoModal',
                idBotaoAbrir: 'openPrazoModal',
                idsBotoesFechar: ['closePrazoModal'],
                fecharAoClicarFora: true
            });

            if (saveBtn) saveBtn.addEventListener("click", salvarConfiguracoes);
            if (resetBtn) resetBtn.addEventListener("click", resetarConfiguracoes);

            carregarConfiguracoesSalvas();
        });
    }
}

const openPermissionsModal = document.getElementById("openPermissionsModal");
const permissionsModal = document.getElementById("permissionsModal");
const closePermissionsModal = document.getElementById("closePermissionsModal");
const cancelPermissions = document.getElementById("cancelPermissions");
const permissionsForm = document.getElementById("permissionsForm");


openPermissionsModal.addEventListener("click", () => {
    permissionsModal.classList.remove("hidden");
});


closePermissionsModal.addEventListener("click", () => {
    permissionsModal.classList.add("hidden");
});
cancelPermissions.addEventListener("click", () => {
    permissionsModal.classList.add("hidden");
});


permissionsForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const settings = {
        alunoEnviarProrrogacao: document.getElementById("alunoEnviarProrrogacao").checked,
        alunoAgendarDefesa: document.getElementById("alunoAgendarDefesa").checked,
        orientadorCriarBanca: document.getElementById("orientadorCriarBanca").checked,
        orientadorEditarNotas: document.getElementById("orientadorEditarNotas").checked
    };

    localStorage.setItem("sgd_permissions", JSON.stringify(settings));

    alert("Permissões salvas com sucesso!");
    permissionsModal.classList.add("hidden");
});


window.addEventListener("DOMContentLoaded", () => {
    const saved = JSON.parse(localStorage.getItem("sgd_permissions"));
    if (!saved) return;

    document.getElementById("alunoEnviarProrrogacao").checked = saved.alunoEnviarProrrogacao;
    document.getElementById("alunoAgendarDefesa").checked = saved.alunoAgendarDefesa;
    document.getElementById("orientadorCriarBanca").checked = saved.orientadorCriarBanca;
    document.getElementById("orientadorEditarNotas").checked = saved.orientadorEditarNotas;
});


inicializarConfiguracoes();