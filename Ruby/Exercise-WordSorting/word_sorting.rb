

#### Word sorting

def wordSortin1(sentence)

	#eliminacion de signos de puntuacion y separacion de sentence en palabras.
	words_without_puc = sentence.gsub(/[^a-zA-Z0-9\s]/i, '').split 

	#Se ordena el array
	words_sort = words_without_puc.sort { 
		|a,b| a.upcase <=> b.upcase
	} 
	

	return words_sort

end

=begin
puts "A sentence, please"
sentence = gets.chomp

puts wordSortin1(sentence)
=end

puts wordSortin1("Esto es una prueba. Ejercicio 2, wordsorting.")