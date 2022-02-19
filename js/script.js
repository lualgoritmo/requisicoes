
const $poker = document.querySelector('.name');

const getPokemon = async() =>
{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=200`);
    //console.log('TOTAL',response.json());
    return await response.json();
}
const personPokemon = async result=>
{
    result = await getPokemon();
    result.results.map(response =>
    {
        const{name, url} = response;
        let li = document.createElement('li');
        li.innerHTML = `${name},  ${url}`;
        $poker.append(li);
        //console.log(name, url);
    });
}
/*const personPokemon = async() =>
{
    const pokemonResult = await  getPokemon();
    console.log(pokemonResult.results);
    pokemonResult.results.map(response => 
    {
        let li = document.createElement('li');
            li.innerHTML = `${response.name},  ${response.url}`;
            $poker.append(li);
    });
}*/
personPokemon();
/*const personPokemon = async() =>
{
    const pokemonResult = await  getPokemon();
    console.log(pokemonResult.results);
    pokemonResult.json()
    .then(person => 
    {
        console.log('Person',person);
          person.results.map(response => 
          {
              let li = document.createElement('li');
                  li.innerHTML = `${response.name},  ${response.url}`;
                  $poker.append(li);
          });
    })
    .catch(error => alert(error));
}*/
