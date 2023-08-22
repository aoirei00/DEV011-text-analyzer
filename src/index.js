import analyzer from './analyzer.js';

  //Esta funcion es para asegurar que todo se ejecute sin problemas, ya que espera a que todos los elementos esten cargados.
  document.addEventListener("DOMContentLoaded", function () {
    const textArea = document.querySelector('textarea[name="user-input"]');//Hace referencia al textarea de html y que el contenido es una cadena.
    const botonLimpiar = document.getElementById("reset-button");//Referencia al boton que va a limpiar el contenido
    const characterCount = document.getElementById("character-count");//hace referencia al elemento lista donde se va a mostrar el resultado 
    const characterNoSpacesCount = document.getElementById("character-no-spaces-count");//hace referencia al elemento lista donde se va a mostrar el resultado 
    const wordCount = document.getElementById("word-count");//hace referencia al elemento lista donde se va a mostrar el resultado 
    const numberCount = document.getElementById("number-count");//hace referencia al elemento lista donde se va a mostrar el resultado 
    const numberSum = document.getElementById("number-sum");//hace referencia al elemento lista donde se va a mostrar el resultado 
    const wordLengthAverage = document.getElementById("word-length-average");//hace referencia al elemento lista donde se va a mostrar el resultado 
  
    // Esta funcion nos va a servir para actualizar los resultados en las etiquetas <li>
    function actualizarResultados() {
      const text = textArea.value;
  
      // De esta manera traemos los metodos del objeto analyzer 
      //.textContent se encarga de actualizar el contenido del texto en los elementos html
      characterCount.textContent = analyzer.getCharacterCount(text);
      characterNoSpacesCount.textContent = analyzer.getCharacterCountExcludingSpaces(text);
      wordCount.textContent = analyzer.getWordCount(text);
      numberCount.textContent = analyzer.getNumberCount(text);
      numberSum.textContent = analyzer.getNumberSum(text);
      wordLengthAverage.textContent = analyzer.getAverageWordLength(text);
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