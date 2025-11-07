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
  - Disponibilizar um módulo para gerar atas de defesa e declarações de participação.
  - Permitir seleção de defesas específicas para geração dos documentos.
  - Garantir que os documentos sejam gerados em formatos padrão (PDF, DOCX).
  - Incluir opções de personalização para os documentos gerados (ex: inclusão de logotipo, assinatura).
- **Classificação**: Feature
- **Responsável**: Thalysson

---

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

## Considerações Finais
- **Usabilidade**: A interface deve ser intuitiva e responsiva, garantindo uma boa experiência em dispositivos móveis.
- **Segurança**: Implementar autenticação e autorização adequadas para proteger as informações sensíveis de alunos e professores.
- **Feedback do Usuário**: Incorporar mecanismos para receber feedback dos usuários sobre a usabilidade e eficácia das funcionalidades.