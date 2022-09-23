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