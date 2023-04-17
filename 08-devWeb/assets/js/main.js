function convertTypesToLiHtml(pokemonsTypes) {
    return pokemonsTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}



function convertPokemonToLiHtml(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#${pokemon.order}</span>
            <span class="name">${pokemon.name}</span>
                
            <div class="detail">
                <ol class="types">
                    ${convertTypesToLiHtml(pokemon.types).join('')}
                </ol>
                <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
            </div>
                
        </li>`
}

const pokemonList = document.getElementById('pokemonList');

pokeApi.getPokemons()
    .then( (pokemons = []) => {
        const newHtmp = pokemonList.innerHTML += pokemons.map(convertPokemonToLiHtml).join('')
        pokemonList.innerHTML = newHtmp
})
        


    console.log('Sucessfully');