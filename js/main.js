document.addEventListener("DOMContentLoaded", function() 
{
    const listaPokemones = document.querySelector("#listaPokemon");
    const menuBotones = document.querySelectorAll(".btn__header");
    const inputId = document.querySelector("#buscarInput");
    const btnBuscar = document.querySelector("#buscarBtn");
    const busqueda = document.querySelector("#busqueda__pokemon");
    const modal = document.querySelector(".modal__container");
    let URL = "https://pokeapi.co/api/v2/pokemon/";


    for (let i = 1; i <= 300 ; i++) {
        fetch(URL + i)
        .then((response) => response.json())
        .then(data => mostrarPokemon(data))
        .catch((error) => casoError(error));
    }

    function mostrarPokemon(data)
    {
         // Limpiar contenido anterior
         

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

        
        // Función para poder abrir el modal al darle clic a la imagen del div del pokemon
        const imgPokemon = div.querySelector('.pokemon__img img');
        imgPokemon.addEventListener('click', function() 
        {
            const modal = document.querySelector('.modal');
            modal.classList.add('modal--show');
            
        });
    }

        //Funcion para buscar el Pokemon 
         // Event listener para el botón de búsqueda
         function buscarPokemon() {
            const searchTerm = inputId.value.trim().toLowerCase();
            if (!searchTerm) return; // No busca si el campo está vacío
        
            const searchURL = `${URL}${searchTerm}`;
            fetch(searchURL)
                .then((response) => response.json())
                .then((data) => mostrarPokemon(data))
                .catch((error) => casoError(error));
                listaPokemones.innerHTML = "";
        }
        
        btnBuscar.addEventListener("click", buscarPokemon);
        
        inputId.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                buscarPokemon();
            }
        });


        //Menu de los botones
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


             //Creacion del div del modal 
        //     const modalDiv = document.createElement("div");
        //     modalDiv.classList.add("modal__container");
     
        //     modalDiv.innerHTML = `
        //      <article class="basic__props">
        //          <div class="stats">
        //              <ul class="basic__stats">
        //                  <li class="stats__item">
        //                      <h3>HP</h3>
        //                  </li>
        //                  <li class="stats__item">
        //                      <img id="pokeicon__element" src="" alt="Elemento">
        //                  </li>
        //                  <li class="stats__item">
        //                      <h3># pokedex</h3>
        //                  </li>
        //              </ul>
        //          </div>
        //          <div class="pokeinfo">
        //              <img class="pokemon__image" src="" alt="Imagen del pokemon">
        //              <h2>Nombre del pokemon</h2>
        //          </div>
        //      </article>
        //      <article class="detail__stats" id="details">
        //          <button class="close__button"><i class="gg-close-o"></i></button>
        //          <div class="habilidades">
        //              <h2>Habilidades</h2>
        //              <ul>
        //                  <li class="habilidad"></li>
        //                  <li class="habilidad"></li>
        //                  <li class="habilidad"></li>
        //                  <li class="habilidad"></li>
        //                  <li class="habilidad"></li>
        //                  <li class="habilidad"></li>
        //                  <li class="habilidad"></li>
        //                  <li class="habilidad"></li>
        //              </ul>
        //          </div>
        //          <div class="movimientos">
        //              <h2>Movimientos</h2>
        //              <ul>
        //                  <li class="movimiento"></li>
        //                  <li class="movimiento"></li>
        //                  <li class="movimiento"></li>
        //                  <li class="movimiento"></li>
        //                  <li class="movimiento"></li>
        //              </ul>
        //          </div>
        //          <div class="evoluciones">
        //              <h2>Evoluciones</h2>
        //              <ul>
        //                  <li class="evolucion"></li>
        //                  <li class="evolucion"></li>
        //                  <li class="evolucion"></li>
        //                  <li class="evolucion"></li>
        //                  <li class="evolucion"></li>
        //              </ul>
        //          </div>
        //      </article>
        //  `;
     
        //  // Agregar el segundo div al documento
        //  modal.append(modalDiv);
    
});