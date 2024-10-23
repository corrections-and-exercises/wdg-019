import {capitalizeString} from '../utils/utils.js';
import {useNavigate} from 'react-router-dom';
export default function PokemonPreview({pokemon}) {
    const navigate = useNavigate();

    function handleNavigate() {
        navigate(`pokemon/${pokemon.id}`);
    }
    return (
        <div className='card bg-base-100 w-96 shadow-xl'>
            <figure>
                <img
                    src={
                        pokemon.sprites.other['official-artwork'].front_default
                    }
                    alt={pokemon.name}
                />
            </figure>
            <div className='card-body'>
                <h2 className='card-title'>{capitalizeString(pokemon.name)}</h2>
            </div>
            <div className='card-actions justify-end'>
                <button onClick={handleNavigate} className='btn btn-primary'>
                    See Details
                </button>
            </div>
        </div>
    );
}
