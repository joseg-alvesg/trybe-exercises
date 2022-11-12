import './style.css';


const getBtn = document.querySelector('#btn-sort')
const getCard = document.querySelector('#cardName')
const getImage = document.querySelector('#image')



const api = () => {
    const id = Math.floor(Math.random() * 800)
    const hero = `https://akabab.github.io/superhero-api/api/id/${id}.json`
    fetch(hero)
    .then(promise => promise.json())
    .then(result => {
        getImage.src = result.images.md;
        getCard.innerHTML = result.name
    })
    .catch(() => Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      }))
}

const obj = api();
console.log(obj);
getBtn.addEventListener('click', () => api())
