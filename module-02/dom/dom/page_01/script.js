// You can work here or download the template
const h1 = document.querySelector('.hero-content h1');
console.log('h1', h1);
const navLinks = document.querySelectorAll('.nav-list a');
console.log('navLinks', navLinks);
const button = document.querySelector('.btn');
console.log(button);

const header = document.querySelector('.header');
header.style.backgroundColor = '#b5651d';

h1.style.fontSize = '3rem';

navLinks.forEach((link) => (link.style.color = '#faf0e6'));

const heroContent = document.querySelector('.hero-content');
const newP = document.createElement('p');
newP.textContent = 'Open daily from 7 AM to 9 PM';
heroContent.appendChild(newP);
