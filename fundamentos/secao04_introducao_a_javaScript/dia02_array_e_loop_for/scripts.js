let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for(let number of numbers) {
//   console.log(number);
// }

let sum = 0;
for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
  sum = sum + numbers[index];
}

let aritimetica = sum / numbers.length;
console.log(sum);

if (aritimetica > 20) {
  console.log("Valor maior que 20");
} else {
  console.log("Valor menor ou igual a 20")
}

let valoresImpares = [];
let checker = false;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    checker = true;
    valoresImpares.push(numbers[index]);
  }
}
if (checker == true) {
  console.log(valoresImpares);
} else {
  console.log("nenhum valor ímpar encontrado");
}

let menorValor = numbers[0];
for ( let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] < menorValor) {
    menorValor = numbers[index];
  }
}
console.log(menorValor);

let oneTo25 = [];
let divisor = []
for (let index = 0; index < 25; index += 1){
  oneTo25.push(index+1)
  divisor.push(oneTo25[index]/2);
}

console.log(oneTo25)
console.log(divisor)