
const $poker = document.querySelector('.name');

const getPokemon = async() =>
{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=200`);
    return response;
}

const personPokemon = async() =>
{
    const pokemonResult = await  getPokemon();
    pokemonResult.json()
    .then(person => {
          person.results.map(response => {
              let li = document.createElement('li');
                  li.innerHTML = `${response.name},  ${response.url}`;
                  $poker.append(li);
          });
    })
    .catch(error => alert(error));
}
personPokemon();