//=============================================================
// Calculo de fatorial
//=============================================================
let fatorial = 10;
let resultado = fatorial;

for (let index = 1; index < fatorial; index += 1) {
  resultado *= index;
}
console.log(resultado);

//=============================================================
// inversão de palavras
//=============================================================

let word = 'O rato roeu a roupa do rei dos';
let inversor = "";

for (index = word.length-1; index >= 0; index -= 1){
  inversor += word[index]
}
// console.log(inversor.join(''));
console.log(inversor)

//=============================================================
// Maior e menor palavra do array
//=============================================================

let array = ['java', 'javascript', 'python', 'html', 'css'];
maiorPalavra = array[0];
menorPalavra = array[0];

for (let index = 1; index < array.length; index += 1) {
  if (maiorPalavra.length < array[index].length) {
    maiorPalavra = array[index];
  }
  
  if (menorPalavra.length > array[index].length){
    menorPalavra = array[index];
  }
}
console.log(maiorPalavra);
console.log(menorPalavra);

//=============================================================
// Maior numero primo entre 2 e 50
//=============================================================

let maiorPrimo = 0;

for (let numeroatual = 2; numeroatual <= 50; numeroatual += 1) {
  let ehPrimo = true;
  for(let divisor = 2; divisor < numeroatual; divisor += 1){
    if (numeroatual % divisor === 0){
      ehPrimo = false;
    }
  }
  if (ehPrimo) {
    maiorPrimo = numeroatual;
  }
}
console.log(maiorPrimo);
