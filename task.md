# Elicitação de Requisitos do Sistema de Gestão de Defesas Acadêmicas

## 1. Dashboard
- **Objetivo**: Fornecer uma visão geral do sistema.
- **Requisitos**:
  - Exibir indicadores principais, como número de solicitações pendentes, defesas agendadas e documentos gerados.
  - Permitir acesso rápido a informações críticas através de cards interativos.
  - Atualização em tempo real, se possível, para refletir mudanças imediatas.
- **Classificação**: Epic
- **Responsável**: Alan

---

## 2. Agenda de Defesas
- **Objetivo**: Visualizar e gerenciar a agenda de defesas.
- **Requisitos**:
  - Integrar um calendário que mostre datas de defesas agendadas.
  - Incluir detalhes das defesas, como nome do aluno, data, horário e status (confirmada, pendente, cancelada).
  - Permitir a adição, edição e remoção de eventos de defesa.
  - Exibir notificações para defesas próximas (ex: no prazo de 7 dias).
- **Classificação**: Epic
- **Responsável**: Alan

---

## 3. Solicitações Pendentes
- **Objetivo**: Gerenciar solicitações de defesa ou qualificação.
- **Requisitos**:
  - Listar todas as solicitações pendentes com informações dos alunos (nome, matrícula).
  - Mostrar o status de cada solicitação (aguardando, aprovada, rejeitada).
  - Permitir a filtragem por status, data de solicitação e nome do aluno.
  - Incluir um botão para acessar detalhes e tomar ações (aprovar, rejeitar).
- **Classificação**: Epic
- **Responsável**: Thalysson

---

## 4. Gerar Documentos
- **Objetivo**: Emitir documentos relacionados às defesas.
- **Requisitos**:
  - Definir templates padrão para os documentos, com campos preenchidos automaticamente a partir dos dados existentes.
  Os campos a serem preenchidos no template incluem:
    - **Nome Completo do Candidato**: 
    - **Matrícula**: 
    - **E-mail**: 
    - **Telefone**: 
    - **Linha de Pesquisa**: 
    - **Título**: 
    - **Produto Educacional**: 
    - **Nome Completo do Orientador**: 
      - **Membro**: 
      - **Matrícula ou CPF**: 
      - **E-mail**: 
      - **Telefone**: 
      - **Titulação de maior nível / Instituição**: 
      - **Participação**: 
    - **Nome Completo do Coorientador**: 
      - **Membro**: 
      - **Matrícula ou CPF**: 
      - **E-mail**: 
      - **Telefone**: 
      - **Titulação de maior nível / Instituição**: 
      - **Participação**: 
    - **Nome Completo do Examinador**: 
      - **Membro**: 
      - **Matrícula ou CPF**: 
      - **E-mail**: 
      - **Telefone**: 
      - **Titulação de maior nível / Instituição**: 
      - **Participação**: 
    - **Data da Defesa**: 
    - **Horário da Defesa**: 
    - **Local da Defesa**: 
    - **Notas e Avaliação**:
      - **Texto**: 
      - **Apresentação**: 
      - **Arguição**: 
      - **Média Final**: 
      - **Avaliação**: 
    - **Resumo do Trabalho**: 
    - **Palavras-Chave**: 
    - **Observação**: 
  - Incluir uma pré-visualização dos documentos antes da geração final.
  - Garantir que os documentos sejam gerados em formatos padrão (PDF, DOCX).
  - Permitir o download e envio por e-mail dos documentos gerados.
- **Classificação**: Feature
- **Responsável**: Thalysson

## 5. Gerenciar Alunos
- **Objetivo**: Administrar informações dos alunos.
- **Requisitos**:
  - Exibir uma lista de alunos com informações básicas: nome, matrícula, curso.
  - Incluir funcionalidades de filtragem e busca (por nome, matrícula e curso).
  - Permitir a adição, edição e remoção de registros de alunos.
  - Incluir uma página de detalhes para cada aluno, com informações adicionais (histórico, status acadêmico, etc.).
- **Classificação**: Epic
- **Responsável**: Ícaro

---

## 6. Gerenciar Professores
- **Objetivo**: Administrar informações dos professores.
- **Requisitos**:
  - Exibir uma lista de professores com informações básicas: nome, matrícula, departamento.
  - Incluir funcionalidades de filtragem e busca (por nome, matrícula, departamento).
  - Permitir a adição, edição e remoção de registros de professores.
  - Implementar uma funcionalidade para selecionar quais professores participarão de cada defesa, permitindo:
    - Selecionar até três professores para cada defesa.
    - Exibir a lista de defesas agendadas e permitir a atribuição de professores diretamente a elas.
    - Mostrar a disponibilidade dos professores (já alocados em outras defesas, etc.).
  - Incluir uma página de detalhes para cada professor, com informações adicionais (cursos ministrados, histórico de defesas).
- **Classificação**: Epic
- **Responsável**: Diogo

---

## 7. Configurações
- **Objetivo**: Permitir que os usuários ajustem preferências do sistema.
- **Requisitos**:
  - Oferecer opções para alterar configurações de conta, como senha, e-mail e notificações.
  - Permitir personalização do tema do sistema (modo claro / escuro).
  - Incluir configurações de privacidade, como visibilidade de informações pessoais.
  - Possibilitar a configuração de lembretes e notificações para eventos importantes (ex: defesas, prazos).
  - Garantir que as alterações sejam salvas e refletidas na interface imediatamente.
- **Classificação**: Epic
- **Responsável**: Carlos

---

## 8. Meu Perfil
- **Objetivo**: Exibir e permitir a edição das informações do usuário.
- **Requisitos**:
  - Exibir informações do perfil, como nome, e-mail, cargo e foto.
  - Permitir a edição de informações pessoais, incluindo a atualização de senha.
  - Incluir um histórico de atividades do usuário no sistema (ex: defesas participadas, solicitações feitas).
  - Oferecer um botão para sair da conta, garantindo a segurança do acesso.
- **Classificação**: Feature
- **Responsável**: Carlos

---

## 9. Login
- **Objetivo**: Autenticar usuários no sistema.
- **Requisitos**:
  - Exibir um formulário de login com campos para e-mail e senha.
  - Incluir uma opção para "lembrar-me" para facilitar o acesso em dispositivos pessoais.
  - Oferecer um link para recuperação de senha em caso de esquecimento.
  - Implementar medidas de segurança, como proteção contra tentativas de login repetidas e autenticação em duas etapas (opcional).
- **Classificação**: Feature
- **Responsável**: Ícaro

---

## 10. Regras de Negócio
- **Objetivo**: Definir restrições e obrigações operacionais do sistema.
- **Regras**:
  - **RN01**: O agendamento deve ser iniciado com no mínimo 15 dias de antecedência.
  - **RN02**: A banca deve ter no mínimo 3 membros, permitindo mais conforme necessário.
  - **RN03**: Trabalhos confidenciais não devem ser exibidos publicamente.
  - **RN04**: Para defesa final, o aluno deve anexar o comprovante de submissão de artigo.
  - **RN05**: A defesa final tem um fluxo de aprovação em duas etapas (Coordenador e Secretaria).
  - **RN06**: Prazo máximo de 6 meses para refazer a defesa em caso de reprovação.
  - **RN07**: Se aprovado com correções, o status deve mudar para "Aguardando Versão Final".

---

## 11. Detalhamento de Dados
- **Objetivo**: Especificar campos obrigatórios para formulários principais do sistema.
- **Formulário de Solicitação de Banca**:
  - Dados do Candidato: Nome, Matrícula, Telefone, E-mail, Linha de Pesquisa.
  - Dados da Banca: Orientador, Coorientador (opcional).
  - Dados do Trabalho: Título, Resumo, Palavras-chave, Flag de Confidencialidade.
  - Anexos Obrigatórios: Arquivo do trabalho e, se dissertação, comprovante de submissão de artigo.

---

## 12. Requisitos Funcionais
- **Objetivos**: Atualizar requisitos funcionais para refletir novos fluxos.
- **Requisitos**:
  - O Coordenador deve ter permissão total para editar solicitações de defesa.
  - O sistema deve validar a anexação de artigos durante a solicitação de dissertação.
  - Após o agendamento, o sistema deve gerar automaticamente o convite de defesa.

---

## 13. Requisitos Não Funcionais
- **Objetivos**: Definir aspectos técnicos e de segurança do sistema.
- **Requisitos**:
  - O sistema deve integrar-se com o SUAP para armazenamento de documentos.
  - Autenticação deve usar o serviço de autenticação do SUAP (SSO).
  - Busca de dados deve preencher automaticamente informações básicas a partir do SUAP.

---

## Considerações Finais
- **Usabilidade**: A interface deve ser intuitiva e responsiva.
- **Segurança**: Garantir autenticação e autorização adequadas.
- **Feedback do Usuário**: Incorporar mecanismos para receber feedback dos usuários sobre a usabilidade e eficácia das funcionalidades.