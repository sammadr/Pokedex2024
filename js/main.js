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

        // Función para mostrar el nombre del Pokémon en el modal
          
        listaPokemones.append(div);

    // Función para poder abrir el modal al darle clic a la imagen del div del pokemon
        const imgPokemon = div.querySelector('.pokemon__img img');
        imgPokemon.addEventListener('click', function() {
        const modal = document.querySelector('.modal');
        modal.classList.add('modal--show');

        //console.log(pokemonId);
        mostrarDetallePokemon(pokemonId);
    });
   
    }

    function mostrarDetallePokemon(id) {
        const Idpokemon = id;
        let pokemonId = parseInt(Idpokemon, 10).toString();
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
            .then(response => response.json())
            .then(data => {
                //Traer valor de HP
                const hpStat = data.stats.find(stat => stat.stat.name === 'hp');
                const hpValue = hpStat.base_stat;
                //Traer valor de ataque
                const attackStat = data.stats.find(stat => stat.stat.name === 'attack');
                const attackValue = attackStat.base_stat;
                //Traer valor de defensa
                const defenseStat = data.stats.find(stat => stat.stat.name === 'defense');
                const defenseValue = defenseStat.base_stat;
                const abilities = data.abilities;
                const moves = data.moves;
                const pokemonName = data.name;
                const speciesUrl = data.species.url;
                const pokemonImage = data.sprites.other["official-artwork"].front_default;
    
                // Actualizar los elementos HTML con los datos recuperados
                document.querySelector('.basic__stats h3').innerHTML = `HP: ${hpValue}`;
                document.querySelector('#ataque').innerHTML = `Ataque: ${attackValue}`;
                document.querySelector('#defensa').innerHTML = `Defensa: ${defenseValue}`;
                document.querySelector('.pokeinfo h2').innerHTML = pokemonName;
                document.querySelector('.pokemon__image').src = pokemonImage;
    
                // Actualizar habilidades
                const habilidadesList = document.querySelector('.habilidades ul');
                habilidadesList.innerHTML = abilities.map(ability => `<li>${ability.ability.name}</li>`).join('');
    
                // Actualizar movimientos
                const movimientosList = document.querySelector('.movimientos ul');
                let allMoves = moves.map(move => `<li>${move.move.name}</li>`).join('');
                const totalMoves = moves.length;
                const movesToShow = totalMoves > 5 ? moves.slice(0, 5) : moves;
                movimientosList.innerHTML = movesToShow.map(move => `<li>${move.move.name}</li>`).join('');
    
                // Si hay más de 5 movimientos, mostrar el enlace "Ver más"
                if (totalMoves > 5) {
                    const verMasLink = document.createElement('a');
                    verMasLink.textContent = 'Ver más';
                    verMasLink.href = '#';
                    verMasLink.addEventListener('click', () => {
                        movimientosList.innerHTML = allMoves;
                        movimientosList.appendChild(verMenosLink);
                        verMasLink.remove();
                    });
                    movimientosList.appendChild(verMasLink);
    
                    // Ver menos
                    const verMenosLink = document.createElement('a');
                    verMenosLink.textContent = 'Ver menos';
                    verMenosLink.href = '#';
                    verMenosLink.addEventListener('click', () => {
                        movimientosList.innerHTML = movesToShow.map(move => `<li>${move.move.name}</li>`).join('');
                        movimientosList.appendChild(verMasLink);
                        verMenosLink.remove();
                    });
                }
    
                // Hacer una solicitud a la API para obtener los datos de especies
                fetch(speciesUrl)
                    .then(response => response.json())
                    .then(speciesData => {
                        // Obtener la URL de la cadena de evolución del Pokémon
                        const evolutionChainUrl = speciesData.evolution_chain.url;
    
                        // Hacer una solicitud a la API para obtener los datos de la cadena de evolución
                        fetch(evolutionChainUrl)
                            .then(response => response.json())
                            .then(evolutionData => {
                                // Actualizar las evoluciones
                                const evolucionesList = document.querySelector('.evoluciones ul');
                                evolucionesList.innerHTML = evolutionData.chain.evolves_to.map(evolucion => `<li>${evolucion.species.name}</li>`).join('');
                            })
                            .catch(error => {
                                console.error('Se produjo un error al obtener los datos de la cadena de evolución:', error);
                            });
                    })
                    .catch(error => {
                        console.error('Se produjo un error al obtener los datos de especies:', error);
                    });
    
            })
            .catch(error => {
                console.error('Se produjo un error al obtener los datos:', error);
            });
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