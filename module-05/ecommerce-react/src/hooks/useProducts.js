import {useState, useEffect} from 'react';
import {fetchData} from '../utils/fetch.js';

const cache = {};

export default function useProducts(path) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getProducts() {
            if (cache[path]) {
                setData(cache[path]);
                return;
            }
            setLoading(true);
            const {error, data} = await fetchData(
                `https://fakestoreapi.com/${path}`
            );
            if (error) {
                setError(error);
                setLoading(false);
                return;
            }
            setData(data);
            cache[path] = data;
            setLoading(false);
        }
        getProducts();
    }, [path]);
    return {error, loading, data};
}
