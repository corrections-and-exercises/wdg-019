// get status

export function countProductsInCart(cart) {
    return cart.reduce((acc, curr) => {
        acc += curr.amount;
        return acc;
    }, 0);
}

export function getTotal(cart) {
    return cart
        .reduce((acc, curr) => {
            acc += curr.price * curr.amount;
            return acc;
        }, 0)
        .toFixed(2);
}

// state changes

export function addToCart(cart, item) {
    if (isInCart(cart, item)) {
        return increaseAmount(cart, item);
    } else {
        return addNewItemToCart(cart, item);
    }
}

export function removeFromCart(cart, item) {
    if (!isInCart(cart, item)) return cart;

    const count = amountOfProductInCart(cart, item);
    if (count === 1) {
        return removeItemFromCart(cart, item);
    } else {
        return decreaseAmount(cart, item);
    }
}

// helper functions

function isInCart(cart, item) {
    return cart.some((c) => c.id === item.id);
}

function increaseAmount(cart, item) {
    return cart.map((el) =>
        el.id === item.id ? {...el, amount: el.amount + 1} : el
    );
}

function decreaseAmount(cart, item) {
    return cart.map((el) =>
        el.id === item.id ? {...el, amount: el.amount - 1} : el
    );
}

function addNewItemToCart(cart, item) {
    return [...cart, {...item, amount: 1}];
}

function removeItemFromCart(cart, item) {
    return cart.filter((el) => el.id !== item.id);
}

function amountOfProductInCart(cart, item) {
    return cart.find((el) => el.id === item.id).amount;
}
