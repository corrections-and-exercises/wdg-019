const pokemonContainer = document.getElementById('pokemon-container');

async function fetchPokemon(id) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!response.ok) throw new Error('Request failed');
        const pokemon = await response.json();
        return pokemon;
    } catch (error) {
        console.error(`Error fetching Pokemon with id ${id}:`, error);
    }
}

async function displayPokemon() {
    for (let i = 1; i <= 150; i++) {
        const pokemon = await fetchPokemon(i);

        if (pokemon) {
            const pokemonCard = document.createElement('div');
            pokemonCard.classList.add(
                'bg-white',
                'rounded-lg',
                'shadow-md',
                'p-4',
                'flex',
                'flex-col',
                'items-center',
                'text-center'
            );

            const pokemonImage = document.createElement('img');
            pokemonImage.src = pokemon.sprites.front_default;
            pokemonImage.alt = pokemon.name;
            pokemonImage.classList.add('mb-4');

            const pokemonName = document.createElement('h2');
            pokemonName.textContent =
                pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

            pokemonName.classList.add('text-xl', 'font-bold', 'mb-2');

            const pokemonInfo = document.createElement('p');
            pokemonInfo.textContent = `ID: ${pokemon.id}| Type: ${pokemon.types
                .map((typeInfo) => typeInfo.type.name)
                .join(', ')}`;

            pokemonInfo.classList.add('text-gray-600');

            pokemonCard.appendChild(pokemonImage);
            pokemonCard.appendChild(pokemonName);
            pokemonCard.appendChild(pokemonInfo);

            pokemonContainer.appendChild(pokemonCard);
        }
    }
}

displayPokemon();
