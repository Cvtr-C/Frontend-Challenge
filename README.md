# React + TypeScript + Vite

# 🌤️ Frontend Challenge — LAPISCO

Aplicação web desenvolvida em **React + TypeScript** como parte do **Desafio Frontend do LAPISCO**, com o objetivo de consumir APIs públicas de dados meteorológicos e apresentar informações climáticas atuais e futuras de forma interativa, responsiva e acessível.

A aplicação permite pesquisar cidades, identificar automaticamente a localização aproximada do usuário por IP, consultar condições meteorológicas atuais e visualizar a previsão de temperatura dos próximos 7 dias por meio de um gráfico interativo.

---

## 📌 Sobre o projeto

O projeto foi desenvolvido para atender aos requisitos propostos pelo desafio **Frontend — LAPISCO**, que solicita a criação de uma aplicação capaz de:

* 🔎 Pesquisar cidades dinamicamente;
* 📍 Identificar automaticamente a localização aproximada do usuário;
* 🌡️ Exibir dados meteorológicos atuais;
* 💧 Informar umidade relativa do ar;
* 💨 Informar velocidade do vento;
* 📊 Exibir a variação das temperaturas mínima e máxima dos próximos 7 dias;
* 🌦️ Diferenciar visualmente as condições climáticas;
* 🌗 Disponibilizar tema claro e escuro;
* 📱 Adaptar a interface a diferentes tamanhos de tela;
* ⚠️ Tratar erros de comunicação com as APIs;
* ⚛️ Utilizar React e TypeScript;
* 🧠 Utilizar gerenciamento de estado compartilhado com Context API;
* 🚀 Aplicar boas práticas de desenvolvimento e organização de código.

O projeto utiliza APIs públicas e não necessita de uma chave de API para funcionar.

---

# ✨ Funcionalidades

## 🔎 Pesquisa por cidade

O usuário pode informar o nome de uma cidade para consultar suas condições meteorológicas.

O processo realizado pela aplicação é:

```text
Nome da cidade
      ↓
API de Geocoding
      ↓
Latitude + Longitude
      ↓
API de previsão meteorológica
      ↓
Dados climáticos
      ↓
Interface
```

A geocodificação é necessária porque a API meteorológica utiliza coordenadas geográficas para realizar a consulta.

---

## 📍 Localização automática

Ao iniciar a aplicação, é realizada uma tentativa de identificação da localização aproximada do usuário utilizando **geolocalização baseada em IP**.

O fluxo é:

```text
Usuário acessa a aplicação
          ↓
Consulta de localização por IP
          ↓
Cidade identificada
          ↓
Consulta meteorológica
          ↓
Previsão exibida automaticamente
```

> **Observação:** a localização baseada em IP é aproximada e pode apresentar uma cidade diferente da localização física exata do usuário. Isso ocorre devido às limitações naturais desse método de geolocalização.

---

## 🌡️ Condições meteorológicas atuais

A aplicação apresenta informações meteorológicas atuais, incluindo:

* 🌡️ Temperatura;
* 💧 Umidade relativa do ar;
* 💨 Velocidade do vento;
* 🌦️ Condição meteorológica atual.

As condições meteorológicas são interpretadas a partir do código climático retornado pela API.

---

## 🌦️ Identificação das condições climáticas

Os códigos meteorológicos são convertidos em informações amigáveis para o usuário.

A aplicação possui uma função responsável por transformar o código recebido em informações de apresentação:

```text
Weather Code
     ↓
getWeatherCondition()
     ↓
┌─────────────────────┐
│ Ícone               │
│ Descrição           │
│ Classe CSS          │
└─────────────────────┘
```

Isso permite que diferentes condições, como céu limpo, nebulosidade, chuva ou outras situações meteorológicas, sejam representadas visualmente de maneira diferente.

Essa lógica foi isolada em `utils/weatherCondition.ts`, evitando que regras de negócio relacionadas às condições climáticas fiquem diretamente dentro dos componentes de interface.

---

## 📊 Previsão dos próximos 7 dias

A aplicação apresenta um gráfico interativo utilizando **Recharts**.

São utilizadas as temperaturas:

* 🔺 Máxima diária;
* 🔻 Mínima diária.

Os dados recebidos pela API são transformados antes de serem enviados ao componente do gráfico:

```text
API
│
├── dates[]
├── temperature_max[]
└── temperature_min[]
        ↓
Transformação dos dados
        ↓
chartData[]
        ↓
Recharts
        ↓
Gráfico
```

O objetivo é facilitar a comparação da variação de temperatura ao longo dos próximos sete dias.

> O gráfico representa **previsão futura**, e não histórico de temperaturas.

---

## 🌗 Tema claro e escuro

A aplicação possui suporte a:

* ☀️ Tema claro;
* 🌙 Tema escuro.

O gerenciamento do tema é realizado através da **Context API**.

Além disso, a preferência selecionada pelo usuário é armazenada no `localStorage`, permitindo que o tema seja mantido entre diferentes acessos à aplicação.

Quando não existe uma preferência previamente salva, a aplicação também considera a preferência de aparência definida no sistema operacional por meio de `prefers-color-scheme`.

Fluxo:

```text
Preferência salva?
       │
   ┌───┴───┐
  SIM     NÃO
   │        │
   ▼        ▼
localStorage
            ↓
    prefers-color-scheme
            ↓
       Tema inicial
```

---

## 📱 Layout responsivo

A interface foi desenvolvida para se adaptar a diferentes tamanhos de tela.

O layout considera principalmente:

* 🖥️ Desktops;
* 💻 Notebooks;
* 📱 Smartphones;
* 📲 Tablets.

Os componentes de pesquisa, cartões meteorológicos, gráfico e controles da interface são organizados para manter a usabilidade em diferentes resoluções.

---

## ⚠️ Tratamento de erros

A aplicação possui tratamento para situações em que as requisições não conseguem ser concluídas.

Entre os cenários considerados estão:

* Cidade não encontrada;
* Falha ao identificar a localização;
* Erro na consulta meteorológica;
* Falha na comunicação com as APIs;
* Falta de dados esperados.

As mensagens de erro são centralizadas em:

```text
src/enums/error-text.enum.ts
```

Isso evita a repetição de strings de erro em diferentes partes da aplicação e facilita futuras alterações das mensagens.

---

# 🛠️ Tecnologias utilizadas

## Front-end

| Tecnologia     | Utilização                                             |
| -------------- | ------------------------------------------------------ |
| **React**      | Construção da interface e componentes                  |
| **TypeScript** | Tipagem estática e segurança durante o desenvolvimento |
| **Vite**       | Ambiente de desenvolvimento e build                    |
| **Recharts**   | Visualização dos dados meteorológicos                  |
| **CSS**        | Estilização e responsividade                           |

## Ferramentas de desenvolvimento

| Ferramenta              | Utilização                                |
| ----------------------- | ----------------------------------------- |
| **ESLint**              | Análise estática e padronização do código |
| **TypeScript Compiler** | Verificação de tipos durante o build      |
| **Git**                 | Controle de versão                        |
| **GitHub**              | Hospedagem do código-fonte                |

---

# 🌐 APIs utilizadas

A aplicação utiliza APIs públicas para obter os dados necessários.

## 📍 IP Geolocation — ipapi

Utilizada para identificar aproximadamente a cidade do usuário através do endereço IP.

**Responsabilidade:**

```text
IP do usuário
   ↓
Localização aproximada
   ↓
Cidade
```

A informação obtida é utilizada para realizar automaticamente a consulta meteorológica inicial.

---

## 🗺️ Open-Meteo Geocoding

Utilizada para converter o nome de uma cidade em coordenadas geográficas.

**Responsabilidade:**

```text
"Fortaleza"
     ↓
Latitude
Longitude
```

Essas coordenadas são posteriormente utilizadas pela API de previsão meteorológica.

---

## 🌤️ Open-Meteo Forecast

Responsável pelos dados meteorológicos.

A aplicação utiliza informações como:

* Temperatura atual;
* Umidade relativa;
* Velocidade do vento;
* Código da condição meteorológica;
* Temperatura máxima dos próximos dias;
* Temperatura mínima dos próximos dias.

Fluxo geral:

```text
Cidade
  ↓
Geocoding
  ↓
Latitude + Longitude
  ↓
Open-Meteo Forecast
  ↓
Dados meteorológicos
```

---

# 🏗️ Arquitetura do projeto

O projeto foi organizado separando responsabilidades entre componentes de interface, gerenciamento de estado, hooks, serviços, tipos e funções auxiliares.

A estrutura atual do diretório `src` é:

```text
src/
│
├── components/
│   ├── SearchBar.tsx
│   ├── ThemeButton.tsx
│   ├── WeatherCards.tsx
│   └── WeatherChart.tsx
│
├── context/
│   ├── ThemeContext.tsx
│   └── WeatherContext.tsx
│
├── enums/
│   └── error-text.enum.ts
│
├── hooks/
│   ├── useTheme.ts
│   └── useWeather.ts
│
├── services/
│   ├── geolocationService.ts
│   └── weatherService.ts
│
├── types/
│   └── weather.ts
│
├── utils/
│   └── weatherCondition.ts
│
├── App.css
├── App.tsx
└── main.tsx
```

---

# 🧩 Organização das responsabilidades

## `components/`

Contém os componentes responsáveis pela interface.

### `SearchBar.tsx`

Responsável pela interação de pesquisa de cidades.

### `ThemeButton.tsx`

Responsável pelo controle visual de alternância entre tema claro e escuro.

### `WeatherCards.tsx`

Apresenta as condições meteorológicas atuais.

### `WeatherChart.tsx`

Transforma os dados de previsão e os apresenta utilizando Recharts.

---

## `context/`

Responsável pelo compartilhamento de estados globais da aplicação.

### `WeatherContext.tsx`

Compartilha informações relacionadas ao clima entre diferentes componentes.

Entre os dados disponibilizados estão:

* Cidade;
* Localização;
* Dados meteorológicos;
* Estado de carregamento;
* Estado de erro;
* Funções de pesquisa;
* Carregamento inicial da localização.

### `ThemeContext.tsx`

Gerencia o tema visual da aplicação e disponibiliza a função para alternância entre os modos claro e escuro.

---

## `hooks/`

Contém hooks personalizados para encapsular lógica reutilizável.

### `useWeather.ts`

Centraliza a lógica relacionada à consulta meteorológica.

### `useTheme.ts`

Facilita o acesso ao `ThemeContext`.

A utilização de hooks personalizados reduz a quantidade de lógica diretamente dentro dos componentes de apresentação.

---

## `services/`

Responsável pela comunicação com serviços externos.

### `weatherService.ts`

Centraliza as requisições relacionadas à:

* Geocodificação;
* Previsão meteorológica.

### `geolocationService.ts`

Responsável pela consulta de localização aproximada baseada em IP.

Essa separação evita que componentes React precisem conhecer detalhes de endpoints ou requisições HTTP.

---

## `types/`

Contém as definições de tipos utilizadas pela aplicação.

### `weather.ts`

Define a estrutura dos dados meteorológicos utilizados pelo Front-end.

A utilização de TypeScript permite que os componentes trabalhem com estruturas de dados conhecidas durante o desenvolvimento.

---

## `utils/`

Contém funções auxiliares que não dependem diretamente de componentes React.

### `weatherCondition.ts`

Converte códigos meteorológicos em informações utilizadas pela interface:

```text
Código
  ↓
Ícone
Descrição
Classe CSS
```

---

## `enums/`

Centraliza valores constantes relacionados a mensagens da aplicação.

### `error-text.enum.ts`

Mantém as mensagens de erro utilizadas durante as requisições e operações da aplicação.

---

# 🔄 Fluxo de dados

O fluxo principal da aplicação pode ser representado da seguinte maneira:

```text
                    ┌──────────────────┐
                    │      Usuário     │
                    └────────┬─────────┘
                             │
                 ┌───────────┴───────────┐
                 │                       │
                 ▼                       ▼
          Pesquisa cidade        Localização inicial
                 │                       │
                 ▼                       ▼
        WeatherContext          Geolocation Service
                 │                       │
                 │                       ▼
                 │                     IPAPI
                 │                       │
                 └───────────┬───────────┘
                             │
                             ▼
                    Weather Service
                             │
                    ┌────────┴────────┐
                    ▼                 ▼
               Geocoding          Forecast
                    │                 │
                    └────────┬────────┘
                             │
                             ▼
                     WeatherContext
                             │
              ┌──────────────┼──────────────┐
              │              │              │
              ▼              ▼              ▼
        WeatherCards    WeatherChart    App / States
              │              │
              ▼              ▼
           Dados          Gráfico
```

---

# 🧠 Gerenciamento de estado

O gerenciamento de estado utiliza principalmente **React Context API** e hooks.

Foram definidos dois contextos independentes:

```text
ThemeContext
     │
     └── Tema da aplicação

WeatherContext
     │
     ├── Cidade
     ├── Localização
     ├── Clima
     ├── Loading
     ├── Error
     └── Funções relacionadas ao clima
```

Essa divisão evita a concentração de estados não relacionados em um único contexto.

Além disso, a lógica de obtenção dos dados é separada da camada de apresentação.

---

# ⚡ Performance e boas práticas

O projeto utiliza recursos do React para organizar e otimizar a aplicação.

## `useCallback`

Utilizado para preservar referências de funções quando necessário, evitando recriações desnecessárias em determinados ciclos de renderização.

## `useMemo`

Utilizado no processamento dos dados utilizados pelo gráfico, evitando que a transformação dos dados seja executada novamente sem necessidade quando suas dependências não forem alteradas.

## Componentização

A interface foi dividida em componentes menores e independentes, permitindo que cada componente tenha uma responsabilidade específica.

## Separação de responsabilidades

A aplicação evita concentrar:

* Interface;
* Requisições;
* Estado;
* Regras de negócio;
* Tipagem;

em um único arquivo.

---

# 🛡️ Tratamento de requisições

As requisições são realizadas na camada de `services`, enquanto o gerenciamento dos estados de carregamento e erro fica associado ao fluxo do contexto de clima.

O fluxo pode ser resumido como:

```text
Início da requisição
        ↓
loading = true
        ↓
requisição HTTP
        │
        ├── sucesso
        │     ↓
        │   weather
        │     ↓
        │   loading = false
        │
        └── erro
              ↓
          error = mensagem
              ↓
          loading = false
```

Essa abordagem mantém o tratamento da comunicação externa separado dos componentes visuais.

---

# ♿ Interface e acessibilidade

A aplicação foi pensada para oferecer uma experiência de utilização simples e clara.

Entre as preocupações consideradas estão:

* Interface responsiva;
* Contraste entre elementos visuais;
* Diferenciação visual das condições climáticas;
* Botão específico para alteração do tema;
* Estados visuais de carregamento;
* Mensagens amigáveis de erro;
* Organização semântica da interface.

A acessibilidade continua sendo uma área de evolução do projeto, especialmente em relação ao aprimoramento de labels, atributos ARIA e navegação completa por teclado.

---

# 📁 Estrutura geral do projeto

```text
Frontend-Challenge/
│
├── src/
│   ├── components/
│   ├── context/
│   ├── enums/
│   ├── hooks/
│   ├── services/
│   ├── types/
│   ├── utils/
│   ├── App.css
│   ├── App.tsx
│   └── main.tsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

---

# 🚀 Como executar o projeto

## 1. Pré-requisitos

Antes de iniciar, certifique-se de possuir instalado:

* **Node.js**
* **npm**
* **Git**

---

## 2. Clonar o repositório

```bash
git clone https://github.com/Cvtr-C/Frontend-Challenge.git
```

Depois, entre na pasta:

```bash
cd Frontend-Challenge
```

---

## 3. Instalar as dependências

```bash
npm install
```

O projeto utiliza atualmente React, React DOM e Recharts como dependências principais. As ferramentas de desenvolvimento incluem TypeScript, Vite e ESLint.

---

## 4. Executar em desenvolvimento

```bash
npm run dev
```

Após iniciar o servidor, o Vite disponibilizará a aplicação localmente.

Acesse o endereço exibido no terminal.

---

# 🏗️ Build de produção

Para verificar se o projeto pode ser compilado para produção:

```bash
npm run build
```

O comando executa a verificação TypeScript e posteriormente realiza o build através do Vite.

---

# 🔍 Executar o ESLint

Para verificar problemas de lint:

```bash
npm run lint
```

---

# 👀 Visualizar o build

Depois de executar o build:

```bash
npm run preview
```

O Vite iniciará um servidor local para visualizar a versão de produção.

---

# 🔐 Variáveis de ambiente

Atualmente, o projeto **não necessita de variáveis de ambiente** para funcionar.

As APIs utilizadas são públicas e não exigem uma chave privada para as consultas realizadas pela aplicação.

> Caso futuramente seja adicionada uma API que utilize autenticação por chave, a configuração deverá ser adaptada para utilizar variáveis de ambiente apropriadas.

---

# 📋 Atendimento aos requisitos do desafio

| Requisito do LAPISCO                       | Implementação                                |
| ------------------------------------------ | -------------------------------------------- |
| 🔎 Pesquisa dinâmica por cidade            | ✅ Implementado                               |
| 📍 Geolocalização automática               | ✅ Implementado através de localização por IP |
| 🌡️ Temperatura atual                      | ✅ Implementado                               |
| 💧 Umidade                                 | ✅ Implementado                               |
| 💨 Velocidade do vento                     | ✅ Implementado                               |
| 📊 Temperaturas mínimas e máximas          | ✅ Implementado                               |
| 📅 Previsão dos próximos 7 dias            | ✅ Implementado                               |
| 🌦️ Diferenciação das condições climáticas | ✅ Implementado                               |
| 🌗 Tema claro e escuro                     | ✅ Implementado                               |
| 📱 Layout responsivo                       | ✅ Implementado                               |
| ⚛️ React                                   | ✅ Utilizado                                  |
| 🔷 TypeScript                              | ✅ Utilizado                                  |
| 🧠 Context API                             | ✅ Utilizada                                  |
| 📈 Biblioteca de gráficos                  | ✅ Recharts                                   |
| ⚠️ Tratamento de erros                     | ✅ Implementado                               |
| 🧹 Organização de código                   | ✅ Separação por responsabilidades            |
| 🚀 `useMemo` / `useCallback`               | ✅ Utilizados                                 |

---

# 🧪 Possíveis evoluções

Embora o projeto atenda às principais funcionalidades propostas pelo desafio, existem melhorias que podem ser implementadas futuramente.

### Testes automatizados

Adicionar testes unitários e de componentes utilizando ferramentas como Vitest e React Testing Library.

Possíveis áreas de teste:

```text
weatherCondition
SearchBar
WeatherCards
WeatherChart
useWeather
```

### Acessibilidade

Aprimorar:

* Navegação por teclado;
* Labels de formulários;
* Atributos ARIA;
* Anúncio de estados de carregamento;
* Comunicação de erros para tecnologias assistivas.

### Validação de dados externos

Adicionar validação em runtime das respostas das APIs para aumentar a segurança da aplicação em relação a alterações inesperadas nos dados recebidos.

### CI/CD

Adicionar uma pipeline de integração contínua para executar automaticamente:

```text
Lint
  ↓
Type Check
  ↓
Tests
  ↓
Build
```

a cada alteração enviada ao repositório.

---

# 🎯 Objetivos de aprendizado

Além de atender ao desafio proposto, o desenvolvimento deste projeto teve como foco a prática dos seguintes conceitos:

* Componentização com React;
* React Hooks;
* Custom Hooks;
* Context API;
* TypeScript;
* Tipagem de dados;
* Consumo de APIs REST;
* `fetch`;
* Geocodificação;
* Geolocalização baseada em IP;
* Manipulação de estados assíncronos;
* Tratamento de erros;
* `useMemo`;
* `useCallback`;
* Persistência com `localStorage`;
* Tema claro e escuro;
* Responsividade;
* Visualização de dados;
* Organização de código;
* Separação de responsabilidades.

---

# 🏛️ Decisões arquiteturais

Algumas decisões importantes foram tomadas durante o desenvolvimento.

## Por que Context API?

A aplicação possui informações utilizadas por diferentes componentes, principalmente dados meteorológicos e configuração de tema.

A Context API permite compartilhar esses dados sem precisar passar propriedades manualmente por vários níveis da árvore de componentes.

---

## Por que separar os Services?

A comunicação com APIs externas não precisa fazer parte dos componentes de interface.

Por isso:

```text
Componentes
     ↓
Context / Hooks
     ↓
Services
     ↓
APIs
```

Essa organização facilita manutenção e permite modificar a implementação da comunicação externa sem precisar alterar toda a interface.

---

## Por que utilizar Custom Hooks?

Hooks como:

```text
useWeather()
useTheme()
```

permitem encapsular lógica e fornecer uma interface mais simples para os componentes.

Isso deixa os componentes focados principalmente na apresentação e interação com o usuário.

---

## Por que utilizar Recharts?

O desafio exige uma representação gráfica dos dados meteorológicos.

O Recharts permite transformar os dados recebidos da API em uma visualização interativa sem a necessidade de implementar manualmente toda a lógica de desenho do gráfico.

---

# 🌎 Fluxo completo de uma pesquisa

Quando o usuário pesquisa uma cidade, o fluxo completo é:

```text
┌──────────────────────┐
│ Usuário informa      │
│ uma cidade           │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│ SearchBar            │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│ WeatherContext       │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│ weatherService       │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│ Open-Meteo Geocoding │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│ Latitude / Longitude │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│ Open-Meteo Forecast  │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│ Dados meteorológicos │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│ WeatherContext       │
└──────────┬───────────┘
           ↓
     ┌─────┴─────┐
     ↓           ↓
WeatherCards  WeatherChart
```

---

# 📚 Referência do desafio

Este projeto foi desenvolvido com base no enunciado do:

**Desafio Frontend — LAPISCO**

O objetivo principal do desafio é avaliar conhecimentos de desenvolvimento Front-end utilizando React, TypeScript, consumo de APIs, gerenciamento de estado, visualização de dados, responsividade, tratamento de erros e boas práticas de desenvolvimento.

---

# 👨‍💻 Autor

**Carlos**

Projeto desenvolvido como parte dos estudos e prática de desenvolvimento Front-end com **React + TypeScript**.

---

# 📄 Licença

Este projeto foi desenvolvido para fins educacionais e de avaliação técnica no contexto do desafio Frontend — LAPISCO.

