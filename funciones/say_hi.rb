def say_hi(name, leng)
  puts "Hola #{name}, mi lenguaje preferido es: #{leng} "
end

say_hi("Angie", "Ruby")

def odd_number(num)
  num.times do |i|
    puts i*2
  end
end


odd_number(0)
odd_number(10)
odd_number(100)

def sum(num1,num2)
  num1 + num2
end

n = sum(1,2)
puts n


def is_older(age)
  age >= 18 ? true : false
end

if is_older(5)
  puts "Es mayor de edad"
else
  puts "Es menor de edad"
end

def make_person(name, age, weight)
  {name: name,
    age: age,
    weight: weight
}
end

julian = make_person("Julían", 19, 50)

def say_hi(persona)
  puts "Hola soy #{persona[:name]} tengo #{persona[:age]} y peso #{persona[:weight]}"
end

say_hi(julian)
