
function convertPokemonToLiHtml(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>
                
            <div class="detail">
                <ol class="types">
                    <li class="type">Grass</li>
                    <li class="type">Poison</li>
                </ol>
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="${pokemon.name}">
            </div>
                
        </li>`
}

const pokemonList = document.getElementById('pokemonList');

pokeApi.getPokemons()
    .then( (pokemons) => {
        for (let i = 0; i < pokemons.length; i++){
            const pokemon = pokemons[i];
            pokemonList.innerHTML += convertPokemonToLiHtml(pokemon)
        }    
    })

    
    .catch( (error) => console.log(error))


    console.log('Sucessfully');