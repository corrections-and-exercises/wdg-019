import {useState, useEffect} from 'react';
export default function useFetch(url) {
    const [data, setData] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const res = await fetch(url);
                if (!res.ok) throw new Error('Request failed');
                const data = await res.json();
                setData(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [url]);

    return {error, loading, data};
}
