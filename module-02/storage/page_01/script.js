// elements
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const reloadBtn = document.querySelector('#reload');

const input = document.querySelector('#userInput');
// console.log('formElement', form);

//Eventlistener
window.addEventListener('load', () => {
    const data = JSON.parse(localStorage.getItem('data')) || [];
    data.forEach(addQuote);
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const input = event.target.elements.userInput.value;

    if (!input) alert('Please provide an input');

    // add to localstorage
    addToLocalStorage(input);

    // add to ul
    addQuote(input);

    // form reset
    form.reset();
});

reloadBtn.addEventListener('click', () => {
    window.location.reload();
});

//functions

function addToLocalStorage(item) {
    const data = JSON.parse(localStorage.getItem('data')) || [];
    data.unshift(item);
    localStorage.setItem('data', JSON.stringify(data));
}

function addQuote(content) {
    const li = document.createElement('li');
    li.textContent = content;
    ul.insertBefore(li, ul.firstElementChild);
}
