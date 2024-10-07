const messageContainer = document.querySelector('#message-container');

function showPromotionMessage() {
    const promotionMessage = document.createElement('div');

    promotionMessage.textContent =
        'Special Offer: Get 20% off your next purchase!';

    promotionMessage.classList.add(
        'bg-red-500',
        'text-white',
        'p-4',
        'shadow-lg',
        'max-w-md',
        'mx-auto',
        'rounded-lg'
    );

    messageContainer.appendChild(promotionMessage);
}

setTimeout(() => {
    showPromotionMessage();
}, 3000);
