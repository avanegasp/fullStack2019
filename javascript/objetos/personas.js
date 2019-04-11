/*
{nombre:"", apellido:"", sayHi:function()}
*/

function Constructor(nombre, apellido){

  persona = {
    nombre: nombre,
    apellido: apellido,
    sayHi:function(){
      console.log(this)
      console.log(`Hola, soy ${this.nombre} ${this.apellido}`)
    },
    __proto__: Constructor.prototype
  }
  return persona
}

console.log("----------------")

cindy = Constructor("Cindy", "Duarte")
Constructor.prototype.blah = function(){
  console.log("Blahhhh")
}
console.log(cindy)
cindy.sayHi()
cindy.blah()
julian = Constructor("Julian", "Hurtado")

julian.sayHi()

constructor2 = function(nombre, apellido){
  this.nombre = nombre
  this.apellido = apellido
  this.sayHi = function(){
    console.log(this)
    console.log(`Hola, soy ${this.nombre} ${this.apellido}`)
  }
}

oscar = {nombre:"Oscar", apellido:"Beltran"}
console.log(oscar)
//oscar.sayHi()

andres = new constructor2("Andres", "Torrijos")

andres.sayHi()
andres.sayHi.call(oscar)
