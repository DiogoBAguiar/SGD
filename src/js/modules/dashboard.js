/**
 * Renderiza o gráfico de linhas (simulado com canvas 2D) para defesas mensais.
 */
function renderizarGraficoDefesasMensais(labels, data) {
    const canvas = document.getElementById('defesasMensaisChart');
    if (!canvas) {
        console.warn("Elemento 'defesasMensaisChart' não encontrado.");
        return;
    }
    const ctx = canvas.getContext('2d');

    const corGrafico = '#C0A040';
    const corGrade = '#333';
    const corTexto = '#AAAAAA';
    const fonteFamilia = 'Poppins'; // Assumindo que Poppins está carregada

    const desenhar = () => {
        if (!canvas.parentElement) return;
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
        const width = canvas.width;
        const height = canvas.height;
        const padding = 50;
        const larguraGrafico = width - padding * 2;
        const alturaGrafico = height - padding * 2;
        const larguraBarra = larguraGrafico / (data.length * 2); // Ajustado para barras
        const valorMaximo = Math.max(...data);

        ctx.clearRect(0, 0, width, height);

        // Eixo Y e Grades
        ctx.strokeStyle = corGrade;
        ctx.fillStyle = corTexto;
        ctx.font = `12px ${fonteFamilia}`;
        const ticksEixoY = 5;
        for (let i = 0; i <= ticksEixoY; i++) {
            const valor = Math.round((valorMaximo / ticksEixoY) * i);
            const y = alturaGrafico - (valor / valorMaximo) * alturaGrafico + padding;
            
            ctx.beginPath();
            ctx.moveTo(padding, y);
            ctx.lineTo(width - padding, y);
            ctx.stroke();

            ctx.fillText(valor, padding - 30, y + 4);
        }

        // Eixo X (Labels)
        ctx.textAlign = 'center';
        labels.forEach((label, i) => {
            const x = padding + i * (larguraGrafico / data.length) + (larguraGrafico / data.length) / 2;
            ctx.fillText(label, x, height - padding + 20);
        });

        // Barras
        ctx.fillStyle = corGrafico;
        data.forEach((valor, i) => {
            const alturaBarra = (valor / valorMaximo) * alturaGrafico;
            // Cálculo X para barras centralizadas
            const x = padding + i * (larguraGrafico / data.length) + (larguraGrafico / data.length - larguraBarra) / 2;
            const y = alturaGrafico - alturaBarra + padding;
            ctx.fillRect(x, y, larguraBarra, alturaBarra);
        });
    };

    desenhar();
    // Re-desenha o gráfico se a janela for redimensionada
    window.addEventListener('resize', desenhar);
}

/**
 * Renderiza o gráfico de rosca (simulado com canvas 2D) para status de alunos.
 */
function renderizarGraficoStatusAlunos(labels, data, colors) {
    const canvas = document.getElementById('statusAlunosChart');
    const legendContainer = document.getElementById('statusAlunosLegend');
    if (!canvas || !legendContainer) {
        console.warn("Elementos 'statusAlunosChart' ou 'statusAlunosLegend' não encontrados.");
        return;
    }
    const ctx = canvas.getContext('2d');

    const desenhar = () => {
        if (!canvas.parentElement) return;
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
        const width = canvas.width;
        const height = canvas.height;
        const centerX = width / 2;
        const centerY = height / 2;
        const radius = Math.min(width, height) / 2 - 10;
        const cutoutRadius = radius * 0.7; // Raio do buraco central (Rosca)

        let startAngle = -0.5 * Math.PI; // Começa no topo
        const total = data.reduce((soma, val) => soma + val, 0);

        // Desenha as fatias
        data.forEach((valor, i) => {
            const sliceAngle = (valor / total) * 2 * Math.PI;
            const endAngle = startAngle + sliceAngle;
            
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, radius, startAngle, endAngle);
            ctx.closePath();
            ctx.fillStyle = colors[i];
            ctx.fill();
            
            startAngle = endAngle;
        });

        // Desenha o buraco central
        ctx.beginPath();
        ctx.arc(centerX, centerY, cutoutRadius, 0, 2 * Math.PI);
        ctx.fillStyle = '#1F1F1F'; // Cor do fundo do card
        ctx.fill();
    };

    desenhar();
    window.addEventListener('resize', desenhar);

    // Popula a legenda
    legendContainer.innerHTML = '';
    labels.forEach((label, i) => {
        const percentual = data[i];
        const cor = colors[i];
        
        const itemLegenda = `
            <p class="flex items-center">
                <span class="w-3 h-3 rounded-full mr-2" style="background-color: ${cor};"></span>
                ${label} (${percentual}%)
            </p>
        `;
        legendContainer.innerHTML += itemLegenda;
    });
}

/**
 * Popula a lista de solicitações recentes.
 */
function popularListaSolicitacoes(solicitacoes) {
    const listaContainer = document.getElementById('listaSolicitacoes');
    if (!listaContainer) return;

    listaContainer.innerHTML = '';
    
    solicitacoes.forEach(sol => {
        const itemHTML = `
            <div class="flex items-center justify-between p-3 bg-[#121212] rounded-lg border border-[#333] hover:border-[#C0A040] transition-colors">
                <div>
                    <p class="text-sm font-medium text-[#E0E0E0]">${sol.nome}</p>
                    <p class="text-xs text-[#AAAAAA]">${sol.curso}</p>
                </div>
                <span class="text-xs text-[#AAAAAA]">${sol.dias}d atrás</span>
            </div>
        `;
        listaContainer.innerHTML += itemHTML;
    });
}

/**
 * Função de inicialização do Dashboard.
 */
function inicializarDashboard() {
    // Verificamos se os elementos principais do dashboard existem
    if (!document.getElementById('pending-requests') || !document.getElementById('defesasMensaisChart')) {
        // Se não existirem, esperamos o DOM (Plano B)
        console.warn("Elementos do Dashboard não encontrados. Aguardando DOMContentLoaded.");
        document.addEventListener('DOMContentLoaded', executarLogicaDashboard);
    } else {
        // Se existirem, executamos imediatamente
        executarLogicaDashboard();
    }
}

/**
 * Contém toda a lógica que estava no DOMContentLoaded.
 */
function executarLogicaDashboard() {
    // Dados estáticos (mock)
    const solicitacoesPendentes = 5;
    const defesasAgendadas = 2;
    const documentosGerados = 42;
    const quantidadeProfessores = 12;

    const dadosDefesas = [2, 3, 5, 4, 7, 8, 5, 6, 9, 10, 4, 0];
    const labelsDefesas = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

    const dadosStatusAlunos = [15, 60, 10, 15];
    const labelsStatusAlunos = ['Aguardando Orientação', 'Em Orientação', 'Agendamento Pendente', 'Defendido / Concluído'];
    const coresStatusAlunos = ['#EF4444', '#3B82F6', '#E6C850', '#22C55E'];

    const solicitacoes = [
        { nome: 'Ana Clara Silva', curso: 'Eng. de Software', dias: 1 },
        { nome: 'Bruno Costa', curso: 'Ciência da Computação', dias: 1 },
        { nome: 'Carla Mendes', curso: 'Sistemas de Informação', dias: 2 },
        { nome: 'Daniel Oliveira', curso: 'Eng. de Software', dias: 3 },
        { nome: 'Elisa Fernandes', curso: 'Ciência da Computação', dias: 3 }
    ];

    // Preenche os cards de estatísticas
    const pendingEl = document.getElementById('pending-requests');
    const scheduledEl = document.getElementById('scheduled-defenses');
    const generatedEl = document.getElementById('generated-docs');
    const professorEl = document.getElementById('professor-count');

    if (pendingEl) pendingEl.textContent = solicitacoesPendentes;
    if (scheduledEl) scheduledEl.textContent = defesasAgendadas;
    if (generatedEl) generatedEl.textContent = documentosGerados;
    if (professorEl) professorEl.textContent = quantidadeProfessores;

    // Renderiza os gráficos
    renderizarGraficoDefesasMensais(labelsDefesas, dadosDefesas);
    renderizarGraficoStatusAlunos(labelsStatusAlunos, dadosStatusAlunos, coresStatusAlunos);

    // Popula a lista
    popularListaSolicitacoes(solicitacoes);

    // Define os links (Redundante se o HTML já tiver, mas garante)
    const linkSolicitacoes = document.getElementById('link-solicitacoes');
    const linkAgenda = document.getElementById('link-agenda');
    const linkDocumentos = document.getElementById('link-documentos');
    const linkProfessores = document.getElementById('link-professores');
    const linkVerSolicitacoes = document.getElementById('link-ver-solicitacoes');

    if (linkSolicitacoes) linkSolicitacoes.href = 'solicitacao.html';
    if (linkAgenda) linkAgenda.href = 'agenda.html';
    if (linkDocumentos) linkDocumentos.href = 'documentos.html';
    if (linkProfessores) linkProfessores.href = 'professores.html';
    if (linkVerSolicitacoes) linkVerSolicitacoes.href = 'solicitacao.html';
}

// --- Fim da Refatoração ---
inicializarDashboard();