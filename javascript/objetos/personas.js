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
    }
  }
  return persona
}

cindy = Constructor("Cindy", "Duarte")
cindy.sayHi()

julian = Constructor("Julian", "Hurtado")
julian.sayHi()


constructor2 = function(nombre, apellido){
  this.nombre = nombre
  this.apellido = apellido
}

constructor2.sayHi =function(){
  console.log(this)
  console.log(`Hola, soy ${this.nombre} ${this.apellido}`)
}

oscar = new constructor2("Oscar", "Beltran")
console.log(oscar)
oscar.sayHi()
