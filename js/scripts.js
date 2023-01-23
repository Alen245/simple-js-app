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
    document.write(pokemonList[i].name + " " + pokemonList[i].height + " ");

}