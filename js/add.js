
document.getElementById('add-pokemon-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const HP = parseInt(document.getElementById('hp').value.trim());
    const attack = parseInt(document.getElementById('attack').value.trim());
    const defense = parseInt(document.getElementById('defense').value.trim());
    const spattack = parseInt(document.getElementById('spattack').value.trim());
    const spdefense = parseInt(document.getElementById('spdefense').value.trim());
    const speed = parseInt(document.getElementById('speed').value.trim());


fetch('https://my-json-server.typicode.com/Jmini00/fake-api/pokemons', {
    method: 'POST',
    headers: {
        
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: name,
        HP: HP,
        Attack: attack,
        Defense: defense,
        SpAttack: spattack,
        SpDefense: spdefense,
        Speed: speed
    })
    })

    .then(response => response.json())
    .then(data => {
        
        if(data && data.id) {
        // Création d'une "carte"
        const template = document.getElementById('pokemons-template').content
        const card = document.importNode(template, true)

            /*card.querySelector('.myCard').id = `pokemon-${pokemon.id}`
            card.querySelector('.card-img-top').src = `assets/img/images/${pokemon.id}.png`
            card.querySelector('.card-img-top').alt = name
            card.querySelector('.card-img-top').title = `#${pokemon.id} ${name}`
            card.querySelector('.pokemon').href = `pokemon.html?id=${pokemon.id}`*/

            card.querySelector('.myCard').id = `pokemon-${data.id}`
            card.querySelector('.card-img-top').src = `assets/img/images/${data.id}.png`
            card.querySelector('.card-img-top').alt = name
            card.querySelector('.card-img-top').title = `#${data.id} ${name}`
            //card.querySelector('.pokemon').href = `pokemon.html?id=${pokemon.id}`
            card.querySelector('h3').textContent = `#${data.id} ${name}`
            card.querySelector('.card-text-hp').textContent = `HP : ${HP}`
            card.querySelector('.card-text-attack').textContent = `Attaque : ${attack}`
            card.querySelector('.card-text-defense').textContent = `Défense : ${defense}`
            card.querySelector('.card-text-spattack').textContent = `Attaque Spéciale : ${spattack}`
            card.querySelector('.card-text-spdefense').textContent = `Défense Spéciale : ${spdefense}`
            card.querySelector('.card-text-speed').textContent = `Vitesse : ${speed}`

        /*const templatePokemon = document.getElementById('pokemon-template').content
        const cardPokemon = document.importNode(templatePokemon, true)
            cardPokemon.querySelector('.pokemonCard').id = `pokemon-${pokemon.id}`
        cardPokemon.querySelector('.img-fluid').src = `assets/img/images/${pokemon.id}.png`
        cardPokemon.querySelector('.img-fluid').alt = pokemon.name
        cardPokemon.querySelector('.img-fluid').title = `#${pokemon.id} ${pokemon.name}`
        cardPokemon.querySelector('.card-title').textContent = `#${pokemon.id} ${pokemon.name}`
        cardPokemon.querySelector('.card-text-hp').textContent = `HP : ${pokemon.HP}`
        cardPokemon.querySelector('.card-text-attack').textContent = `Attaque : ${pokemon.Attack}`
        cardPokemon.querySelector('.card-text-defense').textContent = `Defense : ${pokemon.Defense}`
        cardPokemon.querySelector('.card-text-spattack').textContent = `Attaque Spéciale : ${pokemon.SpAttack}`
        cardPokemon.querySelector('.card-text-spdefense').textContent = `Défense Spéciale : ${pokemon.SpDefense}`
        cardPokemon.querySelector('.card-text-speed').textContent = `Vitesse : ${pokemon.Speed}`*/
        
        // Ajoute une carte
        document.querySelector('#pokemons-grid').appendChild(card)
        //document.querySelector('#pokemon-grid').appendChild(cardPokemon)

        // Réinitialise le formulaire
        document.querySelector('form').reset();

        Swal.fire({
            position: "top-end",
            icon: 'success',
            title: 'Bravo',
            text: 'Pokemon ajouté avec succès !',
            showConfirmButton: false,
            timer: 3000
        });
        }
        else {
            alert('Une erreur s\'est produite lors de l\'ajout du pokemon.');
        }
    })
    .catch(error => console.error(error))
    //alert('Impossible de soumettre le formulaire pour le moment.');
});
//addPokemon(newPokemonData);


/*async function addPokemon(newPokemonData) {
    try {
        const response = await fetch('https://my-json-server.typicode.com/Jmini00/fake-api/pokemons', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPokemonData),
        });

        if (response.ok) {
            const result = await response.json();
            alert("Le Pokémon a été ajouté avec succès !");
            console.log("Nouveau Pokémon ajouté :", result);
            // Optionnel : Actualiser l'interface ou rediriger
            window.location.href = "index.html"; // Exemple : redirection vers la page d'accueil

        } else {
            const errorData = await response.json();
            alert("Erreur : " + errorData.message || "Impossible d'ajouter le Pokémon.");
        }
    } catch (error) {
        console.error("Erreur lors de l'ajout :", error);
        alert("Une erreur s'est produite. Veuillez réessayer.");
    }
}

// Exemple d'utilisation de la fonction
/*const newPokemonData = {
    name: "Bulbasaur",
    HP: 45,
    Attack: 49,
    Defense: 49,
    SpAttack: 65,
    SpDefense: 65,
    Speed: 45,
};*/

//addPokemon(newPokemonData);

/*document.getElementById('add-pokemon-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    // Récupération des données du formulaire
    const name = document.getElementById('name').value.trim();
    const HP = parseInt(document.getElementById('hp').value, 10);
    const attack = parseInt(document.getElementById('attack').value, 10);
    const defense = parseInt(document.getElementById('defense').value, 10);
    const spattack = parseInt(document.getElementById('spattack').value, 10);
    const spdefense = parseInt(document.getElementById('spdefense').value, 10);
    const speed = parseInt(document.getElementById('speed').value, 10);

    try {
        // Envoi de la requête POST
        const response = await fetch('https://my-json-server.typicode.com/Jmini00/fake-api/pokemons', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                name: name,
                HP: HP,
                Attack: attack,
                Defense: defense,
                SpAttack: spattack,
                SpDefense: spdefense,
                Speed: speed,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            // Création d'une carte pour le Pokémon
            const template = document.getElementById('pokemon-template').content;
            const card = document.importNode(template, true);

            card.querySelector('.img-fluid').src = `assets/img/images/${data.id}.png`;
            card.querySelector('.img-fluid').alt = data.name;
            card.querySelector('.img-fluid').title = `#${data.id} ${data.name}`;
            card.querySelector('.card-title').textContent = `#${data.id} ${data.name}`;
            card.querySelector('.card-text-hp').textContent = `HP : ${data.HP}`;
            card.querySelector('.card-text-attack').textContent = `Attaque : ${data.Attack}`;
            card.querySelector('.card-text-defense').textContent = `Défense : ${data.Defense}`;
            card.querySelector('.card-text-spattack').textContent = `Attaque Spéciale : ${data.SpAttack}`;
            card.querySelector('.card-text-spdefense').textContent = `Défense Spéciale : ${data.SpDefense}`;
            card.querySelector('.card-text-speed').textContent = `Vitesse : ${data.Speed}`;

            const template2 = document.getElementById('pokemons-template').content
            const card2 = document.importNode(template2, true)
            card2.querySelector('.myCard').id = `pokemon-${data.id}`;
            card2.querySelector('.card-img-top').src = `assets/img/images/${data.id}.png`;
            card2.querySelector('.card-img-top').alt = data.name;
            card2.querySelector('.card-img-top').title = `#${data.id} ${data.name}`;
            card2.querySelector('.pokemon').href = `pokemon.html?id=${data.id}`;
            // Ajoute la carte au DOM
            document.querySelector('#pokemons-grid').appendChild(card2);
            //document.querySelector('#pokemon-grid').appendChild(card);

            // Réinitialise le formulaire
            document.getElementById('add-pokemon-form').reset();

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Bravo',
                text: 'Pokémon ajouté avec succès !',
                showConfirmButton: false,
                timer: 2000,
            });
        } else {
            throw new Error(data.message || 'Erreur lors de l\'ajout du Pokémon.');
        }
    } catch (error) {
        console.error('Erreur:', error);
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Erreur',
            text: 'Impossible d\'ajouter le Pokémon.',
            showConfirmButton: true,
        });
    }
});*/


