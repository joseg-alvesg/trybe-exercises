const people = [
  { name: 'Mateus', age: 16 },
  { name: 'José', age: 18 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => arr.every((arr) => arr.age >= 18)

console.log(verifyAges(people, 18));