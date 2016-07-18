

##### Exercise FizzBuzz

## Iteration 1

puts "Iteration 1"

x = 1

while x <= 100 



	if x % 3 == 0 && x % 5 == 0

		puts "FizzBuzz"

	elsif x % 3 == 0
		
		puts "Fizz"

	elsif x % 5 == 0

		puts "Buzz"

	else
		
		puts x

	end
				 
	x += 1
end


#########################

### Iteration 2

puts "Iteration 2a"

for i in (1..100)

	if i % 3 == 0 && i % 5 == 0

		puts "FizzBuzz"

	elsif i % 3 == 0
		
		puts "Fizz"

	elsif i % 5 == 0

		puts "Buzz"

	else
		
		puts i

	end
end






########################


### Iteration 2

puts "Iteration 2b"

(1..100).each  do |x|

	if x % 3 == 0 && x % 5 == 0

		puts "FizzBuzz"

	elsif x % 3 == 0
		
		puts "Fizz"

	elsif x % 5 == 0

		puts "Buzz"

	else
		
		puts x

	end
				 
	

end 



### Iteration 3

puts "Iteration 3"

(1..100).each  do |x|

	str = x.to_s
	bang = ""

	if str.match("1.") or  str.match("1")
		bang = "Bang"
	end

	if x % 3 == 0 && x % 5 == 0

		puts "FizzBuzz" + bang

	elsif x % 3 == 0
		
		puts "Fizz" + bang

	elsif x % 5 == 0

		puts "Buzz" + bang

	elsif	bang.match("Bang")
		
		puts bang

	else 
		puts x

	end

end 

### Iteration 4

puts "\n\nIteration 4"

(1..100).each  do |x|

	str = x.to_s
	bang = ""
	result = ""

	if str.match("1.") or  str.match("1")
		bang = "Bang"
	end

	if x % 3 == 0 && x % 5 == 0

		result << "FizzBuzz" + bang + "\n"

	elsif x % 3 == 0
		
		result << "Fizz" + bang + "\n"

	elsif x % 5 == 0

		result << "Buzz" + bang + "\n"

	elsif	bang.match("Bang")
		
		result << bang + "\n"

	else 
		result << x.to_s + "\n"

	end
				 
	print result

end 



