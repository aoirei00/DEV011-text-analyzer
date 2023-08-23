const analyzer = {  
  getWordCount: (text) => {
  //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.

   // trim hace la funcion de eliminar los espacios en blanco al principio o al final de la cadena
   // funcion split separa la cadena en varias en este caso separandolas con una expresion regular
   //la expresion regular '/\s+/' indica que se van a buscar los espacios en blanco (cuando hay un espacio en blanco el split hace la separacion de las palabras)
   //Usamos una funcion if con la condicionante que nos dice que si la cadena contiene espacios en blanco o esta 
   //vacia entonces es true y nos retorna un 0, de ser falso entondes nos retorna la longitud de la cadena
   //(ya eliminando espacios y separando la cadena arreglos).
   // el operador logico '!' invierte el valor de verdad de una expresion
   if (!text.trim()) {
    return 0;
   }
   let words = text.trim().split(/\s+/);
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
    let textWithoutSpaces = text.replace(/\s/g, '');
   return textWithoutSpaces.length;

  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    // Esta primera linea al igual que el contador de palabras nos va a eliminar los espacion en blanco para hacer un conteo de las palabras
    //en la siguiente se hace una condicionante if que nos cuenta la longitud de lacadena y nos dice que si es estrictamente
    // igual a 0 entonces nos va a retornar un valor cero, por lo contrario si no se cumple esa condicion va a retornar
    // el promedio de las palabras de la siguiente manera, se hace un ciclo ford con un contador que comienza en 0,
    //este bucle va a repetirse siempre que se le esten agregando valores a la cadena y los va sumando de uno a uno.
    //'+=' sirve para hacer hacer la suma del valores que contenga totalLength mas los words[i].length y 
    //los vuelve a asignar a totalLength.
    let words = text.trim().split(/\s+/);
    
    if (words.length === 0) {
      return 0;
    }
    let totalLength = 0;

    for (let i = 0; i < words.length; i++) {
      totalLength = totalLength + words[i].length;
    }

    // Calcular el promedio y redondearlo a un decimal
    let averageLength = totalLength / words.length;
    return averageLength.toFixed(1);
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    // .match ayuda a ancontrar coicidencias dentro de una cadena en este caso buscamos esas coincidencias con una
    //expresion regular la cual nos dice que que se van a buscar numeros(representado con 'd')
    // con el operador '?' se verifica si se encontraron esas coicidencias de numeros y de ser asi las almacena en 
    //numbers. length, de no haberlas va a ratornar un 0.
    let numbers = text.match(/\d+/g);
    return numbers ? numbers.length : 0;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    // Al igual que en el metodo anterior la primera linea es para encontrar las coincidencias numericas mediante
    //el metodo .match y la expresion regular, despues de ello utilizamos if como un condicionante  la cual nos dice
    //que si esta presente la variable numeros nos va a retornar la suma de estos (ya sumados con el metodo.reduce)
    //acc representa el acumulador 
    //.reduce nos sirve para sumar toda esa lista de numeros que se vayan ingresando estos numeros se van sumando 
    //una a una y se inicia con un contador en 0
    //de no cumplirse la condicion retorna 0.
  
    let numbers = text.match(/\d+/g);
     if (numbers) {
      return numbers.reduce((acc, num) => acc + parseInt(num), 0);
     } 
      return 0;
     
  },
};


export default analyzer;
