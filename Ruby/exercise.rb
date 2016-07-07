
### Exercise - Copy a file 

puts "What is the source file?"
source = gets.chomp

puts "What is the destination file?"
name = gets.chomp

reading = IO.read("source#{source}.txt")

IO.write(name, reading)