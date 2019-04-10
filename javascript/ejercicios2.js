//Introduce un número y que se muestre su Factorial

// Introduce un número y que muestre si es par o parImpar

// Utilizando métodos de JS, averigua si una frase
// esta en máyuscula o en minúsculas

// Por medio de un for, muestra en la consola, los números
// del 1 al 20

//Ahora haz lo mismo que el punto anterior pero del
// 6 al 41

// Por medio de un while, muestra en la consola, los números
// del 1 al 20
/*
function isOdd(number){

  return number % 2 === 0 ? "es par" : "no es par"
}


console.log(isOdd(2))
console.log(isOdd(3))
console.log(isOdd(15))
console.log(isOdd(8))


function imprimirNumeros(numInicial, numFinal){
  if (numInicial < numFinal){
    for (let i= numInicial; i <= numFinal; i++){
      console.log(i);
    }
  }
  else{
    for (let  i = numInicial ; i >= numFinal; i--){
      console.log(i);
    }
  }
}
*/
rocks = "Hola Rocks"
iterador = rocks.length

while(iterador > 0){
  console.log(rocks[iterador - 1])
  iterador--
}

function reverse(cadena)
{
  aux = []
  iterador =  cadena.length
  while(iterador > 0){
    aux[cadena.length - iterador] = cadena[iterador - 1]
    iterador--
  }
  cadena = aux.join("")
  return cadena
}

console.log(reverse("hola makers").split(" "))


var hola = function(texto){
  console.log("hola"+ texto)
}
var chao = function(texto){
  console.log("chao"+ texto)
}

var imprimir = function(impresion, texto){
  impresion(texto);
}
imprimir(function(texto){
  console.log("hola blah "+ texto)
}, "makers")
imprimir(chao, "makers")

//imprimirNumeros(21,20)
//imprimirNumeros(25,40)
//imprimirNumeros(40,25)
