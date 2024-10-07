const button = document.querySelector('button');

function greet() {
    console.log('hello');
}

// const timeOutID = setTimeout(greet, 2000);
// const intervalIdv = setInterval(greet, 2000);

button.addEventListener('click', () => {
    // clearTimeout(timeOutID);
    clearInterval(intervalId);
});

setTimeout(() => console.log('salut'), 0);
console.log('hello');
