console.log("Hola")
changeColors = function(id, classColor){
  $(`div`).removeClass()
  $(`#${id}`).addClass(classColor)
}

startsemaphore = function(){
  changeColors(1, "red" )
  id = 1
  console.log(this)
  color = ["yellow","blue","red"]
  this.interval = setInterval(function(){
    changeColors(id, color[id - 1] )
    id++
    id = id == 4 ? 1 : id
  }, 1000)
}
$(document).ready(function(){
  window.status = true
 $("#start").click(function(){
   if (window.status){
      startsemaphore()
      console.log(this)
      status = false
    }
    else{
      console.log("entro en el else")
        clearInterval(window.interval)
        status = true
    }
 })
 $("#pause").click(function(){
   clearInterval(interval)
 })
})
