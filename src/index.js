import analyzer from './analyzer.js';

const textArea = document.querySelector('textarea[name="user-input"]');
const botonLimpiar = document.getElementById("reset-button");

//Esto toma referencia de la variable botonLimpiar la cual llama el elemento boton del html cuando 
//el la funcion escucha al evento click se ejecuta la funcion en este caso cambia el valor del textarea a espacio vacio.
botonLimpiar.addEventListener("click", function () {
    textArea.value = "";
    
  });
