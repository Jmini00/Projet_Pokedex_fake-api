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
        // Lance le moteur de recherche une fois que les cartes sont générées
        searchPokemon();
    })
    .catch(error => console.error(error))

  
/**
 * Moteur de recherche par nom
 */
function searchPokemon() {
    const search = document.getElementById('search');
    const pokemonCards = document.querySelectorAll('#pokemons-grid .myCard');

    search.addEventListener('input', () => {
        const query = search.value.toLowerCase().trim();

        pokemonCards.forEach(pokemonCard => {
            const pokemonName = pokemonCard.querySelector('h3').textContent.toLowerCase();
            // Vérifie si l'artiste correspond à la recherche
            if (pokemonName.includes(query)) {
                pokemonCard.style.display = ''; // Affiche la carte
                //pokemonCard.classList.remove('hidden');
                //pokemonCard.classList.add('visible');
            } else {
                pokemonCard.style.display = 'none'; // Masque la carte
                //pokemonCard.classList.remove('visible');
                //pokemonCard.classList.add('hidden');
            }
        });
    });
}