import './style.css'

const getImg = document.querySelector('#img');
const getDog = document.querySelector('#btn-dog');
const getCat = document.querySelector('#btn-cat');
const getSurprise = document.querySelector('#btn-surprise');

const fetchDogApi = async () => {
    const url = 'https://dog.ceo/api/breeds/image/random';
    const response = await fetch(url);
    const data = await response.json();
    getImg.src = data.message;
}

const fetchCatApi = async () => {
    const url = 'https://aws.random.cat/meow';
    const response = await fetch(url);
    const data = await response.json()
    getImg.src = data.file;
}

const fetchSurprise = () => {
    let random = Math.floor(Math.random() * 2);
    console.log(random)
    if(random = 1) {
        return fetchCatApi();
    }
    return fetchDogApi();
}

getDog.addEventListener('click', () => fetchDogApi())
getCat.addEventListener('click', () => fetchCatApi())
getSurprise.addEventListener('click', () => fetchSurprise());

