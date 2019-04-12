function Persona(firstName, lastName, age){
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
}

Persona.prototype.happyBirthday = function(){
  this.age += 1;
  console.log(`Mi nueva edad es ${this.age}`)
}

function Hombre(firstName, lastName, age){
  Persona.call(this, firstName, lastName, age)
  this.gender = "M"
}
  Hombre.prototype = new Persona()

function Mujer(){
  Persona.call(this, firstName, lastName, age)
  this.gender = "F"
}

persona = new Persona("Ferney", "Medina", 27)
persona.happyBirthday()
persona.happyBirthday()

persona2 = new Persona("Ferney2", "Medina2", 15)
persona2.happyBirthday()
hombre = new Hombre("Julián", "Hurtado", 19)

hombre.happyBirthday()
//mujer = new Mujer("Pepita", "Ramirez", 22)
