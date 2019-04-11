//
// function printAsterisk(num){
//   let str = "";
//   for (var i = 0; i < num; i++) {
//     str += "*"
//     console.log(str)
//   }
// }
//
// printAsterisk(8)

var cindy = {
  nombre : "Cindy",
  apellido : "Duarte",
  edad : 26
}

console.log(cindy)

// function sayHi(person){
// console.log(`Hola, soy ${person.nombre} y tengo ${person.edad} años`)
// }

// sayHi(cindy)

cindy.sayHola = function(){
console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`)
}

// console.log(cindy)

// cindy.sayHola()

julian = cindy
// console.log(julian)

cindy = null

// julian.sayHola()

julian.nombre = "Julian"
// julian.sayHola()

jorge = julian
jorge.nombre = "Jorge"
julian.sayHola()
julian = null

jorge.sayHola()
