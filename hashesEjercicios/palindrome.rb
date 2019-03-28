persona = {
  "nombre" => "Germán",
  "edad" => 13,
   15   => true,
   apellido: "escobar",
"empresas" => ["make it real", "alpina", "BBVA"]
}

p persona[:apellido]
    persona["peso"]=45
    persona[:color]="blanco"
    persona["Hijos"] = ["Ramiro", "Felipe", "Andrea"]
p persona["empresas"].delete("alpina")
p persona

persona.each do |llave, valor|
  puts "#{llave}: #{valor}"
end


# p persona

# print "palabra"
# word = gets.chomp
#
# while word != word.reverse
#   print "Lo sentimos, Intenta nuevamente: "
#   word = gets.chomp
# end
#   puts "Muy bien!"
#

# str = "Hola mundo"
#
# puts str[0]
# puts str[1]
# puts str[2]
# puts str[3]

  # str = "Hola mundo"
  #
  # chars = str.chars # ["H", "o", "l", "a", " ", "m", "u", "n", "d", "o"]
  # chars.each do |c|
  #   puts c
  # end

# pi= ["hola", "mundo"].join(" ")
# p pi

print "nombre"

name = gets.chomp

p name.chars.length
