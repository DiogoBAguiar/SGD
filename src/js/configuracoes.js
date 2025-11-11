
document.getElementById("homeBtn").addEventListener("click", () => {
  window.location.href = "./dashboard.html";
});


const openPrazoModal = document.getElementById("openPrazoModal");
const prazoModal = document.getElementById("prazoModal");
const closePrazoModal = document.getElementById("closePrazoModal");

openPrazoModal.addEventListener("click", () => {
  prazoModal.classList.remove("hidden");
});

closePrazoModal.addEventListener("click", () => {
  prazoModal.classList.add("hidden");
});


document.getElementById("saveBtn").addEventListener("click", () => {
  const settings = {
    email: document.getElementById("emailNotifications").checked,
    system: document.getElementById("systemNotifications").checked,
    deadlineReminder: document.getElementById("deadlineReminder").value,
  };
  localStorage.setItem("sgd_settings", JSON.stringify(settings));
  alert("Configurações salvas com sucesso!");
  prazoModal.classList.add("hidden");
});


document.getElementById("resetBtn").addEventListener("click", () => {
  localStorage.removeItem("sgd_settings");
  alert("Configurações restauradas ao padrão.");
  location.reload();
});


window.addEventListener("DOMContentLoaded", () => {
  const saved = JSON.parse(localStorage.getItem("sgd_settings"));
  if (saved) {
    document.getElementById("emailNotifications").checked = saved.email;
    document.getElementById("systemNotifications").checked = saved.system;
    document.getElementById("deadlineReminder").value = saved.deadlineReminder;
  }
});
