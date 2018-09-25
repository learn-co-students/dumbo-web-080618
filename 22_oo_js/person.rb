class Person < Mammal
  # instance method
  def initialize(name)
    @name = name
  end
end

# class method new
# makes an empty person object
# calls initialize on that object
niky = Person.new('niky')

class Mammal
  def initialize(type)
    @type = type
  end

  def alive
    true
  end

end

