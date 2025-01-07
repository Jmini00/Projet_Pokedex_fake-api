/**
 * Sélectionner et affiche les pokemons
 */
fetch('https://my-json-server.typicode.com/Jmini00/fake-api/pokemons')
    .then(response => response.json())
    .then(pokemons => {
        const grid = document.querySelector('#pokemons-grid')
        const template = document.querySelector('#pokemon-template').content

        pokemons.forEach(pokemon => {
            const pokemonNode = document.importNode(template, true)

            pokemonNode.querySelector('.card-img-top').src = `assets/img/images/${pokemon.id}.png`
            pokemonNode.querySelector('.card-img-top').alt = pokemon.name
            pokemonNode.querySelector('.card-img-top').title = `#${pokemon.id} ${pokemon.name}`
            //productNode.querySelector('.card-body .fw-bolder').textContent = product.title
            //productNode.querySelector('.card-body .price').textContent = `${product.price.toFixed(2)} €`
            pokemonNode.querySelector('.pokemon').href = `pokemon.html?id=${pokemon.id}`

            grid.appendChild(pokemonNode)
        })
    })
    .catch(error => console.error(error))
