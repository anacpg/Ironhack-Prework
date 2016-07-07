puts "Hola Mundo"

#LECTURA POR COMANDOS
puts "What is your name?"
name = gets.chomp
puts "Hello, #{name}"

#ESCRITURA EN FICHERO
puts "What's your name?"
name = gets.chomp
IO.write('name.txt', name)

#LECTURA DE FICHERO
file_contents = IO.read("holamundo.rb")  
puts "The source file contains: #{file_contents}"