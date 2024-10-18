import {useState, useEffect} from 'react';
export default function Pokemon() {
    const [pokemon, setPokemon] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let ignore = false;
        async function fetchPokemon() {
            try {
                setLoading(true);
                const res = await fetch(
                    'https://pokeapi.co/api/v2/pokemon?limit=150'
                );
                console.log(res);
                if (!res.ok) throw new Error('Request failed');
                const data = await res.json();
                if (!ignore) {
                    setPokemon(data.results);
                }
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        fetchPokemon();
        return () => {
            ignore = true;
        };
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    // if (error) {
    //     return <p>Something went wrong</p>;
    // }
    return (
        <>
            <h2>Pokemon</h2>

            {error ? (
                <p>Something went wrong</p>
            ) : (
                pokemon.map((p) => <p key={p.name}>{p.name}</p>)
            )}
        </>
    );
}
