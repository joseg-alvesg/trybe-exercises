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

let word = 'o rato roeu a roupa do rei de ratos';
let inversor = [];

for (index = 0; index < word.length; index += 1){
  inversor.unshift(word[index]);
}
console.log(inversor.join(''));
