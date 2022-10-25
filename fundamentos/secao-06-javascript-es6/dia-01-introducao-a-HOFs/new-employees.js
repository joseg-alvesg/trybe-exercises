const newEmployees = (newName) => {
  const employees = {
    id1: newName('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: newName('Luiza Drummond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: newName('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
const newName = (nomeCompleto) => {
  const email = nomeCompleto.split(' ').join('_').toLowerCase()
  return { nomeCompleto, email: `${email}@trybe.com` };
};

console.log(newEmployees(newName));