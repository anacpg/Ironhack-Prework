
class Ingredient
  	attr_reader :name, :price
  	def initialize(name, price)
    	@name = name
    	@price = price
    end
end

class MilkShake

  	def initialize
    	@base_price = 3
    	@ingredients = [ ]    
  	end

	def add_ingredient(ingredient)
	    @ingredients.push(ingredient)
	end

  	def price_of_milkshake
		#Let's establish what our counter should be before we start adding ingredients into the mix
	  	total_price_of_milkshake = @base_price
	  	#Add each ingredients price to our total
	  	@ingredients.each do |ingredient|
	    	total_price_of_milkshake += ingredient.price
	  	end
	  	#return  our total price to whoever called for it
	   	total_price_of_milkshake
	end
end




class Shack_shop_class

	def initialize()
		@milkShakes = []
	end

	def add_milkshake(milkShake)
		@milkShakes.push(milkShake)
	end

	def get_milkshakes
		@milkShakes.each do |milkShake|
			puts milkShake
		end
	end

	def price_of
		price = 0

		@milkShakes.each do |milkShake|
			price += milkShake.price_of_milkshake()
		end
		price
	end
end



nizars_milkshake = MilkShake.new
banana = Ingredient.new("Banana", 2)
chocolate_chips = Ingredient.new("Chocolate Chips", 1)
nizars_milkshake.add_ingredient(banana)
nizars_milkshake.add_ingredient(chocolate_chips)

nizars_milkshake2 = MilkShake.new
orange = Ingredient.new("Orange", 3)
nizars_milkshake2.add_ingredient(orange)
nizars_milkshake2.add_ingredient(banana)

shack_shop = Shack_shop_class.new
shack_shop.add_milkshake(nizars_milkshake)
shack_shop.add_milkshake(nizars_milkshake2)

puts "\nPrice"
puts shack_shop.price_of

