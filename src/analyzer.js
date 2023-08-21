const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.

   // la funcion split separa la cadena en varias en este caso separandolas con un espacio.
   const palabras = text.split(' ');
   // la funcion filter filtra las palabras o espacios vacios con la condicionante que dice que si la palabra esta vacia no la contara.
   const filtrarPalabras = palabras.filter(palabra => palabra !== ''); 
   // muestra el resultado de las palabras contenidad en el arreglo ya excepcuando los espacios.
   return filtrarPalabras.length;
  },
  getCharacterCount: (text) => {
  //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  return text.length;
  // muestra toda la longitud de la cadena.
  
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
 
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
   
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    
  },
};


export default analyzer;
