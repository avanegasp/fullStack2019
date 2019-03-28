#EJERCICIOS
p names = ["Alejandro", "Jorge", "Oscar", "Cindy", "Liliana", "Andres,", "Ramiro", "Julián", "Patrick", "Hugo"].shuffle

#Ingresa el nombre de todos los compañeros de clase y cambialos de orden por medio de un método.
# p names = ["Alejandro", "Jorge", "Oscar", "Cindy", "Liliana", "Andres,", "Ramiro", "Julián", "Patrick", "Hugo"].shuffle
#En una línea muestra cada estudiante del curso
# p names.each { |i| p i }
#Ingresa un nuevo estudiante al arreglo de estudiantes
# p names << "Juán"
#Reemplaza el nombre de la posición 3 por "Miami"
# p names[4] = "Miami"
# p names
#Elimina el último nombre
# p names.pop
#Elimina los últimos dos
# p names.pop(2)
# p names.delete_at(3) Borra de adelante para atrás
#Enumera cada estudiante, nombrálo y dí en que index esta

names.each_with_index do |name, index|
  puts "#{index +1} es #{name} y su index es #{index}"
end
