console.log('hello world');

localStorage.setItem('myCat', 'Tom');

console.log(localStorage.getItem('myCat'));

localStorage.setItem('cart', JSON.stringify(['book1', 'book2']));

const data = JSON.parse(localStorage.getItem('cart'));

data.push('newbook');

localStorage.setItem('cart', JSON.stringify(data));

console.log(typeof JSON.parse(localStorage.getItem('cart')));

// localStorage.removeItem('myCat');

// localStorage.clear();

const json = {age: '2'};
