require 'sinatra'

dogs = []

get '/' do
  @dogs = dogs
  erb :index
end

get '/dogs/new' do
  erb :dogs
end

post '/dogs' do
  dogs << params[:name]
  redirect '/'
end


#Ejercicio #3
# 1.requiere sinatra en tu proyecto
# 2.Escribe una ruta con verbo get, donde se listen todos los libros que has leído
# y muestrálos en una vista llamada index.
# 3.Escribe otra ruta con verbo get y crea un nuevo libro con la ayuda de un formulario
# pista: <!-- El atributo action de la etiqueta <form> define el path o el URL
# a donde se quiere enviar la información del formulario. -->
# 4.Escribe una ruta con verbo post donde se reciba la información del
# formulario del punto 3, empuja los libros en una variable y redirecciona al index.
