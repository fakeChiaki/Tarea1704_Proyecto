const axios = require('axios');

async function buscarPokemonNombre(){
    const pokemonName = document.getElementsByName("pokemonName");
}

async function buscarPokemonID(){
    const pokemonName = document.getElementById("pokemonID");
}

const fetchPostsAsync = async () => {
    try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
        console.log(response.data);
    } catch(error) {
        console.error("Error fetching Pokemon Data: ", error);
    }

    //fetchPostsAsync();
    //createPost(,);
}
