/* for
for (let i = 1; 1 <= 20; i++) {
    if (i % 2 != 0) {
    console.log( i + ' é Impar');
    } else {
    console.log( i + ' é Par');
};}
*/

/* for in

const meuAmor = "Olga";

let atr = {
  1 : " é linda",
  2 : " tem um sorriso gostoso",
  3 : " tem o corpo perfeito",
  4 : " tem uma voz que parece música para os meus ouvidos",
  5 : " é o amor da minha vida todinha!"
};
 

for (let key in atr) {
    console.log(meuAmor + atr[key]);
};
*/

/* window

window.alert('Ei! Você não é aquele maldito que roubou a chama do Olimpo e concedeu a humanidade?');
let nome = window.prompt('Então prove-me! Qual é o seu nome?');
window.confirm('Então pare de me fazer perder tempo, ' + nome +'! Preciso encontrar aquele maldito Prometeu!');

*/

/* Conversão de dados

Number.parseFloat(data);                        converte o tipo de dado para número real

Number.parseInt(data);                          converte o dado para número inteiro

Number(data);   data.toNumber()                 converte o dado para number independente do tipo de número

String(data);   data.toString()                 converte o dado para string

let n1 = window.prompt('Digite o primeiro numero');
let n2 = window.prompt('Digite o segundo numero');
let r = Number(n1) + Number(n2);
document.write(`A soma dos valores é igual à ${r}.`);

*/

/* Template Strings

const nome = 'Bruno';
const idade = 22;
const nota = '3,5';

console.log(`O aluno ${nome} de idade ${idade} anos tirou a nota ${nota}.`);


let nome = window.prompt('Qual o seu nome?');

document.write(`O seu nome tem ${nome.length} letras.`);  write é o atributo que escreve no documento HTML, pode se escrever tags.

let n1 = 1500.5

n1.toFixed()      toFixed aceita como parametro o número de casas decimais desejado.
n1.toFixed(2).replace('' , '')  substitui o elemento do primeiro parametro pelo do segundo.
n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

*/

/* Ordem de precedência dos operadores aritméticos

() 
**
* / % 
+ -  

*/

/* Operador ternário 

let nota1 = window.prompt('Qual a sua nota do primeiro trimestre?');
let nota2 = window.prompt('Qual a sua nota do segundo trimestre?');
let nota3 = window.prompt('Qual a sua nota do terceiro trimestre?');
let media = (Number(nota1) + Number(nota2) + Number(nota3)) / 2;
media >= 6 ? document.write('Aprovado') : document.write('Reprovado');

/*