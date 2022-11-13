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

const fetchSurprise = async () => {
    const urls = await Promise.any([
        fetch('https://aws.random.cat/meow'),
        fetch('https://dog.ceo/api/breeds/image/random')
    ])
    const response = await urls.json()
    const data = (response.message || response.file)
    getImg.src = data
}

getDog.addEventListener('click', () => fetchDogApi())
getCat.addEventListener('click', () => fetchCatApi())
getSurprise.addEventListener('click', () => fetchSurprise());

