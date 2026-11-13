alert('Olá, seja bem-vindo, ao nosso exercício de JS!!!!');
// os leia

//os leia do nome
let nome = document.getElementById('nome');
let mostrar = document.getElementById('mostrar');
let resultadodonome = document.getElementById('resultadodonome');

//os leia do soma
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let somar = document.getElementById('somar');
let resultadodasoma = document.getElementById('resultadodasoma');

//leio da subtração
let num3 = document.getElementById('num3');
let num4 = document.getElementById('num4');
let subtrair = document.getElementById('subtrair');
let resultadodasubtração = document.getElementById('resultadodasubtração');


//para ler os botões
mostrar.addEventListener('click', apresentarnome);
somar.addEventListener('click', somatória);
subtrair.addEventListener('click', subtração);

//para fazer as funções
function apresentarnome() {
    alert('Olá, '+ nome.value);
    resultadodonome.textContent = 'Olá '+ nome.value + ', o que você deseja calcular hoje?';
}

function somatória() {
    let soma = Number(num1.value) + Number(num2.value);
    resultadodasoma.textContent = 'O resultado é: ' + soma;
    alert('Juntamos tudo e deu '+ soma);
}

function subtração() {
    let subtração = Number(num3.value) - Number(num4.value);
    resultadodasubtração.textContent = 'O resultado é: ' + subtração;
    alert('Calculamos e deu: '+ subtração);
}