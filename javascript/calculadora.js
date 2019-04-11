
sum = function(num1,num2){
  return num1 + num2
}

subs = function(num1,num2){
  return num1 - num2
}
product = function(num1,num2){
  return num1 * num2
}
div = function(num1,num2){

  return num2 == 0 ? 0 : num1 / num2
}
var calculadora = [sum, subs, product, div]

ejecutar = function(num1, num2){
  calculadora.forEach(function(fun){
    console.log(fun(num1, num2))
  })
}
ejecutar(4,3)
