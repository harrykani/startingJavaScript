const input = document.querySelector('.input');
const faixaEtaria = document.querySelector('.faixa-etaria');
const response = document.querySelector('.response')
const form = document.querySelector('.form');


form.addEventListener('submit', (event) => {
    event.preventDefault(); 
    const idade = parseInt(input.value);
    faixaEtaria.textContent = getAgeGroup(idade);
    response.style.display = 'block';
  });
  
  function getAgeGroup(idade) {
    if (idade >= 90 && idade < 120) {
      return 'Ente';
    } else if (idade >= 75 && idade < 90) {
      return 'Ancião';
    } else if (idade >= 60 && idade < 75) {
      return 'Idoso';
    } else if (idade >= 45 && idade < 60) {
      return 'Meia-idade';
    } else if (idade >= 25 && idade < 45) {
      return 'Adulto';
    } else if (idade >= 18 && idade < 25) {
      return 'Jovem-Adulto';
    } else if (idade >= 14 && idade < 18) {
      return 'Adolescente';
    } else if (idade >= 11 && idade < 14) {
      return 'Pré-Adolescente';
    } else if (idade >= 3 && idade < 11) {
      return 'Criança';
    } else if (idade >= 1 && idade < 3) {
      return 'Bebê';
    } else if (idade >= 0 && idade < 1) {
      return 'Recém-Nascido';
    } else {
        return 'Você realmente está vivo?';
    }
  }