
###Shopping cart

class ShoppingCart
  def initialize
    @items = []

  end

  def add_item(item)
  	@items.push(item)
  end

  def checkout
  	total = 0
  	@items.each do |item|
  		total += item.price
  	end 

  	if @items.size >= 5
  		total = total * 0.9
  	end
  	
  	total
  end

  

end


class Item 
  attr_accessor :price
  def initialize(name, price)
      @name = name
      @price = price
  end
end

class Houseware < Item
  	def price
    	if @price > 100 
    		@price = @price * 0.95
    	end
  	end
end

class Fruit < Item
	def price
  	if Time.now.saturday? || Time.now.sunday?
  		@price = @price * 0.90
		end
	end	
end


joshs_cart = ShoppingCart.new

banana = Fruit.new("Banana", 10)
oj = Item.new("Orange Juice", 10)
rice = Item.new("Rice", 1)
anchovies = Item.new("Anchovies", 2)
vacuum_cleaner = Houseware.new("Vacuum Cleaner", 150)


joshs_cart.add_item(oj)
joshs_cart.add_item(rice)
joshs_cart.add_item(banana)
joshs_cart.add_item(vacuum_cleaner)
joshs_cart.add_item(anchovies)
puts "Your total is #{joshs_cart.checkout}€. Have a nice day!"


=begin	
puts "Banana = #{banana.price}€"
puts "Orange juice = #{orange_juice.price}€"
puts "Rice = #{rice.price}€"
puts "Anchovies = #{anchovies.price}€"
puts "Vacuum Cleaner = #{vacuum_cleaner.price}€"
=end










