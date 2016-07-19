
#### FIRST ITERATION

=begin
	
We're going to start by writing a function to solve a Caesar Cipher 
of with a left shift of 1. So we'll need to write a function that 
takes the encrypted message (just one word) and returns the unencrypted 
message. 
	
=end


def solve_cipher(input)

	puts "\n\nCAESAR'S CYPHER -- ITERATION 1\n"
	  
	#Char -> convert string to characters 
	#map() -> convert all the items 
	#ord -> Return the Integer ordinal of a one-character string

	input_ascii = input.chars.map(&:ord)
	output_ascii = []
	
	input_ascii.each do |item|

		if (item >= 97 and item <= 122)
			lowercase = item - 97
			output_ascii << 97 + (lowercase - 1) % 26

		elsif (item >= 65 and item <= 90)
			uppercase = item - 65
			output_ascii << 65 + (uppercase - 1) % 26
	 	end
	end

	cypher = output_ascii.map(&:chr)
	result = cypher.join

	return result
end





##### SECOND ITERATION

def solve_cipher2(input, key)
	  
	puts "\n\nCAESAR'S CYPHER -- ITERATION 2\n"

	#Char -> convert string to characters 
	#map() -> convert all the items 
	#ord -> Return the Integer ordinal of a one-character string

	input_ascii = input.chars.map(&:ord)
	output_ascii = []
	
	input_ascii.each do |item|

		if (item >= 97 and item <= 122)
			lowercase = item - 97
			output_ascii << 97 + (lowercase + key) % 26

		elsif (item >= 65 and item <= 90)
			uppercase = item - 65
			output_ascii << 65 + (uppercase + key) % 26

		else 
			output_ascii << item
	 	end
	end

	cypher = output_ascii.map(&:chr)
	result = cypher.join

	return result
end


def solve_cipher3(input)
	
	puts "\n\nCAESAR'S CYPHER -- ITERATION 3"

	#Char -> convert string to characters 
	#map() -> convert all the items 
	#ord -> Return the Integer ordinal of a one-character string

	input_ascii = input.chars.map(&:ord)
	output_ascii = []
	
	input_ascii.each do |item|

		if (item >= 97 and item <= 122)
			lowercase = item - 97
			output_ascii << 97 + (lowercase - 3) % 26

		elsif (item >= 65 and item <= 90)
			uppercase = item - 65
			output_ascii << 65 + (uppercase - 3) % 26

		else 
			output_ascii << item
	 	end
	end

	cypher = output_ascii.map(&:chr)
	result = cypher.join

	return result
end




puts solve_cipher("ifmmp")
puts solve_cipher("IFMMP")
# should return "hello"

puts solve_cipher2("p| uhdo qdph lv grqdog gxfn", -3)

puts solve_cipher3("EBH EBH")
# should return "BYE BYE"


