import {fetchProducts} from './modules/network.js';
import {createCard} from './modules/ui.js';

document.addEventListener('DOMContentLoaded', async () => {
    const cardContainer = document.getElementById('card-container');
    try {
        const products = await fetchProducts();

        products.forEach((product) => {
            const productCard = createCard(product);
            cardContainer.appendChild(productCard);
        });
    } catch (error) {
        console.error(error);
    }
});
