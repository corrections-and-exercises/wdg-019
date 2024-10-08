import {addToLocalStorage} from './storage.js';

export function createCard(data) {
    const card = document.createElement('div');

    card.classList.add(
        'bg-slate-100',
        'h-64',
        'w-52',
        'flex',
        'flex-col',
        'text-sm',
        'rounded'
    );

    const productImage = document.createElement('img');
    productImage.src = data.image;
    productImage.classList.add('h-2/3', 'w-full', 'object-over');

    const productTitle = document.createElement('p');
    productTitle.textContent = data.title;
    productTitle.classList.add('truncate', 'font-bold', 'p-1', 'mt-2');

    const productPrice = document.createElement('p');
    productPrice.textContent = `${data.price}€`;
    productPrice.classList.add('text-xs', 'ms-1', 'mt-1', 'mb-1');

    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Add to Cart';
    addToCartButton.classList.add(
        'bg-green-300',
        'rounded',
        'w-1/2',
        'p-1',
        'text-xs',
        'mx-auto',
        'mb-1',
        'hover:bg-green-500',
        'active:bg-orange-400'
    );

    addToCartButton.onclick = () => {
        addToLocalStorage('cart', data);
    };

    card.appendChild(productImage);
    card.appendChild(productTitle);
    card.appendChild(productPrice);
    card.appendChild(addToCartButton);
    return card;
}
