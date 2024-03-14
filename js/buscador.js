



// FILTRO POR ELEMENTOS

// Para ocultar los elementos del boton elemento. 
document.addEventListener("DOMContentLoaded", function() {
    var verTodosBtn = document.getElementById("elementos");
    var otrosBotones = document.querySelectorAll(".nav__item:nth-child(n+2)");

    verTodosBtn.addEventListener("click", function() {
        otrosBotones.forEach(function(boton) {
            boton.style.display = (boton.style.display === "none" || boton.style.display === "") ? "block" : "none";
        });
    });
});