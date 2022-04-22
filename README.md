# Projeto Guiado I 🚀

**Semana 5 – Resolução de Problemas/Lógica aplicada e JavaScript (sintaxe básica)**

1. Revisão
  - Tipos de dados
  - Variáveis
  - Operadores
  - Funções e escopo
  - Estrutura condicional
  - Estrutura de repetição
  - Objetos
  - Arrays
  - Métodos de iteração

2. Extra - Js moderninho

  - Template string
  - Operador ternário
  - Arrow functions
  - Operador spread
  - Objetos e Destructuring
 

3. Projeto integrador I

<br>
<br>

------
### Chamada, apresentação das monitoras e acordos
<img src="https://i.pinimg.com/474x/b4/17/86/b41786b5e7627ed0c678a0ef4a62e9f6.jpg" alt="video chamada" width="200">

* Usar as reações do zoom e levantar a mão para sinalizar que gostaria de falar
* Enviar as dúvidas no chat
* Manter o microfone desligado quando outras pessoas estiverem falando
* Manter a câmera ligada o máximo possível
* Momento mão no código, momento de olho na tela
------

![image](https://media.giphy.com/media/3o7btUrUUiljkVzDBS/giphy.gif)

# 🚀 `SI`stema de gerenciamento de livros

E aeeee! Este é um repositório consolidando os nossos estudos das últimas 3 semanas de lógica aplicada com javascript.

> ⚠️ Poder programar em javascript sem depender do navegador é TUDOOO de bom.   Agora, nem o céu é o limite para as aplicações que vocês vão criar, rs. Mas vamos ao que interessa! 


---

# 🧠 Contexto

O objetivo é criar um sistema onde deverá ser possível gerenciar informações sobre os livros que já lemos e os livros que estão na nossa listinha de desejos.


### `Como criar o projeto` 
Siga os passos abaixo:

| Passo | Comando/informação       |
| --------- | ----------- |
| Inicie um projeto node | `npm init -y` |
| No package.json, crie o script start   | `"start": "node app.js"` |
| Instale as dependências   | `npm i readline-sync` |
| Crie o .gitignore     | `node_modules` |
|

### `Tecnologias`

| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `npm` | Gerenciador de pacotes|
| `readline-sync` | Dependência para receber inputs no terminal|
| 
  
### `Arquitetura`

```
 📁 projeto-de-livros
   |- 📁 controllers
   |     |- 📄 buscarLivros.js
   |     |- 📄 listarRecomendados.js
   |     |- 📄 listarLivrosNaoLidos.js
   |     |- 📄 listarLivrosOrdenados.js
   |- 📁 node_modules
   |- 📄 app.js
   |- 📄 database.js
   |- 📄 .gitignore
   |- 📄 package.json  
   |- 📄 package-lock.json
```

### `Requisitos`

- [ ]  **`buscarLivros`** Deverá ser possível buscar livros pela categoria
- [ ]  **`listarLivrosOrdenados`** Deverá retornar todos os livros ordenados de forma crescente por quantidade de páginas.
- [ ]  **`listarRecomendados`** Deverá listar livros que já foram lidos e que são recomendados
- [ ]  **`listarLivrosNaoLidos`** Deverá listar livros que ainda não foram lidos 


`REGRAS`
```
- Inicia o algoritmo escolhendo a forma de busca no menu.
- Caso a pessoa usuária escolha alguma opção inexistente deverá mostrar no console a string 'fim do algoritmo'.
- O comportamento esperado deve ser o pedido da entrada e a impressão das tabelas buscadas no console, conforme requisitos acima.
```

## `Dados`

Criar dados mocados, um array de objetos de livros com a modelagem abaixo.

LIVRO
- nome: string
- categoria: string
- paginas: number
- recomenda: boolean
- leu: boolean
----
## `{profa} Simara`
#### Vamos nos conectar!

  <img src="https://media.giphy.com/media/efhcZv18NpQDyRsaYa/giphy.gif" alt="Gif Yeah" width="200">

Ex-aluna {reprograma}, desenvolvedora na Thoughtworks e criadora do podcast e canal Quero Ser Dev.

- [instagram](https://www.instagram.com/simara_conceicao)
- [youtube](https://www.youtube.com/channel/UCGaPf6u8sp-yd5BvOS3du0g)
- [linkedin](https://www.linkedin.com/in/simaraconceicao/)
- [github](https://github.com/simaraconceicao)
- [spotify](https://open.spotify.com/show/59vCz4TY6tPHXW26qJknh3)
- [quero ser dev](https://queroserdev.com)