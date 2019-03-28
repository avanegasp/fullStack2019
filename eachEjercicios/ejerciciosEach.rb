estudiantes = []
p estudiantes

estudiantes.push("Patrick")
p estudiantes

estudiantes << "Liliana"
p estudiantes

estudiantes << 2
p estudiantes

estudiantes = [1, 2, 3, 4, 5, 6]
p estudiantes


puts estudiantes[0]

n = estudiantes.length

n.times do |i|
  puts estudiantes[-i-1]
end


puts estudiantes[-3]
p estudiantes






estudiantes = [1, 2, 3, 4, 5, 6]

estudiantes.each_with_index do |estudiante, index|
  puts "estudiante #{estudiante} con ID #{index}" if index % 2 == 0
end



estudiantes = []

estudiantes << [1, 2]
p estudiantes


estudiantes = [1, 2, 3]
p estudiantes

array2 = []

estudiantes.each do |estudiante|
   p array2 << estudiante + 1
end

p estudiantes = array2

estudiantes = []

estudiantes << [1, 2]

estudiantes = [1, 2, 3]
p estudiantes


estudiantes.each_with_index do |estudiante, index|
  estudiantes[index] = estudiante + 1
end

  p estudiantes


estudiantes = []

estudiantes << [1, 2]

estudiantes = [1, 2, 3]
p estudiantes

estudiantes = estudiantes.map do |estudiante|
  estudiante = estudiante + 1
end

p estudiantes
