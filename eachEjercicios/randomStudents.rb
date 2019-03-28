# p names = ["Alejandro", "Jorge", "Oscar", "Cindy", "Liliana", "Andres,", "Ramiro", "Julián", "Patrick", "Hugo"].length
#
# pair = []
# iteration = names.length % 2 == 0? (names.length) / 2 : (names.length / 2) + 1
#
# iteration.times do
#   array2 = []
#   names.shuffle!
#   array2 << names.pop(2)
#   pair << array2
# end
#
# p pair
#

names = ["Alejandro", "Jorge", "Oscar", "Cindy", "Liliana", "Andres,", "Ramiro", "Julián"]

couples = names.shuffle
p couples
