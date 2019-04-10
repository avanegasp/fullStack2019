// Número Factorial de un entero

var numero = prompt("Introduce un número y se mostrará su factorial");
var resultado = 1;

for(var i=1; i<=numero; i++) {
  resultado += i;
}
alert(resultado);

// Funciones Básicas
var numero = prompt("Introduce un número entero");

var resultado = parImpar(numero);
alert("El número "+numero+" es "+resultado);

function parImpar(numero) {
  if(numero % 2 == 0) {
    return "par";
  }
  else {
    return "impar";
  }
}
//
// <title>Ejercicio 9 - Información sobre cadenas</title>
//
// <script type="text/javascript">
// function info(cadena) {
//
//   var resultado = "La cadena \""+cadena+"\" ";
//
//   // Comprobar mayúsculas y minúsculas
//   if(cadena == cadena.toUpperCase()) {
//     resultado += " está formada sólo por mayúsculas";
//   }
//   else if(cadena == cadena.toLowerCase()) {
//     resultado += " está formada sólo por minúsculas";
//   }
//   else {
//     resultado += " está formada por mayúsculas y minúsculas";
//   }
//
//   return resultado;
// }
//
// alert(info("OVNI = OBJETO VOLADOR NO IDENTIFICADO"));
// alert(info("En un lugar de la mancha..."));


// El bucle for en JS se utiliza cuando sabemos cuántas veces vamos a correr un pedazo de código.
//
// En el siguiente ejemplo de bucle en JavaScript el bucle correrá 10 veces hasta pararse y escribirá en pantalla "El número es i" donde i es el número de vueltas hasta llegar al 5.
//
// <html>
// <body>
// <script type="text/javascript">
var i=0; for (i=0;i<=5;i++) {
document.write("El número es " + i);
document.write("<br />");
// } </script>
// </body>
// </html>


// El bucle While en JS se utiliza para ejecutar un pedazo de código mientras la condición siga siendo verdadera.
//
// En este caso el bucle no parará hasta que la variable "i" sea igual a 5.
//
// <html>
// <body>
// <script type="text/javascript">
// var i=0;
// while (i<=5)
// {
// document.write("El número es " + i);
// document.write("<br />");
// i=i+1;
// }
// </script>
// </body>
// </html>
