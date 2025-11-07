/**
 * @param {string} elementId 
 * @param {string} filePath 
 */
async function loadComponent(elementId, filePath) {
    const targetElement = document.getElementById(elementId);
    
    if (!targetElement) {
        console.error(`Elemento alvo não encontrado: #${elementId}`);
        return;
    }

    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`Erro ao carregar ${filePath}: ${response.statusText}`);
        
        const html = await response.text();
        targetElement.innerHTML = html;

    } catch (error) {
        console.error('Erro no carregamento do componente:', error);
        targetElement.innerHTML = '<p class="text-red-500">Erro ao carregar componente.</p>';
    }
}

document.addEventListener("DOMContentLoaded", () => {

    loadComponent('sidebar-container', '/templates/components/sidebar.html');
    loadComponent('header-container', '/templates/components/header.html');
});