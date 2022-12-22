const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((arr) => arr === name)
};

console.log(hasName(names, 'Ana'));