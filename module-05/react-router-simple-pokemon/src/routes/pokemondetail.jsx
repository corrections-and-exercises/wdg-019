import {useState, useEffect} from 'react';

import {useParams, useNavigate} from 'react-router-dom';
import {capitalizeString} from '../utils/utils.js';

export default function PokemonDetail() {
    const [pokemon, setPokemon] = useState();
    const {name} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchPokemon() {
            try {
                const res = await fetch(
                    `https://pokeapi.co/api/v2/pokemon/${name}`
                );
                if (!res.ok) throw new Error('Request failed');
                const data = await res.json();
                setPokemon(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchPokemon();
    }, [name]);

    if (!pokemon) return <p>Loading...</p>;

    return (
        <div className='bg-base-200 min-h-screen p-10'>
            <div className='hero-content flex-col lg:flex-row'>
                <img
                    src={pokemon.sprites.other.dream_world.front_default}
                    alt={pokemon.name}
                />
            </div>
            <h1 className='text-5xl font-bold'>
                {capitalizeString(pokemon.name)}
            </h1>
            <button onClick={() => navigate(-1)} className='btn btn-primary'>
                Go Back
            </button>
        </div>
    );
}
