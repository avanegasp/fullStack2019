$(document).ready(function(){

  $("form").on("submit", function(e){


    $name = $("#nombre")
    $apellido = $("#apellido")
    $edad = $("#edad")
    if ($name.val() === "" ||  $apellido.val() === ""  || $edad.val() === "" ){
      alert("completa todos los campos")
    }
    else{
      $("tbody").append(`<tr>
        <td>${$name.val()}</td>
        <td>${$apellido.val()}</td>
        <td>${$edad.val()}</td>
        </tr>`)
      $name.val("")
      $apellido.val("")
      $edad.val("")
      }
  })

})


banderas= [
  { "code": "CO", "name": "Colombia", "flag_url": "https://s3.amazonaws.com/makeitreal/co.gif" },
  { "code": "PE", "name": "Perú", "flag_url": "https://s3.amazonaws.com/makeitreal/pe.gif" },
  { "code": "EC", "name": "Ecuador", "flag_url": "https://s3.amazonaws.com/makeitreal/ec.gif" },
  { "code": "BO", "name": "Bolivia", "flag_url": "https://s3.amazonaws.com/makeitreal/bo.gif" }
]
