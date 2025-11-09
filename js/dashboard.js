document.addEventListener('DOMContentLoaded', () => {
    initDefesasMensaisChart();
    initStatusAlunosChart();
    populateListaSolicitacoes();
});

function initDefesasMensaisChart() {
    const ctx = document.getElementById('defesasMensaisChart');
    if (!ctx) return;

    const chartData = {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        datasets: [{
            label: 'Nº de Defesas',
            data: [2, 3, 5, 4, 7, 8, 5, 6, 9, 10, 4, 0],
            backgroundColor: '#C0A040',
            borderColor: '#E6C850',
            borderWidth: 1,
            borderRadius: 4,
            hoverBackgroundColor: '#E6C850'
        }]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { 
                display: false
            },
            tooltip: {
                backgroundColor: '#1F1F1F', 
                titleColor: '#E0E0E0',
                bodyColor: '#AAAAAA',
                borderColor: '#333',
                borderWidth: 1,
                titleFont: { family: 'Poppins' },
                bodyFont: { family: 'Poppins' }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: { 
                    color: '#333'
                },
                ticks: { 
                    color: '#AAAAAA',
                    font: { family: 'Poppins' } 
                }
            },
            x: {
                grid: { 
                    display: false
                },
                ticks: { 
                    color: '#AAAAAA',
                    font: { family: 'Poppins' } 
                }
            }
        }
    };

    new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: options
    });
}

function initStatusAlunosChart() {
    const ctx = document.getElementById('statusAlunosChart');
    const legendContainer = document.getElementById('statusAlunosLegend');
    if (!ctx || !legendContainer) return;

    const data = {
        labels: [
            'Aguardando Orientação',
            'Em Orientação',
            'Agendamento Pendente',
            'Defendido / Concluído'
        ],
        datasets: [{
            data: [15, 60, 10, 15],
            backgroundColor: [
                '#EF4444',
                '#3B82F6',
                '#E6C850',
                '#22C55E'
            ],
            borderColor: '#1F1F1F',
            borderWidth: 4,
            hoverOffset: 8
        }]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
            legend: { 
                display: false
            },
            tooltip: {
                backgroundColor: '#1F1F1F',
                titleColor: '#E0E0E0',
                bodyColor: '#AAAAAA',
                borderColor: '#333',
                borderWidth: 1,
                titleFont: { family: 'Poppins' },
                bodyFont: { family: 'Poppins' },
                callbacks: {
                    label: function(context) {
                        return `${context.label}: ${context.raw}%`;
                    }
                }
            }
        }
    };

    new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: options
    });

    legendContainer.innerHTML = '';
    data.labels.forEach((label, i) => {
        const percentage = data.datasets[0].data[i];
        const color = data.datasets[0].backgroundColor[i];
        
        const legendItem = `
            <p class="flex items-center">
                <span class="w-3 h-3 rounded-full mr-2" style="background-color: ${color};"></span>
                ${label} (${percentage}%)
            </p>
        `;
        legendContainer.innerHTML += legendItem;
    });
}

function populateListaSolicitacoes() {
    const listaContainer = document.getElementById('listaSolicitacoes');
    if (!listaContainer) return;

    const solicitacoes = [
        { nome: 'Ana Clara Silva', curso: 'Eng. de Software', dias: 1 },
        { nome: 'Bruno Costa', curso: 'Ciência da Computação', dias: 1 },
        { nome: 'Carla Mendes', curso: 'Sistemas de Informação', dias: 2 },
        { nome: 'Daniel Oliveira', curso: 'Eng. de Software', dias: 3 },
        { nome: 'Elisa Fernandes', curso: 'Ciência da Computação', dias: 3 }
    ];

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