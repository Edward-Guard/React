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
    8.2-A constante inicial state será usada para armazenar valores que serão usados pelas três funções iniciais.
        displayValue: '0', Valor a ser exibido no display da calculadora
        clearDisplay: 'false',informa se os valores no display serão substituidos ou não.
        operation: null,informa qual operação está sendo usada no momento
        value: [0,0],valores A e B que serão manipulados.
        current:0,informa qual dos valores A e B está sendo usado no momento
    Ao fim a função clearMemory retornará para o initial state acima.
    8.3-
