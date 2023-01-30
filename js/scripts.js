let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';


    

function add(pokemon) {
  pokemonList.push(pokemon);
}

function getAll() {
  return pokemonList;
}

function addListItem(pokemon){
  let pokemonList = document.querySelector(".pokemon-list");
  let listpokemon = document.createElement("li");
  let button = document.createElement("button");
  button.innerText = pokemon.name;
  button.classList.add("button-class");
  listpokemon.appendChild(button);
  pokemonList.appendChild(listpokemon);
  button.addEventListener("click", 
  function(Event) {
    showDetails(pokemon);
   });


}



return {
  add: add,
  getAll: getAll,
  addListItem: addListItem,
  

};
})();

function showDetails (pokemon) {
  console.log(pokemon);
  };

  document.createElement('button')

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
  pokemonRepository.addListItem(pokemon);
  
});