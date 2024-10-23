import {useEffect, useState} from 'react';
import PokemonPreview from '../ui/pokemonpreview.jsx';
export default function Home() {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        async function fetchPokemon() {
            try {
                const res = await fetch(
                    'https://pokeapi.co/api/v2/pokemon?limit=50'
                );
                if (!res.ok) throw new Error('Request failed');
                const data = await res.json();
                const result = await Promise.all(
                    data.results.map(async (el) => {
                        const res = await fetch(el.url);
                        if (!res.ok) throw new Error('Request failed');
                        const data = await res.json();
                        return data;
                    })
                );
                setPokemon(result);
            } catch (error) {
                console.error(error);
            }
        }
        fetchPokemon();
    }, []);
    return (
        <div className='flex min-h-screen flex-wrap justify-center gap-6 bg-amber-400'>
            {pokemon.map((poke) => {
                return <PokemonPreview key={poke.id} pokemon={poke} />;
            })}
        </div>
    );
}
