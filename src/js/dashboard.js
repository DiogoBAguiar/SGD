document.addEventListener('DOMContentLoaded', () => {
    // Dados mockados
    const pendingRequests = 5;
    const scheduledDefenses = 2;
    const generatedDocs = 42;
    const professorCount = 12;

    const defesasData = [2, 3, 5, 4, 7, 8, 5, 6, 9, 10, 4, 0];
    const defesasLabels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

    const statusAlunosData = [15, 60, 10, 15];
    const statusAlunosLabels = ['Aguardando Orientação', 'Em Orientação', 'Agendamento Pendente', 'Defendido / Concluído'];
    const statusAlunosColors = ['#EF4444', '#3B82F6', '#E6C850', '#22C55E'];

    const solicitacoes = [
        { nome: 'Ana Clara Silva', curso: 'Eng. de Software', dias: 1 },
        { nome: 'Bruno Costa', curso: 'Ciência da Computação', dias: 1 },
        { nome: 'Carla Mendes', curso: 'Sistemas de Informação', dias: 2 },
        { nome: 'Daniel Oliveira', curso: 'Eng. de Software', dias: 3 },
        { nome: 'Elisa Fernandes', curso: 'Ciência da Computação', dias: 3 }
    ];

    // Atualizar cards
    document.getElementById('pending-requests').textContent = pendingRequests;
    document.getElementById('scheduled-defenses').textContent = scheduledDefenses;
    document.getElementById('generated-docs').textContent = generatedDocs;
    document.getElementById('professor-count').textContent = professorCount;

    // Renderizar gráficos
    renderDefesasMensaisChart(defesasLabels, defesasData);
    renderStatusAlunosChart(statusAlunosLabels, statusAlunosData, statusAlunosColors);

    // Popular lista de solicitações
    populateListaSolicitacoes(solicitacoes);

    // Links
    document.getElementById('link-solicitacoes').href = 'solicitacao.html';
    document.getElementById('link-agenda').href = 'agenda.html';
    document.getElementById('link-documentos').href = 'documentos.html';
    document.getElementById('link-professores').href = 'professores.html';
    document.getElementById('link-ver-solicitacoes').href = 'solicitacao.html';
});

function renderDefesasMensaisChart(labels, data) {
    const canvas = document.getElementById('defesasMensaisChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const chartColor = '#C0A040';
    const gridColor = '#333';
    const textColor = '#AAAAAA';
    const fontFamily = 'Poppins';

    const draw = () => {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
        const width = canvas.width;
        const height = canvas.height;
        const padding = 50;
        const chartWidth = width - padding * 2;
        const chartHeight = height - padding * 2;
        const barWidth = chartWidth / (data.length * 2);
        const maxValue = Math.max(...data);

        ctx.clearRect(0, 0, width, height);

        ctx.strokeStyle = gridColor;
        ctx.fillStyle = textColor;
        ctx.font = `12px ${fontFamily}`;
        const yAxisTicks = 5;
        for (let i = 0; i <= yAxisTicks; i++) {
            const value = Math.round((maxValue / yAxisTicks) * i);
            const y = chartHeight - (value / maxValue) * chartHeight + padding;
            
            ctx.beginPath();
            ctx.moveTo(padding, y);
            ctx.lineTo(width - padding, y);
            ctx.stroke();

            ctx.fillText(value, padding - 30, y + 4);
        }

        ctx.textAlign = 'center';
        labels.forEach((label, i) => {
            const x = padding + i * (chartWidth / data.length) + (chartWidth / data.length) / 2;
            ctx.fillText(label, x, height - padding + 20);
        });

        ctx.fillStyle = chartColor;
        data.forEach((value, i) => {
            const barHeight = (value / maxValue) * chartHeight;
            const x = padding + i * (chartWidth / data.length) + (chartWidth / data.length - barWidth) / 2;
            const y = chartHeight - barHeight + padding;
            ctx.fillRect(x, y, barWidth, barHeight);
        });
    };

    draw();
    window.addEventListener('resize', draw);
}

function renderStatusAlunosChart(labels, data, colors) {
    const canvas = document.getElementById('statusAlunosChart');
    const legendContainer = document.getElementById('statusAlunosLegend');
    if (!canvas || !legendContainer) return;
    const ctx = canvas.getContext('2d');

    const draw = () => {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
        const width = canvas.width;
        const height = canvas.height;
        const centerX = width / 2;
        const centerY = height / 2;
        const radius = Math.min(width, height) / 2 - 10;
        const cutoutRadius = radius * 0.7;

        let startAngle = -0.5 * Math.PI;
        const total = data.reduce((sum, val) => sum + val, 0);

        data.forEach((value, i) => {
            const sliceAngle = (value / total) * 2 * Math.PI;
            const endAngle = startAngle + sliceAngle;
            
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, radius, startAngle, endAngle);
            ctx.closePath();
            ctx.fillStyle = colors[i];
            ctx.fill();
            
            startAngle = endAngle;
        });

        ctx.beginPath();
        ctx.arc(centerX, centerY, cutoutRadius, 0, 2 * Math.PI);
        ctx.fillStyle = '#1F1F1F';
        ctx.fill();
    };

    draw();
    window.addEventListener('resize', draw);

    legendContainer.innerHTML = '';
    labels.forEach((label, i) => {
        const percentage = data[i];
        const color = colors[i];
        
        const legendItem = `
            <p class="flex items-center">
                <span class="w-3 h-3 rounded-full mr-2" style="background-color: ${color};"></span>
                ${label} (${percentage}%)
            </p>
        `;
        legendContainer.innerHTML += legendItem;
    });
}

function populateListaSolicitacoes(solicitacoes) {
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