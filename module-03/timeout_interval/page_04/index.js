let counter = 145;

let intervalId = setInterval(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)
        .then((res) => {
            if (!res.ok) throw new Error('Request failed');
            return res.json();
        })
        .then((data) => {
            const pokemon = {id: data.id, name: data.name};
            console.log(pokemon);
        })
        .catch((err) => {
            console.error(err);
        });
    counter++;
    if (counter > 150) {
        clearInterval(intervalId);
        console.log('finished');
    }
}, 1000);
