const analyzer = {  
  getWordCount: (text) => {
  //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.

   // trim hace la funcion de eliminar los espacios en blanco al principio o al final de la cadena
   // funcion split separa la cadena en varias en este caso separandolas con una expresion regular
   //la expresion regular '/\s+/' indica que se van a buscar los espacios en blanco (cuando hay un espacio en blanco el split hace la separacion de las palabras)
   const words = text.trim().split(/\s+/);
   return words.length;  
  
  },
  getCharacterCount: (text) => {
  //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
   // .lenght muestra toda la longitud de la cadena.
   return text.length;
 
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
   // raplace utiliza una espresion regular para remplazar los espacios en blanco por un valor nulo eliminandolos de la cadena.
    const textWithoutSpaces = text.replace(/\s/g, '');
   return textWithoutSpaces.length;

  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    // Estra primera linea al igual que el contador de palabras nos va a eliminar los espacion en blanco para hacer un conteo de las palabras
    //en la siguiente se hace una condicionante if que nos cuenta la longitud de lacadena y nos dice que si es estrictamente
    // igual a 0 entonces nos va a retornar un valor cero, por lo contrario si no se cumple esa condicion va a retornar
    // el promedio de las palabras de la siguiente manera, el .reduce nos sirve para para sumar toda esa lista de palabras
    //que se vayan ingresando estas palabras se van sumando una a una y se inicia con un contador en 0
    //el return nos indica que se va a realizar una division del total de las palabras encontradas entre la longitud de la cadena
    // .tofixed nos va a servir para redondear el resultado en decimales.
    const words = text.trim().split(/\s+/);
    if (words.length === 0) {
      return 0;
    }
    const totalLength = words.reduce((acc, word) => acc + word.length, 0);
    return (totalLength / words.length).toFixed(1);
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    // .match ayuda a ancontrar coicidencias dentro de una cadena en este caso buscamos esas coincidencias con una
    //expresion regular la cual nos dice que que se van a buscar numeros(representado con 'd')
    // con el operador '?' se verifica si se encontraron esas coicidencias de numeros y de ser asi las almacena en 
    //numbers. length, de no haberlas va a ratornar un 0.
    const numbers = text.match(/\d+/g);
    return numbers ? numbers.length : 0;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    // Al igual que en el metodo anterior la primera linea es para encontrar las coincidencias numericas mediante
    //el metodo .match y la expresion regular, despues de ello utilizamos if como un condicionante  la cual nos dice
    //que si esta presente la variable numeros nos va a retornar la suma de estos (ya sumados con el metodo.reduce)
    //acc representa el acumulador 
    //.reduce nos sirve para sumar toda esa lista de numeros que se vayan ingresando estas palabras se van sumando 
    //una a una y se inicia con un contador en 0
    //de no cumplirse la condicion retorna 0.
  
    const numbers = text.match(/\d+/g);
     if (numbers) {
      return numbers.reduce((acc, num) => acc + parseInt(num), 0);
     } else {
      return 0;
     }
  },
};


export default analyzer;
