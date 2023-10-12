const getPokemon = async (e) => {
    e.preventDefault();
    const pokemon = e.target.pokemon.value;
    console.log(pokemon)
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)

    let pokeAbilities = '';
    for (const ability of data.abilities) {
        pokeAbilities += `${ability.ability.name} `
    }

    const container = document.getElementById('displayPokemon');
    container.innerHTML = '';
    let card = `
        <div class="container d-flex justify-content-center align-items-center mt-5">
            <div class="card border border-dark" style="width: 18rem;">
                <img src="${data.sprites.front_shiny}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${pokemon}</h5>
                    <p class="card-text">Abilities: ${pokeAbilities}</p>
                </div>
            </div>
        </div>
    `
    container.innerHTML = card
}

const form = document.querySelector('form')
form.addEventListener('submit', getPokemon)