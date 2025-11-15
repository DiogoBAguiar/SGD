export let listaProfessores = [
    { id: 1, nome: "Damires Yluska", email: "damires@ifpb.edu.br", lattes: "http://lattes.cnpq.br/ex1", instituicao: "IFPB", titulacao: "Doutorado", tipo: "Permanente", areas: "Redes de Computadores, Segurança da Informação", ativo: true },
    { id: 2, nome: "Francisco Dantas", email: "dantas@ifpb.edu.br", lattes: "", instituicao: "IFPB", titulacao: "Mestrado", tipo: "Colaborador", areas: "Engenharia de Software, Banco de Dados", ativo: true },
    { id: 3, nome: "Valéria Maria", email: "valeria.maria@ufpb.br", lattes: "http://lattes.cnpq.br/ex2", instituicao: "UFPB", titulacao: "Doutorado", tipo: "Visitante", areas: "Inteligência Artificial, Data Science", ativo: false },
    { id: 4, nome: "Ana Paula Silva", email: "ana.paula@ifpb.edu.br", lattes: "http://lattes.cnpq.br/ex4", instituicao: "IFPB", titulacao: "Doutorado", tipo: "Permanente", areas: "Banco de Dados, Big Data", ativo: true },
    { id: 5, nome: "Carlos Eduardo", email: "carlos.edu@ifpb.edu.br", lattes: "http://lattes.cnpq.br/ex5", instituicao: "IFPB", titulacao: "Mestrado", tipo: "Colaborador", areas: "Desenvolvimento Web, Front-end", ativo: true },
    { id: 6, nome: "Fernanda Oliveira", email: "fernanda.o@ufpb.edu.br", lattes: "http://lattes.cnpq.br/ex6", instituicao: "UFPB", titulacao: "Doutorado", tipo: "Visitante", areas: "Machine Learning, Visão Computacional", ativo: true },
    { id: 7, nome: "Ricardo Santos", email: "ricardo.s@ifpb.edu.br", lattes: "http://lattes.cnpq.br/ex7", instituicao: "IFPB", titulacao: "Doutorado", tipo: "Permanente", areas: "Redes sem Fio, IoT", ativo: true },
    { id: 8, nome: "Juliana Costa", email: "juliana.c@ifpb.edu.br", lattes: "", instituicao: "IFPB", titulacao: "Mestrado", tipo: "Colaborador", areas: "Engenharia de Requisitos, Qualidade de Software", ativo: false },
    { id: 9, nome: "Marcos Vinicius", email: "marcos.v@uepb.edu.br", lattes: "http://lattes.cnpq.br/ex9", instituicao: "UEPB", titulacao: "Doutorado", tipo: "Visitante", areas: "Processamento de Linguagem Natural", ativo: true },
    { id: 10, nome: "Patrícia Lima", email: "patricia.l@ifpb.edu.br", lattes: "http://lattes.cnpq.br/ex10", instituicao: "IFPB", titulacao: "Doutorado", tipo: "Permanente", areas: "Criptografia, Segurança de Redes", ativo: true },
    { id: 11, nome: "Gustavo Henrique", email: "gustavo.h@ifpb.edu.br", lattes: "http://lattes.cnpq.br/ex11", instituicao: "IFPB", titulacao: "Mestrado", tipo: "Colaborador", areas: "Desenvolvimento Mobile, Android", ativo: true },
    { id: 12, nome: "Larissa Mendes", email: "larissa.m@ufcg.edu.br", lattes: "http://lattes.cnpq.br/ex12", instituicao: "UFCG", titulacao: "Doutorado", tipo: "Visitante", areas: "Ciência de Dados, Estatística Aplicada", ativo: true },
    { id: 13, nome: "Felipe Rocha", email: "felipe.r@ifpb.edu.br", lattes: "http://lattes.cnpq.br/ex13", instituicao: "IFPB", titulacao: "Doutorado", tipo: "Permanente", areas: "Sistemas Distribuídos, Computação em Nuvem", ativo: true },
    { id: 14, nome: "Camila Ferreira", email: "camila.f@ifpb.edu.br", lattes: "", instituicao: "IFPB", titulacao: "Mestrado", tipo: "Colaborador", areas: "Interface Humano-Computador (IHC), UX Design", ativo: false },
    { id: 15, nome: "Rodrigo Almeida", email: "rodrigo.a@unipe.edu.br", lattes: "http://lattes.cnpq.br/ex15", instituicao: "UNIPÊ", titulacao: "Doutorado", tipo: "Visitante", areas: "Jogos Digitais, Realidade Virtual", ativo: true },
    { id: 16, nome: "Beatriz Sousa", email: "beatriz.s@ifpb.edu.br", lattes: "http://lattes.cnpq.br/ex16", instituicao: "IFPB", titulacao: "Doutorado", tipo: "Permanente", areas: "Engenharia de Software, Métodos Ágeis", ativo: true },
    { id: 17, nome: "Thiago Silva", email: "thiago.s@ifpb.edu.br", lattes: "http://lattes.cnpq.br/ex17", instituicao: "IFPB", titulacao: "Mestrado", tipo: "Colaborador", areas: "Redes de Computadores, Administração de Sistemas", ativo: true },
    { id: 18, nome: "Mariana Costa", email: "mariana.c@ufpb.edu.br", lattes: "http://lattes.cnpq.br/ex18", instituicao: "UFPB", titulacao: "Doutorado", tipo: "Visitante", areas: "Inteligência Artificial, Redes Neurais", ativo: false },
    { id: 19, nome: "João Pedro", email: "joao.p@ifpb.edu.br", lattes: "http://lattes.cnpq.br/ex19", instituicao: "IFPB", titulacao: "Doutorado", tipo: "Permanente", areas: "Segurança da Informação, Forense Digital", ativo: true },
    { id: 20, nome: "Isabela Santos", email: "isabela.s@ifpb.edu.br", lattes: "", instituicao: "IFPB", titulacao: "Mestrado", tipo: "Colaborador", areas: "Desenvolvimento Web, Full-stack", ativo: true },
    { id: 21, nome: "Lucas Oliveira", email: "lucas.o@uepb.edu.br", lattes: "http://lattes.cnpq.br/ex21", instituicao: "UEPB", titulacao: "Doutorado", tipo: "Visitante", areas: "Ciência de Dados, Visualização de Dados", ativo: true },
    { id: 22, nome: "Amanda Lima", email: "amanda.l@ifpb.edu.br", lattes: "http://lattes.cnpq.br/ex22", instituicao: "IFPB", titulacao: "Doutorado", tipo: "Permanente", areas: "Banco de Dados, NoSQL", ativo: true },
    { id: 23, nome: "Rafael Souza", email: "rafael.s@ifpb.edu.br", lattes: "http://lattes.cnpq.br/ex23", instituicao: "IFPB", titulacao: "Mestrado", tipo: "Colaborador", areas: "Engenharia de Software, Testes Automatizados", ativo: false },
    { id: 24, nome: "Gabriela Rocha", email: "gabriela.r@ufcg.edu.br", lattes: "http://lattes.cnpq.br/ex24", instituicao: "UFCG", titulacao: "Doutorado", tipo: "Visitante", areas: "Sistemas Distribuídos, Blockchain", ativo: true },
    { id: 25, nome: "Daniel Ferreira", email: "daniel.f@ifpb.edu.br", lattes: "http://lattes.cnpq.br/ex25", instituicao: "IFPB", titulacao: "Doutorado", tipo: "Permanente", areas: "Redes de Computadores, SDN", ativo: true },
    { id: 26, nome: "Sofia Almeida", email: "sofia.a@ifpb.edu.br", lattes: "", instituicao: "IFPB", titulacao: "Mestrado", tipo: "Colaborador", areas: "IHC, Acessibilidade Digital", ativo: true },
    { id: 27, nome: "Bruno Costa", email: "bruno.c@unipe.edu.br", lattes: "http://lattes.cnpq.br/ex27", instituicao: "UNIPÊ", titulacao: "Doutorado", tipo: "Visitante", areas: "Jogos Digitais, Gamificação", ativo: false },
    { id: 28, nome: "Laura Santos", email: "laura.s@ifpb.edu.br", lattes: "http://lattes.cnpq.br/ex28", instituicao: "IFPB", titulacao: "Doutorado", tipo: "Permanente", areas: "Inteligência Artificial, Sistemas Especialistas", ativo: true },
    { id: 29, nome: "André Silva", email: "andre.s@ifpb.edu.br", lattes: "http://lattes.cnpq.br/ex29", instituicao: "IFPB", titulacao: "Mestrado", tipo: "Colaborador", areas: "Desenvolvimento Mobile, iOS", ativo: true },
    { id: 30, nome: "Clara Oliveira", email: "clara.o@ufpb.edu.br", lattes: "http://lattes.cnpq.br/ex30", instituicao: "UFPB", titulacao: "Doutorado", tipo: "Visitante", areas: "Segurança da Informação, Criptografia Aplicada", ativo: true },
    { id: 31, nome: "Eduardo Lima", email: "eduardo.l@ifpb.edu.br", lattes: "http://lattes.cnpq.br/ex31", instituicao: "IFPB", titulacao: "Doutorado", tipo: "Permanente", areas: "Ciência de Dados, Mineração de Dados", ativo: true },
    { id: 32, nome: "Vitória Souza", email: "vitoria.s@ifpb.edu.br", lattes: "", instituicao: "IFPB", titulacao: "Mestrado", tipo: "Colaborador", areas: "Engenharia de Software, Arquitetura de Software", ativo: false },
    { id: 33, nome: "Guilherme Rocha", email: "guilherme.r@uepb.edu.br", lattes: "http://lattes.cnpq.br/ex33", instituicao: "UEPB", titulacao: "Doutorado", tipo: "Visitante", areas: "Redes de Computadores, 5G", ativo: true },
    { id: 34, nome: "Helena Martins", email: "helena.m@ifpb.edu.br", lattes: "http://lattes.cnpq.br/ex34", instituicao: "IFPB", titulacao: "Doutorado", tipo: "Permanente", areas: "Informática na Educação, Pensamento Computacional", ativo: true },
    { id: 35, nome: "Samuel Alves", email: "samuel.a@ifpb.edu.br", lattes: "http://lattes.cnpq.br/ex35", instituicao: "IFPB", titulacao: "Mestrado", tipo: "Colaborador", areas: "DevOps, Infraestrutura Ágil", ativo: true },
    { id: 36, nome: "Lorena Dias", email: "lorena.d@ufcg.edu.br", lattes: "http://lattes.cnpq.br/ex36", instituicao: "UFCG", titulacao: "Doutorado", tipo: "Visitante", areas: "Engenharia de Software, Linhas de Produto", ativo: true },
    { id: 37, nome: "Vitor Hugo", email: "vitor.h@ifpb.edu.br", lattes: "http://lattes.cnpq.br/ex37", instituicao: "IFPB", titulacao: "Doutorado", tipo: "Permanente", areas: "Visão Computacional, Processamento de Imagens", ativo: true },
    { id: 38, nome: "Manuela Ribeiro", email: "manuela.r@ifpb.edu.br", lattes: "", instituicao: "IFPB", titulacao: "Mestrado", tipo: "Colaborador", areas: "Gestão de Projetos de TI, Scrum", ativo: true },
    { id: 39, nome: "Davi Lucca", email: "davi.l@ufpb.edu.br", lattes: "http://lattes.cnpq.br/ex39", instituicao: "UFPB", titulacao: "Doutorado", tipo: "Visitante", areas: "Bioinformática, Computação Evolutiva", ativo: false },
    { id: 40, nome: "Sophia Nunes", email: "sophia.n@ifpb.edu.br", lattes: "http://lattes.cnpq.br/ex40", instituicao: "IFPB", titulacao: "Doutorado", tipo: "Permanente", areas: "Interação Humano-Computador, Realidade Aumentada", ativo: true }
];
export let listaSecretarios = [
    { id: 1, nome: "Ana Paula Ribeiro", siape: "1928374", campus: "João Pessoa", email: "ana.ribeiro@ifpb.edu.br", role: "Secretário", ativo: true },
    { id: 2, nome: "Carlos Mendes", siape: "9182736", campus: "Campina Grande", email: "carlos.mendes@ifpb.edu.br", role: "Secretário", ativo: true },
    { id: 3, nome: "Diogo Aguiar", siape: "1020304", campus: "João Pessoa", email: "diogo.aguiar@ifpb.edu.br", role: "Coordenador", ativo: true },
    { id: 4, nome: "Mariana Lima", siape: "5647382", campus: "João Pessoa", email: "mariana.lima@ifpb.edu.br", role: "Secretário", ativo: false },
    { id: 5, nome: "Ricardo Alves", siape: "7766554", campus: "Cajazeiras", email: "ricardo.alves@ifpb.edu.br", role: "Secretário", ativo: true },
    { id: 6, nome: "Beatriz Costa", siape: "3322110", campus: "Reitoria", email: "beatriz.costa@ifpb.edu.br", role: "Coordenador", ativo: true },
    { id: 7, nome: "Felipe Nogueira", siape: "9876543", campus: "Campina Grande", email: "felipe.nogueira@ifpb.edu.br", role: "Secretário", ativo: true },
    { id: 8, nome: "Luiza Fernandes", siape: "1231234", campus: "João Pessoa", email: "luiza.fernandes@ifpb.edu.br", role: "Secretário", ativo: false },
    { id: 9, nome: "Marcos Oliveira", siape: "4564567", campus: "Cajazeiras", email: "marcos.oliveira@ifpb.edu.br", role: "Coordenador", ativo: true },
    { id: 10, nome: "Júlia Pereira", siape: "7897890", campus: "João Pessoa", email: "julia.pereira@ifpb.edu.br", role: "Secretário", ativo: true },
    { id: 11, nome: "Vitor Santos", siape: "1112223", campus: "Campina Grande", email: "vitor.santos@ifpb.edu.br", role: "Secretário", ativo: true }
];
export let mockAlunos = [

    {
        id: 101, nome: "Diogo Bruno Aguiar", matricula: "2023201405", email: "diogo@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2023, orientador: "Damires Yluska", status: "Qualificado",
        defesa: {
            titulo: "Arquitetura de Microsserviços para Sistemas Acadêmicos",
            data: "2026-12-31", horario: "14:00", local: "Laboratório 3",
            banca: ["Profa. Dra. Damires Yluska (Orientadora)", "Prof. Dr. Francisco Dantas (Examinador Interno)", "Prof. Dr. José Silva (Examinador Externo - UFPB)"]
        }
    },
    {
        id: 102, nome: "Laura Beatriz Souza", matricula: "2024100550", email: "laura@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2024, orientador: "Francisco Dantas", status: "Ativo",
        defesa: null
    },
    {
        id: 103, nome: "Carlos Gabriel Silva", matricula: "2022100100", email: "carlos@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2022, orientador: "Valéria Maria", status: "Defendido",
        defesa: {
            titulo: "Uso de IA na Detecção de Pragas em Lavouras de Algodão",
            data: "2024-02-20", horario: "09:00", local: "Auditório Central",
            banca: ["Profa. Dra. Valéria Maria (Orientadora)", "Prof. Dr. Giovanni Silva (Examinador Interno)", "Dra. Ana Pereira (Embrapa)"]
        }
    },
    {
        id: 104, nome: "Ana Clara Mendes", matricula: "2023100200", email: "ana@aluno.ifpb.edu.br", curso: "Especialização", ingresso: 2023, orientador: "", status: "Trancado",
        defesa: null
    },

    {
        id: 105, nome: "Lucas Pereira Santos", matricula: "2023101101", email: "lucas.p@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2023, orientador: "Damires Yluska", status: "Ativo",
        defesa: null
    },
    {
        id: 106, nome: "Fernanda Lima Costa", matricula: "2021200305", email: "fernanda.l@aluno.ifpb.edu.br", curso: "Doutorado", ingresso: 2021, orientador: "Francisco Dantas", status: "Qualificado",
        defesa: {
            titulo: "Framework para Segurança em IoT Utilizando Blockchain",
            data: "2025-03-10", horario: "10:00", local: "Sala de Videoconferência",
            banca: ["Prof. Dr. Francisco Dantas (Orientador)", "Prof. Dr. Ricardo Santos (Interno)", "Dra. Carla Moraes (UFPE)", "Dr. Marcos Souza (UFRN)"]
        }
    },
    { id: 107, nome: "Rafael Almeida Rocha", matricula: "2024100001", email: "rafael.a@aluno.ifpb.edu.br", curso: "Especialização", ingresso: 2024, orientador: "Valéria Maria", status: "Ativo", defesa: null },
    {
        id: 108, nome: "Patricia Gomes Silva", matricula: "2022200150", email: "patricia.g@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2022, orientador: "Giovanni Silva", status: "Defendido",
        defesa: {
            titulo: "Análise de Sentimentos em Redes Sociais para Prevenção de Burnout",
            data: "2024-06-15", horario: "15:00", local: "Laboratório 1",
            banca: ["Prof. Dr. Giovanni Silva (Orientador)", "Profa. Dra. Damires Yluska (Interna)", "Dr. Pedro Henrique (PsychTech)"]
        }
    },
    { id: 109, nome: "Marcos Vinicius Dias", matricula: "2023200500", email: "marcos.v@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2023, orientador: "Francisco Dantas", status: "Ativo", defesa: null },
    {
        id: 110, nome: "Juliana Martins Ferreira", matricula: "2020100999", email: "juliana.m@aluno.ifpb.edu.br", curso: "Doutorado", ingresso: 2020, orientador: "Damires Yluska", status: "Defendido",
        defesa: {
            titulo: "Modelo Preditivo para Evasão Escolar no Ensino Técnico",
            data: "2024-08-05", horario: "09:00", local: "Auditório Central",
            banca: ["Profa. Dra. Damires Yluska (Orientadora)", "Prof. Dr. Giovanni Silva (Interno)", "Dra. Elena Ferrante (MEC)", "Dr. Saulo Ramos (UFCG)"]
        }
    },
    { id: 111, nome: "Roberto Alves Souza", matricula: "2024100202", email: "roberto.a@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2024, orientador: "Valéria Maria", status: "Ativo", defesa: null },
    { id: 112, nome: "Camila Rocha Ribeiro", matricula: "2023100888", email: "camila.r@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2023, orientador: "Giovanni Silva", status: "Desligado", defesa: null },
    {
        id: 113, nome: "Anderson Silva Costa", matricula: "2022100777", email: "anderson.s@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2022, orientador: "Francisco Dantas", status: "Qualificado",
        defesa: {
            titulo: "Otimização de Consultas em Bancos de Dados NoSQL",
            data: "2024-11-20", horario: "16:00", local: "Sala 102",
            banca: ["Prof. Dr. Francisco Dantas (Orientador)", "Profa. Dra. Ana Paula Silva (Interna)", "Dr. Lucio Mauro (DB Services)"]
        }
    },
    { id: 114, nome: "Beatriz Oliveira Lima", matricula: "2024200111", email: "beatriz.o@aluno.ifpb.edu.br", curso: "Especialização", ingresso: 2024, orientador: "", status: "Ativo", defesa: null },
    { id: 115, nome: "Felipe Santos Cardoso", matricula: "2021100222", email: "felipe.s@aluno.ifpb.edu.br", curso: "Doutorado", ingresso: 2021, orientador: "Valéria Maria", status: "Ativo", defesa: null },
    { id: 116, nome: "Mariana Duarte Nunes", matricula: "2023200333", email: "mariana.d@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2023, orientador: "Giovanni Silva", status: "Trancado", defesa: null },
    { id: 117, nome: "Gustavo Henrique Melo", matricula: "2022200444", email: "gustavo.m@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2022, orientador: "Damires Yluska", status: "Ativo", defesa: null },
    { id: 118, nome: "Larissa Campos Teixeira", matricula: "2024100555", email: "larissa.c@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2024, orientador: "Francisco Dantas", status: "Ativo", defesa: null },
    {
        id: 119, nome: "Rodrigo Farias Araujo", matricula: "2020200666", email: "rodrigo.f@aluno.ifpb.edu.br", curso: "Doutorado", ingresso: 2020, orientador: "Valéria Maria", status: "Defendido",
        defesa: {
            titulo: "Deep Learning aplicado ao Diagnóstico por Imagem",
            data: "2024-01-15", horario: "14:00", local: "Auditório do HU",
            banca: ["Profa. Dra. Valéria Maria (Orientadora)", "Prof. Dr. Giovanni Silva (Interno)", "Dr. Drauzio Varella (USP)", "Dra. Nise Yamaguchi (Einstein)"]
        }
    },
    { id: 120, nome: "Amanda Cruz Figueiredo", matricula: "2023100777", email: "amanda.c@aluno.ifpb.edu.br", curso: "Especialização", ingresso: 2023, orientador: "", status: "Ativo", defesa: null },
    { id: 121, nome: "Paulo Ricardo Mendes", matricula: "2022100888", email: "paulo.r@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2022, orientador: "Giovanni Silva", status: "Ativo", defesa: null },
    { id: 122, nome: "Jessica Bianca Andrade", matricula: "2024200999", email: "jessica.b@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2024, orientador: "Damires Yluska", status: "Ativo", defesa: null },
    { id: 123, nome: "Renato Augusto Lima", matricula: "2021201000", email: "renato.a@aluno.ifpb.edu.br", curso: "Doutorado", ingresso: 2021, orientador: "Francisco Dantas", status: "Qualificado", defesa: { titulo: "Computação Quântica: Algoritmos e Aplicações", data: "2025-06-20", horario: "10:00", local: "Auditório Central", banca: ["Prof. Dr. Francisco Dantas (Orientador)"] } },
    { id: 124, nome: "Vanessa Carvalho Pinto", matricula: "2023201111", email: "vanessa.c@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2023, orientador: "Valéria Maria", status: "Ativo", defesa: null },
    { id: 125, nome: "Thiago Moraes Sales", matricula: "2022201222", email: "thiago.m@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2022, orientador: "Giovanni Silva", status: "Defendido", defesa: { titulo: "Gamificação no Ensino de Lógica de Programação", data: "2023-12-10", horario: "09:00", local: "Lab 5", banca: ["Prof. Dr. Giovanni Silva (Orientador)"] } },
    { id: 126, nome: "Natália Ribeiro Castro", matricula: "2024101333", email: "natalia.r@aluno.ifpb.edu.br", curso: "Especialização", ingresso: 2024, orientador: "", status: "Ativo", defesa: null },
    { id: 127, nome: "Leonardo Freitas Gomes", matricula: "2023101444", email: "leonardo.f@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2023, orientador: "Damires Yluska", status: "Ativo", defesa: null },
    { id: 128, nome: "Isabela Monteiro Cruz", matricula: "2021101555", email: "isabela.m@aluno.ifpb.edu.br", curso: "Doutorado", ingresso: 2021, orientador: "Francisco Dantas", status: "Trancado", defesa: null },
    { id: 129, nome: "Daniel Barbosa Lopes", matricula: "2022101666", email: "daniel.b@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2022, orientador: "Valéria Maria", status: "Qualificado", defesa: { titulo: "Redes Neurais Convolucionais para Reconhecimento Facial", data: "2024-10-05", horario: "14:00", local: "Sala 201", banca: ["Profa. Dra. Valéria Maria (Orientadora)"] } },
    { id: 130, nome: "Priscila Santana Reis", matricula: "2024201777", email: "priscila.s@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2024, orientador: "Giovanni Silva", status: "Ativo", defesa: null },
    { id: 131, nome: "Eduardo Nunes Vieira", matricula: "2023201888", email: "eduardo.n@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2023, orientador: "Damires Yluska", status: "Ativo", defesa: null },
    { id: 132, nome: "Gabriela Torres Maia", matricula: "2020201999", email: "gabriela.t@aluno.ifpb.edu.br", curso: "Doutorado", ingresso: 2020, orientador: "Francisco Dantas", status: "Defendido", defesa: { titulo: "Metodologias Ativas na Pós-Graduação em Computação", data: "2024-04-25", horario: "15:00", local: "Auditório", banca: ["Prof. Dr. Francisco Dantas (Orientador)"] } },
    { id: 133, nome: "Vitor Hugo Ramos", matricula: "2024102000", email: "vitor.h@aluno.ifpb.edu.br", curso: "Especialização", ingresso: 2024, orientador: "", status: "Ativo", defesa: null },
    { id: 134, nome: "Lorena Peixoto Silva", matricula: "2022202111", email: "lorena.p@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2022, orientador: "Valéria Maria", status: "Qualificado", defesa: { titulo: "Ética em IA: Vieses Algorítmicos", data: "2024-11-01", horario: "10:00", local: "Miniauditório", banca: ["Profa. Dra. Valéria Maria (Orientadora)"] } },
    { id: 135, nome: "Samuel Alves Rocha", matricula: "2023102222", email: "samuel.a@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2023, orientador: "Giovanni Silva", status: "Ativo", defesa: null },
    { id: 136, nome: "Bianca Costa Lima", matricula: "2021202333", email: "bianca.c@aluno.ifpb.edu.br", curso: "Doutorado", ingresso: 2021, orientador: "Damires Yluska", status: "Ativo", defesa: null },
    { id: 137, nome: "Diego Fernandes", matricula: "2024102444", email: "diego.f@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2024, orientador: "Francisco Dantas", status: "Ativo", defesa: null },
    { id: 138, nome: "Clara Mendes Araújo", matricula: "2022202555", email: "clara.m@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2022, orientador: "Valéria Maria", status: "Defendido", defesa: { titulo: "Acessibilidade Web para Deficientes Visuais", data: "2024-05-20", horario: "14:00", local: "Lab 3", banca: ["Profa. Dra. Valéria Maria (Orientadora)"] } },
    { id: 139, nome: "Fernando Oliveira", matricula: "2023202666", email: "fernando.o@aluno.ifpb.edu.br", curso: "Especialização", ingresso: 2023, orientador: "", status: "Desligado", defesa: null },
    { id: 140, nome: "Helena Santos Cruz", matricula: "2024202777", email: "helena.s@aluno.ifpb.edu.br", curso: "Mestrado", ingresso: 2024, orientador: "Giovanni Silva", status: "Ativo", defesa: null }
];