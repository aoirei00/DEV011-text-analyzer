import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
let textarea = document.querySelector('textarea[name="user-input"]');
//Esta variable es para obtener la cadena que se encuentra contenida en la etiqueta textarea
let contarCaracteres = document.getElementById("contarCaracteres");
// esta  variable obtiene los elementos contenidos en la cadena 

textarea.addEventListener("input",characterCount);
// llama al evento cuando se introduce informacion dentro del text area esto llama a la funcion characterCount()

function characterCount() {
    let contenido = textarea.value;
    let totalCaracteres = contenido.length;
    contarCaracteres.textContent = totalCaracteres;
  }

 