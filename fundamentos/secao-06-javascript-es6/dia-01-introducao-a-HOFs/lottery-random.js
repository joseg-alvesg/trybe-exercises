// Primeiro teste
// const lotteryGenerator = () => Math.ceil(Math.random() * 5)

// const numberCheck = (apostado, loteria) => loteria === apostado ? 'Parabéns você ganhou' : 'Tente novamente'

// console.log(numberCheck(3, lotteryGenerator()));


// Segundo teste
const numberCheck = (apostado, loteria) => loteria === apostado;

const lotteryGenerator = (apostado, callback) => {
  const loteria = Math.ceil(Math.random() * 5)
  return callback(apostado, loteria) ? 'Parabéns você ganhou' : 'Tente novamente';
};

console.log(lotteryGenerator(3, numberCheck));
