require 'pry'

class BankAccount

  # Macro - It builds out methods for you!
  # The methods it builds are attribute readers!
  attr_reader :account_number, :amount
  attr_accessor :name # Both an attr_reader and attr_writer

  # name
  # account_number
  # amount
  def initialize(name, account_number, amount)
    # - Instance variables are denoted
    #   by an @ symbol
    # - Attributes of our instance
    @name = name
    @account_number = account_number
    @amount = amount
  end

  # Class Method
  # Denoted by a the self.<method_name>
  def self.beef
    puts "We're in the class: #{self}"
  end


  # Deposit - I am going to add things to the @amount
  def deposit(money)
    @amount += money
    # @amount = @amount + money
  end

  def withdraw(money)
    # if @amount - money >= 0
    if @amount >= money
      @amount -= money
    else
      puts "YOU DON'T HAVE ENOUGH MONEYYYYYYYY!!!!"
    end
  end

  # Attribute Writer
  # def name=(new_name)
  #   @name = new_name
  # end

  # Withdraw - I'm going to subtract things from @amount

  # Attribute Reader
  # instance method - they can only be
  # called on an instance
  # def name
  #   @name
  # end
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
