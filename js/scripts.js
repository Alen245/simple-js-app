let pokemonList = [
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


for (let i = 0; i < pokemonList.length; i++){
    document.write(i+1 +"." + pokemonList[i].name + "'s height is: " + pokemonList[i].height + " " );
    if (pokemonList[i].height >= 1.2)
    {
           document.write(" Wow, that's big!!") + "</p>"
     }

}