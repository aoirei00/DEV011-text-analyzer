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
    const palabras = text.trim().split(/\s+/);
    return palabras.length;

  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    // .lenght muestra toda la longitud de la cadena.
    return text.length;

  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    // raplace utiliza una espresion regular para remplazar los espacios en blanco por un valor nulo eliminandolos de la cadena.
    // '\s' metacaracter que representa cualquier espacio en blanco 
    const textoSin = text.replace(/[\s.,/'"#!$%^&*;|:{}=\-_`~()”“"…]/g, '');
    return textoSin.length;

  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    // Esta primera linea al igual que el contador de palabras nos va a eliminar los espacion en blanco para hacer un conteo de las palabras
    //en la siguiente se hace una condicionante if que nos cuenta la longitud de lacadena y nos dice que si es estrictamente
    // igual a 0 entonces nos va a retornar un valor cero, por lo contrario si no se cumple esa condicion va a retornar
    // el promedio de las palabras de la siguiente manera, se hace un ciclo ford con un contador que comienza en 0,
    //este bucle va a repetirse siempre que se le esten agregando valores a la cadena y los va sumando de uno a uno.
    const palabras = text.trim().split(/\s+/);

    if (palabras.length === 0) {
      return 0;
    }
    let totalLength = 0;

    for (let i = 0; i < palabras.length; i++) {
      totalLength = totalLength + palabras[i].length;
    }

    // Calcular el promedio y redondearlo a un decima
    const promedioCadena = totalLength / palabras.length;
    return promedioCadena.toFixed(2);//.toFixed se utiliza para redondear con los decimales que se requieran
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    // .match ayuda a ancontrar coicidencias dentro de una cadena en este caso buscamos esas coincidencias con una
    //expresion regular la cual nos dice que que se van a buscar numeros(representado con 'd') y ademas el signo '+'
    // espresa que buscarara mas de una coicidencia, dentro de la expresion regurar tambien va abuscar coicidencias
    //de numeros decimales expresado con "\.\d" el signo "?" puede indicar que pueden existir o no esas coicidencias
    //agregaremos un contador que comience en cero 
    const numeros = text.match(/\d+(\.\d+)?/g);
    let contador = 0;
    if (numeros ) {//ponemos una condicionante if  que nos da un true si existen numeros
      for (let i = 0; i < numeros.length; i++) {//si hay coincidencias numericas se ejecuta un ciclo for
        const numero = numeros[i];
        if (parseFloat(numero) !== 0) {// '!==' hace una comparacion de los valores si estos son diferentes arroja un true en este caso si el numero es diderente a cero arroja
          contador++;
        }
      }
    }

    return contador;// si no hay numeros retorna 0
    
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    // Al igual que en el metodo anterior la primera linea es para encontrar las coincidencias numericas mediante
    //el metodo .match y la expresion regular, despues de ello utilizamos if como un condicionante  la cual nos dice
    //que si esta presente la variable numeros nos va a retornar la suma de estos utilizando un ciclo for 
    

    const numeros = text.match(/\d+(\.\d+)?/g);
    let suma = 0;

    if (numeros) {
      for (let i = 0; i < numeros.length; i++) {
        const num = parseFloat(numeros[i]);
        if (!isNaN(num)) {// utilizamos !isNaN para dar un true si num es un numero de ser asi indicamos que suma toma el valor de num
          suma = suma + num;
        }
      }
    }

    return suma;

  },
};


export default analyzer;
