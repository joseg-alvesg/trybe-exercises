const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

const authorBornIn1947 = (books) => {
  const year = books.find((book) => book.author['birthYear'] === 1947).author.name;
  return year;
}

const smallerName = () => {
  let nameBook;
  books.forEach((book) => {
    if (nameBook === undefined || book.name.length < nameBook.length) {
      nameBook = book.name
    }
  });

  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

const getNamedBook = () => {
  // escreva seu código aqui
  const chars26 = books.find((book) => book.name.length === 26).name;
  return chars26;
}

const booksOrderedByReleaseYearDesc = () => {
  // escreva aqui seu código
  return books.sort((a, b) => b.releaseYear - a.releaseYear);
}

const everyoneWasBornOnSecXX = () => {
  return books.every((year) => year.author.birthYear <= 2000 && year.author.birthYear > 1900);
}

const someBookWasReleaseOnThe80s = () => {
  return books.some((book) => book.releaseYear >= 1980 && book.releaseYear < 1990);
}

const authorUnique = () => {
  return books.every((birth) => 
    !books.some((birthCheck) => 
      birthCheck.author.birthYear === birth.author.birthYear && 
        birth.author.name !== birthCheck.author.name))
}

// console.log(authorBornIn1947(books))
// console.log(smallerName())
// console.log(getNamedBook());
// console.log(booksOrderedByReleaseYearDesc());
// console.log(everyoneWasBornOnSecXX())
// console.log(someBookWasReleaseOnThe80s());
console.log(authorUnique());