const url = 'https://fakestoreapi.com/products';

export async function fetchProducts() {
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error('Request failed');
        return res.json();
    } catch (error) {
        console.error(error);
    }
}
