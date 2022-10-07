const getSubmitButton = document.getElementById('submit-btn');
const getButton = document.getElementById('buttons');


getSubmitButton.addEventListener('click', (event) => {
  const getUserName = document.getElementById('user-name').value;
  const getUsereEmail = document.getElementById('user-email').value;

  if ((getUserName.length < 10 || getUserName.length > 50) || (getUsereEmail.length < 10 || getUsereEmail.length > 50)) {
    alert('Dados Inválidos');
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
  }
  event.preventDefault();
})

const creatBtn = () => {
  const createButton = document.createElement('button')
  createButton.type = 'reset';
  createButton.innerHTML = 'Limpar';
  getButton.appendChild(createButton);
}
creatBtn();

