# Admin Monitoring Dashboard

Projeto de estudo em React para consolidar fundamentos e prática de interface administrativa com consumo de dados assíncronos, organização por componentes, contexto, hooks customizados e manipulação de listas.

## Objetivo do projeto

Este projeto simula um painel administrativo de monitoramento com foco em praticar conceitos importantes do React em um cenário mais próximo de uma aplicação real.

A proposta não é só renderizar componentes, mas treinar:

- componentização
- props
- estado local
- contexto
- hooks customizados
- formulários controlados
- renderização de listas
- atualização de interface
- organização por pastas
- separação entre interface e services
- tratamento de loading, error e empty state

---

## Funcionalidades

O sistema possui as seguintes funcionalidades:

### Dashboard principal
- Header com título e subtítulo
- Painel do usuário logado
- Card de status do sistema
- Lista de alertas
- Lista de usuários
- Lista de eventos
- Formulário para criar novos eventos

### Usuário logado
- Exibe nome
- Exibe email
- Exibe cargo

### Status do sistema
- Mostra o status atual
- Permite alternar entre `Online` e `Offline`

### Alertas
- Carrega alertas simulados
- Mostra estado vazio caso não existam alertas

### Usuários
- Carrega usuários de forma assíncrona
- Exibe loading durante carregamento
- Exibe erro caso a requisição falhe
- Exibe mensagem caso a lista esteja vazia

### Eventos
- Carrega eventos de forma assíncrona
- Exibe loading durante carregamento
- Exibe erro caso a requisição falhe
- Exibe mensagem caso a lista esteja vazia
- Permite criar novos eventos
- Permite marcar eventos como concluídos
- Permite remover eventos concluídos
- Permite limpar todos os eventos concluídos

### Formulário de criação de evento
- Inputs controlados
- Validação de campos
- Mensagens de erro por campo
- Submit assíncrono
- Feedback de sucesso
- Feedback de falha
- Limpeza do formulário após criação com sucesso

---

## Tecnologias utilizadas

- React
- JavaScript
- CSS
- Vite

---

## Estrutura do projeto

```bash
src/
  assets/
  components/
    AlertList/
      AlertList.jsx
      AlertList.css
    CreateEventForm/
      CreateEventForm.jsx
      CreateEventForm.css
    Header/
      Header.jsx
      Header.css
    SystemStatusCard/
      SystemStatusCard.jsx
      SystemStatusCard.css
    UserPanel/
      UserPanel.jsx
      UserPanel.css
    UsersList/
      UsersList.jsx
      UsersList.css
    EventsList/
      EventsList.jsx
      EventsList.css
  context/
    AuthContext.jsx
  data/
    mockData.js
  hooks/
    useSystemStatus.js
  pages/
    Dashboard/
      DashboardPage.jsx
      DashboardPage.css
  services/
    alertsService.js
    eventService.js
    userService.js
  App.jsx
  main.jsx
  index.css
