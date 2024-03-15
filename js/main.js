document.addEventListener("DOMContentLoaded", function() 
{
    const listaPokemones = document.querySelector("#listaPokemon");
    const menuBotones = document.querySelectorAll(".btn__header");
    let URL = "https://pokeapi.co/api/v2/pokemon/";


    for (let i = 1; i <= 300 ; i++) {
        fetch(URL + i)
        .then((response) => response.json())
        .then(data => mostrarPokemon(data))
    }

    function mostrarPokemon(data)
    {
        let tipos = data.types.map((type) =>  
        `<p class="${type.type.name} tipo">${type.type.name}</p>`);
        tipos = tipos.join('')

        //Agrega un cero delante del Id del Pokemon

        let pokemonId = data.id.toString();
        if (pokemonId.length === 1) {
            pokemonId = "00" + pokemonId;
        }else if (pokemonId.length === 2) {
            pokemonId = "0" + pokemonId;
            
        }

        const div = document.createElement("div");
        div.classList.add("pokemon");
        div.innerHTML = `
        <div class="pokemon" >
                    <p class="pokemon__id-back">#${pokemonId}</p>
                    <div class="pokemon__img">
                        <img src="${data.sprites.other["official-artwork"].front_default}" alt="${data.name}">
                    </div>
                    <div class="pokemon__info">
                        <div class="nombre__contenedor">
                            <p class="pokemon__id">#${pokemonId}</p>
                            <h2 class="pokemon__nombre">${data.name}</h2>
                        </div>
                        <div class="pokemon__tipos">
                            ${tipos}
                        </div>
                    </div>

                    
        </div>
        `;
        listaPokemones.append(div);
    }

    menuBotones.forEach(boton => boton.addEventListener("click", (event) => {
        const botonId = event.currentTarget.id;
        listaPokemones.innerHTML = "";

        for (let i = 1; i <= 300 ; i++) {
            fetch(URL + i)
            .then((response) => response.json())
            .then(data => {

                if(botonId === "ver-todos")
                {
                    mostrarPokemon(data);
                }
                else{
                    const tipos = data.types.map(type => type.type.name);
                    if (tipos.some(tipo => tipo.includes(botonId))) {
                        mostrarPokemon(data);
                    }
                }
                
            })
        }
    }));
});