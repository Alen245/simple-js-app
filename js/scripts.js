let pokemonRepository = (function () {
const pokemonList = [
    {
        name:"Alakazam", 
        height:1.5,
        type:["Psychic"]
    },
    {
    name:"Meowth", 
    height:0.4 , 
    type:["Normal"]
    },
    {
    name:"Onix",
    height:8.8 , 
    type:["Rock","Earth"]
    } ]
function add(pokemon) {
  pokemonList.push(pokemon);
}

function getAll() {
  return pokemonList;
}

return {
  add: add,
  getAll: getAll
};
})();


/*Before change

pokemonList.forEach(function(pokemon){
    document.write( pokemon.name + "'s height is: " + pokemon.height + "</p> " );
    if (pokemon.height >= 1.2)
    {
           document.write(" Wow, that's big!" +"</p>")
     }

});

*/

pokemonRepository.getAll().forEach(function(pokemon) {
  let pokemonList = document.querySelector(".pokemon-list");
  let listpokemon = document.createElement("li");
  let button = document.createElement("button");
  button.innerText = "placeholder";
  button.classList.add("button-class");
  listpokemon.appendChild(button);
  pokemonList.appendChild(listpokemon);
});