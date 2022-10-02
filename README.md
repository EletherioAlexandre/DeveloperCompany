<br />
<p align="center">
  <a href="http://www.freepik.com">
    <img src="https://i.ibb.co/stqTkc6/video-call.png" alt="Logo" width="250" height="200">
  </a>

  <h3 align="center">Codar.</h3>

  <p align="center">
    Site de uma empresa que desenvolve sites
       <br />
    <br />
    <a href="https://github.com/Lorenalgm/codar">Desafio</a>
    ·
    <a href="https://www.linkedin.com/in/alexandre-eletherio-ab799719a/">Contato</a>
  </p>
</p>

## Índice

* [Devchallenge](#devchallenge) 
* [Desafio](#desafio)
* [Techs](#techs)
* [Deploy](#Deploy)
* [Como rodar o projeto em sua máquina](#Como-rodar-o-projeto-em-sua-máquina)

# Devchallenge
Este desafio foi proposto pela <a href="https://www.linkedin.com/in/lorenagmontes/">Lorena Montes</a> no <a href="https://devchallenge.now.sh/"> DevChallenge</a>, onde me permitiu desenvolver este projeto e minhas habilidades de desenvolvimento web.

# Desafio
O desafio era criar uma página sobre uma empresa que desenvolve sites.

<img src="https://i.ibb.co/2gB9Hkc/codar-mobile.png" width="380" height="380">
<img src="https://i.ibb.co/wpnzvcs/codar-desktop.jpg" width="580" height="380">

# Techs: 
ReactJS<br />
React Icons<br />
CSS3

# Deploy: 
Projeto publicado e rodando no <a href="https://www.netlify.com/">Netlify</a>.

# Como rodar o projeto em sua máquina:
Há duas maneiras de efetuar o download do código em questão, sendo elas:

1. No topo da página do **github**, procure por **Code** e, em seguida, clique em *Download Zip*.

   1.1 Após isso, o arquivo será transferido para a sua máquina e você pode fazer a extração do arquivo Zip para um workspace de sua escolha.

Ou

2. Utilizando a Command Line do Git

   2.1 Caso não tenha o software Git instalado em sua máquina, recomendo efetuar o download atráves do site https://git-scm.com/downloads.

   2.2 Após efetuar o download e instalação do Git, execute-o  e, em seguida, utilizando a Command Line, vá até o diretório desejado para receber os arquivos do código.

   2.3 Dentro do diretório desejado, digite dentro da Command Line o seguinte comando: 

   ```html
   git clone https://github.com/EletherioAlexandre/DeveloperCompany
   ```

   Após digitar o comando orientado, deverá ser exibida uma série de caracteres semelhantes ao do bloco abaixo. Caso retorne algo diferente disso, por favor, realize o passo-a-passo novamente e atente-se para os possíveis detalhes.

   ```html
   $ git clone https://github.com/EletherioAlexandre/frontendjr
   Cloning into 'frontendjr'...
   remote: Enumerating objects: 102, done.
   remote: Counting objects: 100% (102/102), done.
   remote: Compressing objects: 100% (78/78), done.
   remote: Total 102 (delta 23), reused 68 (delta 12), pack-reused 0
   Receiving objects: 100% (102/102), 4.15 MiB | 2.85 MiB/s, done.
   Resolving deltas: 100% (23/23), done.
   ```
   
   Desse modo, o projeto será clonado e baixado dentro de sua máquina e pronto para realizar qualquer tipo de alteração na codificação, caso tenha interesse.
   

## Preparando o Ambiente de Execução :desktop_computer:

Para conseguir efetuar a execução do código com 100% de sucesso, siga as próximas orientações:

#### Preparação de Ambiente

1. Será necessário ter o Node.js instalado em sua máquina. Logo, caso não possua o mesmo instalado, sugiro que faça a instalação **LTS** através do site https://nodejs.org/pt-br/download/

​	1.1 Após o download e instalação do Node.js, abra a sua **Command Line** através do git, vá até o diretório (pasta) onde o projeto foi clonado e digite o seguinte comando para instalar as dependências necessárias para a execução do projeto:

```html
npm install
```

Neste momento, após a finalização do processo de instalação do *npm install* a sua máquina estará totalmente configurada para executarmos o projeto.



2. #### Execução do Projeto:

​	Digite o seguinte comando na Command Line:

```html
npm start
```

Após digitar este comando e apertar a tecla ENTER, ele vai processar o comando e, logo após, deverá aparecer uma série de caracteres semelhantes aos do bloco abaixo:

```html
$ npm start

my-react-app@0.1.0 start
react-scripts start

Starting the development server...

Compiled successfully!

You can now view my-react-app in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.12:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

assets by path static/ 3.05 MiB
  assets by path static/media/*.svg 3.31 KiB
    asset static/media/icone.ae3bec440ee8b70870dd.svg 2.33 KiB [emitted] [immutable] [from: src/assets/images/icone.svg] (auxiliary name: main)
    asset static/media/Icon-trash.042f9538940733c6ee71eb4670ae3618.svg 645 bytes [emitted] (auxiliary name: main)
    asset static/media/Icon-edit.17ec8bd462949f7de1727268833b1f40.svg 368 bytes [emitted] (auxiliary name: main)
  asset static/js/bundle.js 2.3 MiB [emitted] (name: main) 1 related asset
  asset static/media/fundo-busca.12ff68cfdfeaa530f641.png 765 KiB [emitted] [immutable] [from: src/assets/images/fundo-busca.png] (auxiliary name: main)
asset index.html 2 KiB [emitted]
asset asset-manifest.json 556 bytes [emitted]
cached modules 2.25 MiB (javascript) 768 KiB (asset) 28.3 KiB (runtime) [cached] 508 modules
webpack 5.65.0 compiled successfully in 24859 ms
```
Após a aparição deste código, o projeto já estará rodando no seu localhost. Não finalize a Command Line deixe-a executando minimizada. <br />
Abra o seu browser e acesse o http://localhost:3000 para visualizar o projeto.

Caso não queira rodar em sua máquina e visualizar o site em tempo real, você pode acessá-lo através da URL: https://develcompany.netlify.app/
