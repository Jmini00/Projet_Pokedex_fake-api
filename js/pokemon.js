/**
 * Récupération des détails d'un pokemon
 */

const params = new URLSearchParams(window.location.search)
const idPokemon = params.get('id')

fetch(`https://my-json-server.typicode.com/Jmini00/fake-api/pokemons/${idPokemon}`)
    .then(response => response.json())
    .then(pokemon => {
        const template = document.querySelector('#pokemon-template').content
        const pokemonDetail = document.importNode(template, true)

        pokemonDetail.querySelector('.pokemonCard').id = `pokemon-${pokemon.id}`
        pokemonDetail.querySelector('.img-fluid').src = `assets/img/images/${pokemon.id}.png`
        pokemonDetail.querySelector('.img-fluid').alt = pokemon.name
        pokemonDetail.querySelector('.img-fluid').title = `#${pokemon.id} ${pokemon.name}`
        pokemonDetail.querySelector('.card-title').textContent = `#${pokemon.id} ${pokemon.name}`
        pokemonDetail.querySelector('.card-text-hp').textContent = `HP : ${pokemon.HP}`
        pokemonDetail.querySelector('.card-text-attack').textContent = `Attaque : ${pokemon.Attack}`
        pokemonDetail.querySelector('.card-text-defense').textContent = `Défense : ${pokemon.Defense}`
        pokemonDetail.querySelector('.card-text-spattack').textContent = `Attaque Spéciale : ${pokemon.SpAttack}`
        pokemonDetail.querySelector('.card-text-spdefense').textContent = `Défense Spéciale : ${pokemon.SpDefense}`
        pokemonDetail.querySelector('.card-text-speed').textContent = `Vitesse : ${pokemon.Speed}`

        document.querySelector('#pokemon-grid').appendChild(pokemonDetail)
    })
    .catch(error => console.error(error))


/**
 * Récupération des détails d'un pokemon
 */

/*const params = new URLSearchParams(window.location.search)
const idPokemon = params.get('id')

fetch(`https://my-json-server.typicode.com/Jmini00/fake-api/pokemons/${idPokemon}`)
    .then(response => response.json())
    .then(pokemon => {
        const template = document.querySelector('#pokemon-template').content
        const pokemonDetail = document.importNode(template, true)

        pokemonDetail.querySelector('.modal fade').id = `pokemon-${pokemon.id}`
        pokemonDetail.querySelector('.modal-body img').src = `assets/img/images/${pokemon.id}.png`
        pokemonDetail.querySelector('.modal-body img').alt = pokemon.name
        pokemonDetail.querySelector('.modal-body img').title = `#${pokemon.id} ${pokemon.name}`
        pokemonDetail.querySelector('.modal-title').textContent = `#${pokemon.id} ${pokemon.name}`
        pokemonDetail.querySelector('.card-text-hp').textContent = `HP : ${pokemon.HP}`
        pokemonDetail.querySelector('.card-text-attack').textContent = `Attaque : ${pokemon.Attack}`
        pokemonDetail.querySelector('.card-text-defense').textContent = `Défense : ${pokemon.Defense}`
        pokemonDetail.querySelector('.card-text-spattack').textContent = `Attaque Spéciale : ${pokemon.SpAttack}`
        pokemonDetail.querySelector('.card-text-spdefense').textContent = `Défense Spéciale : ${pokemon.SpDefense}`
        pokemonDetail.querySelector('.card-text-speed').textContent = `Vitesse : ${pokemon.Speed}`

        document.querySelector('#pokemons-grid').appendChild(pokemonDetail)
    })
    .catch(error => console.error(error))*/
