# 🧮 Calculadora & Interações em JavaScript

Uma aplicação web interativa e estilizada do zero, desenvolvida para praticar lógica de programação e design front-end customizado. O projeto reúne um sistema de saudação personalizada e módulos práticos de operações matemáticas.

---

## 🚀 O que a Aplicação Apresenta

O sistema é dividido em blocos interativos organizados na mesma página:

1. **Identificação de Usuário:**
   * Campo de texto (`id="nome"`) para o usuário digitar seu nome.
   * Botão **"Mostrar Nome"** que dispara um alerta de boas-vindas personalizado e atualiza o texto na interface (`resultadodonome`) com uma saudação customizada.

2. **Módulo de Soma:**
   * Dois campos de entrada numérica (`num1` e `num2`).
   * Botão **"Cacule!"** que captura os valores, converte os dados com `Number()`, exibe o resultado formatado na tela (`resultadodasoma`) e dispara um alerta dinâmico com o total.

3. **Módulo de Subtração:**
   * Dois campos de entrada numérica (`num3` e `num4`).
   * Botão **"Vejamos!"** que processa a operação de subtração, atualiza o elemento de resultado (`resultadodasubtração`) e exibe o valor calculado por meio de um alerta.

---

## 🎨 Tecnologias e Conceitos Aplicados

* **HTML5:** Marcação estruturada e semântica com contêineres, inputs e botões interativos.
* **CSS3 (Estilização Manual):**
  * Paleta de cores exclusiva com tons terrosos e cartões estilizados.
  * Efeitos visuais modernos com transições suaves (`transition: all 0.3s ease`) e zoom dinâmico no hover (`transform: scale`).
  * Layout flexível utilizando Flexbox (`display: flex`) e sombreamentos refinados (`box-shadow`).
* **JavaScript (ES6):**
  * Captura de elementos do DOM utilizando `document.getElementById()`.
  * Escuta de eventos de clique com `addEventListener('click', ...)`.
  * Atualização dinâmica de conteúdo textual com `textContent`.
  * Conversão de tipos de dados com `Number()` para garantir precisão nas operações matemáticas.
  * Disparo de interações em pop-up utilizando `alert()`.

---

## 📂 Estrutura do Projeto

```text
📁 seu-projeto-js/
├── 📄 index.html    # Estrutura HTML principal da página e dos módulos
├── 🎨 index.css     # Estilização visual, cores, cards e animações hover
└── ⚙️ script.js     # Lógica de interatividade, funções matemáticas e alertas# JS-pw
Mostrar nome, Calcular soma, Calcular subtração
