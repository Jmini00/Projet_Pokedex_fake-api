/**
 * Sélectionner et affiche les pokemons
 */
fetch('https://my-json-server.typicode.com/Jmini00/fake-api/pokemons')
    .then(response => response.json())
    .then(pokemons => {
        const grid = document.querySelector('#pokemons-grid')
        const template = document.querySelector('#pokemons-template').content

        pokemons.forEach(pokemon => {
            const pokemonNode = document.importNode(template, true)

            pokemonNode.querySelector('.myCard').id = `pokemon-${pokemon.id}`
            pokemonNode.querySelector('.card-img-top').src = `assets/img/images/${pokemon.id}.png`
            pokemonNode.querySelector('.card-img-top').alt = pokemon.name
            pokemonNode.querySelector('.card-img-top').title = `#${pokemon.id} ${pokemon.name}`
            pokemonNode.querySelector('.pokemon').href = `pokemon.html?id=${pokemon.id}`
            pokemonNode.querySelector('h3').textContent = `#${pokemon.id} ${pokemon.name}`
            pokemonNode.querySelector('.card-text-hp').textContent = `HP : ${pokemon.HP}`
            pokemonNode.querySelector('.card-text-attack').textContent = `Attaque : ${pokemon.Attack}`
            pokemonNode.querySelector('.card-text-defense').textContent = `Défense : ${pokemon.Defense}`
            pokemonNode.querySelector('.card-text-spattack').textContent = `Attaque Spéciale : ${pokemon.SpAttack}`
            pokemonNode.querySelector('.card-text-spdefense').textContent = `Défense Spéciale : ${pokemon.SpDefense}`
            pokemonNode.querySelector('.card-text-speed').textContent = `Vitesse : ${pokemon.Speed}`
            grid.appendChild(pokemonNode)
        })
    })
    .catch(error => console.error(error))

   