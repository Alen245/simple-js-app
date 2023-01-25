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
    }
];


pokemonList.forEach(function(pokemon){
    document.write( pokemon.name + "'s height is: " + pokemon.height + "</p> " );
    if (pokemon.height >= 1.2)
    {
           document.write(" Wow, that's big!" +"</p>")
     }

});