function convertPokemonToLiHtml(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
                
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}" alt="${pokemon.name}">
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