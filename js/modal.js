const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close__button");


//Event Listener para cerrar el modal
closeModal.addEventListener('click', ()=>{
    modal.classList.remove('modal--show');
});

//Funciones para poder cambiar los colores del modal

/*TODO: hacer la función que trae los tipos de la API para poder ponerlo como parámetro en 
la función CambiarColoresPorTipo*/

//Switch case para cambiar los colores según el tipo de elemento que tenga el pokemon
function cambiarColoresPorTipo(tipo) {
    const modalDetailPokemon = document.getElementById('details');
    const statsListModal = document.querySelectorAll('.stats__item');
    const elementICon = document.getElementById('pokeicon__element');

    switch (tipo) {
        case 'electric':
           modalDetailPokemon.style.backgroundImage = 'linear-gradient(to top, #FF7A00 10%, #FFC400 100%)';
           statsListModal.style.background = 'var(--electric)';
           elementICon.style.backgroundImage = "url('./assets/electrico.svg')";
          break;
        case 'fire':
           modalDetailPokemon.style.backgroundImage = 'linear-gradient(to top, #E62829 10%, #F08030 100%)';
           statsListModal.style.background = 'var(--fire)';
           elementICon.style.backgroundImage = "url('./assets/fuego.svg')";
          break;
        case 'grass':
           modalDetailPokemon.style.backgroundImage = 'linear-gradient(to top, #036D00 10%, #7DBF4E 100%)';
           statsListModal.style.background = 'var(--grass)';
           elementICon.style.backgroundImage = "url('./assets/planta.svg')";
          break;
        case 'water':
           modalDetailPokemon.style.backgroundImage = 'linear-gradient(to top, #00C2FF 10%, #6890F4 100%)';
           statsListModal.style.background = 'var(--water)';
           elementICon.style.backgroundImage = "url('./assets/agua.svg')";
          break;
        case 'ground':
           modalDetailPokemon.style.backgroundImage = 'linear-gradient(to top, #915121 10%, #4D2603 100%)';
           statsListModal.style.background = 'var(--ground)';
           elementICon.style.backgroundImage = "url('./assets/tierra.svg')";
          break;
        case 'rock':
           modalDetailPokemon.style.backgroundImage = 'linear-gradient(to top, #AFA981 10%, #7A7976 100%)';
           statsListModal.style.background = 'var(--rock)';
           elementICon.style.backgroundImage = "url('./assets/roca.svg')";
          break;
        case 'ghost':
           modalDetailPokemon.style.backgroundImage = 'linear-gradient(to top, #620162 10%, #705898 100%)';
           statsListModal.style.background = 'var(--ghost)';
           elementICon.style.backgroundImage = "url('./assets/fantasma.svg')";
          break;
        case 'fairy':
           modalDetailPokemon.style.backgroundImage = 'linear-gradient(to top, #EF71EF 10%, #C21DEB 100%)';
           statsListModal.style.background = 'var(--fairy)';
           elementICon.style.backgroundImage = "url('./assets/hada.svg')";
          break;
        case 'poison':
           modalDetailPokemon.style.backgroundImage = 'linear-gradient(to top, #10045A 10%, #8F41CB 100%)';
           statsListModal.style.background = 'var(--poison)';
           elementICon.style.backgroundImage = "url('./assets/veneno.svg')";
          break;
        case 'flying':
           modalDetailPokemon.style.backgroundImage = 'linear-gradient(to top, #A890F0 10%, #81B9EF 100%)';
           statsListModal.style.background = 'var(--flying)';
           elementICon.style.backgroundImage = "url('./assets/volador.svg')";
          break;
        case 'fighting':
           modalDetailPokemon.style.backgroundImage = 'linear-gradient(to top, #E28D3D 10%, #FF5C00 100%)';
           statsListModal.style.background = 'var(--fighting)';
           elementICon.style.backgroundImage = "url('./assets/lucha.svg')";
          break;
        case 'dark':
           modalDetailPokemon.style.backgroundImage = 'linear-gradient(to top, #7D736A 10%, #705848 100%)';
           statsListModal.style.background = 'var(--dark)';
           elementICon.style.backgroundImage = "url('./assets/siniestro.svg')";
          break;
        case 'psychic':
           modalDetailPokemon.style.backgroundImage = 'linear-gradient(to top, #D44D01 10%, #EF4179 100%)';
           statsListModal.style.background = 'var(--psychic)';
           elementICon.style.backgroundImage = "url('./assets/psiquico.svg')";
          break;
        case 'ice':
           modalDetailPokemon.style.backgroundImage = 'linear-gradient(to top, #3FD8FF 10%, #98D8D8 100%)';
           statsListModal.style.background = 'var(--ice)';
           elementICon.style.backgroundImage = "url('./assets/hielo.svg')";
          break;
        case 'bug':
           modalDetailPokemon.style.backgroundImage = 'linear-gradient(to top, #91A119 10%, #6B8404 100%)';
           statsListModal.style.background = 'var(--bug)';
           elementICon.style.backgroundImage = "url('./assets/bicho.svg')";
          break;
        case 'dragon':
           modalDetailPokemon.style.backgroundImage = 'linear-gradient(to top, #969EDE 10%, #6038F2 100%)';
           statsListModal.style.background = 'var(--dragon)';
           elementICon.style.backgroundImage = "url('./assets/dragon.svg')";
          break;
        case 'steel':
           modalDetailPokemon.style.backgroundImage = 'linear-gradient(to top, #646361 10%, #B8B8D0 100%)';
           statsListModal.style.background = 'var(--steel)';
           elementICon.style.backgroundImage = "url('./assets/acero.svg')";
          break;
        case 'normal':
           modalDetailPokemon.style.backgroundImage = 'linear-gradient(to top, #527430 10%, #C1C183 100%)';
           statsListModal.style.background = 'var(--normal)';
           elementICon.style.backgroundImage = "url('./assets/normal.svg')";
          break;
        default:
        modalDetailPokemon.style.backgroundImage = 'linear-gradient(to top, #646361 10%, #B8B8D0 100%);';
         statsListModal.style.background = 'var(--normal)';
         elementICon.style.backgroundImage = "url('./assets/normal.svg')";
    }
  }
