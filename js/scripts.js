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
    document.write(i+1 +"." + pokemonList[i].name + "'s height is: " + pokemonList[i].height + "</p> " );
    if (pokemonList[i].height >= 1.2)
    {
           document.write(" Wow, that's big!" +"</p>")
     }

});