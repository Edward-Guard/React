# React
 
1-Criando projeto
    1.1-Instalando o modulo basico (npm i -g create-react-app)
    1.2-Criando projeto (create-react-app 'projeto' )

2-Iniciar o projeto 
    2.1-Abrir projeto (cd 'projeto')
    2.2-Abrindo projeto (Npm Start)

3-Restruturando Pasta.
    3.1-Criando pasta fontes e inserindo a fonte Roboto-thin
    3.2-Criando Pasta main e inserindo o componente Calculator.css e .jsx

4-Componente Calculator.jsx
    4.1-Importar a pasta React(import React from "react";) , Importar o css (import './Calculator.css')
    4.2-Criar a classe calculator 
    4.3-Importar a classe calculator no lugar do componente app

5-Criando pasta components
    5.1-Componente Button  (Priorizar componentes funcionais)
    5.2-Importar o componente botao para Calculator.jsx
    5.3- {props.label} permite utilizar 'variaveis' no componente
    
6-Organizando a calculadora
    6.1-Inserir o display grid para organizar melhor os componentes botões individuais.
    6.2-Organizar o template com grid-template-coluns usando o repeat para criar 4 colunas,cada uma ocupando 1/4 do espaço.
    6.3-Organizar as linhas com grid-template-rows

7-Criando o display da calculadora
    7.1-Criar o componente display.jsx
    7.2-O componente irá mostrar a variavel props.value
    7.3-Utilizar o grid-template-column:span 4 para o componente ocupar 4 colunas.

8-Personalizando botões
    8.1- ${} utilização de java script puro dentro do jsx na forma de uma template string
    8.2-Função on click{} sendo utilizada pra receber o conteudo do botao ex '/' ou '9'

9-Logica da calculadora.
    8.1-Cria-se 3 funções iniciais 'Set Operation','add Digit', e 'Clear Memory',ambas retornam inicialmente uma mensagem ou seu respectivo valor ao console para fins de teste.
    8.2-Inserindo lógica nas funções
