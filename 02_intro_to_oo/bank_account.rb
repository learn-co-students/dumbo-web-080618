require 'pry'

class BankAccount

  # Macro - It builds out methods for you!
  # The methods it builds are attribute readers!
  attr_reader :account_number, :amount
<<<<<<< HEAD
  attr_accessor :name # Both an attr_accessor and attr_writer

=======
  attr_accessor :name # Both an attr_reader and attr_writer
>>>>>>> ad5ae475dd2a14b03d373043271a3631c9908a11

  # name
  # account_number
  # amount
<<<<<<< HEAD

=======
>>>>>>> ad5ae475dd2a14b03d373043271a3631c9908a11
  def initialize(name, account_number, amount)
    # - Instance variables are denoted
    #   by an @ symbol
    # - Attributes of our instance
    @name = name
    @account_number = account_number
    @amount = amount
<<<<<<< HEAD
    puts self
  end

  # Class Method
  # Denoted by the self.<method name>
=======
  end

  # Class Method
  # Denoted by a the self.<method_name>
>>>>>>> ad5ae475dd2a14b03d373043271a3631c9908a11
  def self.beef
    puts "We're in the class: #{self}"
  end

<<<<<<< HEAD
=======

>>>>>>> ad5ae475dd2a14b03d373043271a3631c9908a11
  # Deposit - I am going to add things to the @amount
  def deposit(money)
    @amount += money
    # @amount = @amount + money
  end

<<<<<<< HEAD
  # Withdraw - I'm going to subtract things from @amount
  def withdraw(money)
    # if @amount - money >= 0
    if @amount >= money
      return @amount -= money
    else
      pust "YOU DON'T HAVE ENOUGH MONEY"
=======
  def withdraw(money)
    # if @amount - money >= 0
    if @amount >= money
      @amount -= money
    else
      puts "YOU DON'T HAVE ENOUGH MONEYYYYYYYY!!!!"
>>>>>>> ad5ae475dd2a14b03d373043271a3631c9908a11
    end
  end

  # Attribute Writer
  # def name=(new_name)
  #   @name = new_name
  # end

<<<<<<< HEAD
=======
  # Withdraw - I'm going to subtract things from @amount

>>>>>>> ad5ae475dd2a14b03d373043271a3631c9908a11
  # Attribute Reader
  # instance method - they can only be
  # called on an instance
  # def name
  #   @name
  # end
<<<<<<< HEAD

  # def account_number
  #   @account_number
  # end

  # def amount
  #   @amount
  # end

end
=======
  #
  # def account_number
  #   @account_number
  # end
  #
  # def amount
  #   @amount
  # end
end

binding.pry
0
>>>>>>> ad5ae475dd2a14b03d373043271a3631c9908a11
