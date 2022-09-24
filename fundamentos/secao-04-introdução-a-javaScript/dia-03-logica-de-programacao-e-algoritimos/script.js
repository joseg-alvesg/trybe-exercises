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

