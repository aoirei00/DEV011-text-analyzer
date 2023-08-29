import analyzer from './analyzer.js';

//Esta funcion es para asegurar que todo se ejecute sin problemas, ya que espera a que todos los elementos esten cargados.
document.addEventListener("DOMContentLoaded", function () {
  const textArea = document.querySelector('textarea[name="user-input"]');//Hace referencia al textarea de html y que el contenido es una cadena.
  const botonLimpiar = document.getElementById("reset-button");//Referencia al boton que va a limpiar el contenido
  const characterCount = document.querySelector("li[data-testid='character-count']");//hace referencia al elemento lista donde se va a mostrar el resultado 
  const characterNoSpacesCount = document.querySelector("li[data-testid='character-no-spaces-count']");//hace referencia al elemento lista donde se va a mostrar el resultado 
  const wordCount = document.querySelector("[data-testid='word-count']");//hace referencia al elemento lista donde se va a mostrar el resultado 
  const numberCount = document.querySelector("li[data-testid='number-count']");//hace referencia al elemento lista donde se va a mostrar el resultado 
  const numberSum = document.querySelector("li[data-testid='number-sum']");//hace referencia al elemento lista donde se va a mostrar el resultado 
  const wordLengthAverage = document.querySelector("li[data-testid='word-length-average']");//hace referencia al elemento lista donde se va a mostrar el resultado 

  // Esta funcion nos va a servir para actualizar los resultados en las etiquetas <li>
  function actualizarResultados() {
    const text = textArea.value;

    // De esta manera traemos los metodos del objeto analyzer 
    //.textContent se encarga de actualizar el contenido del texto en los elementos html
    characterCount.textContent = "Caracteres Totales: " + analyzer.getCharacterCount(text);
    characterNoSpacesCount.textContent = "Sin Espacios Ni Signos de Puntuacion: " + analyzer.getCharacterCountExcludingSpaces(text);
    wordCount.textContent = "Palabras: " + analyzer.getWordCount(text);
    numberCount.textContent = "Números: " + analyzer.getNumberCount(text);
    numberSum.textContent = "Suma Números: " + analyzer.getNumberSum(text);
    wordLengthAverage.textContent = "Promedio De Longitud: " + analyzer.getAverageWordLength(text);
  }

  // El escuchador actua con el evento keyup que es cuando se presiona una tecla.
  textArea.addEventListener("keyup", function () {
    actualizarResultados();
  });

  //Esto toma referencia de la variable botonLimpiar la cual llama el elemento boton del html cuando 
  //la funcion escucha al evento click se ejecuta la funcion en este caso cambia el valor del textarea a espacio vacio.
  botonLimpiar.addEventListener("click", function () {
    textArea.value = "";
    actualizarResultados();
  });

    // Llamar la funcion actualizarResultados al cargar la página para mostrar resultados iniciales
    actualizarResultados();
});