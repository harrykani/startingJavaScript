/* Operador Ternário => atribui valor para caso verdadeiro e falso (if e else unico);

let score = 1000;
let clientTier = score >= 1000 ? 'VIP' : 'Normal';
console.log(clientTier);

*/



/* Função para interagir e alterar o conteúdo de um elemento

function titleChanger(newTitle) {
    let pageTitle = document.querySelector('#title'); //id
    pageTitle.textContent = newTitle;
    return pageTitle;
  }

function textChanger(newText) {
    let textElement = document.querySelector('.text'); //class
    textElement.textContent = newText;
    return newText;
}

function subtitleChanger(newSub) {
    let subTextElement = document.querySelector('h2');  //tag
    subTextElement.textContent = newSub;
    return
}

titleChanger('title');
textChanger('random');
subtitleChanger('sub');

*/

// Troca familia da fonte

let btnFamilyMono = document.querySelector('.btn1');
let btnFamilyFranklin = document.querySelector('.btn2');
let btnFamilyTimes = document.querySelector('.btn3');

function changeFont(font) {
    document.body.style.fontFamily = font;
    document.body.style.fontWeight = normal;
  }

btnFamilyMono.addEventListener('click', () => {
    changeFont('monospace');
})

btnFamilyFranklin.addEventListener('click', () => {
    changeFont('Franklin Gothic Medium');
})

btnFamilyTimes.addEventListener('click', () => {
    changeFont('Times New Roman');
})

