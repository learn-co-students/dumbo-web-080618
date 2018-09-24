class Person
  # attr_reader :name

  def initialize(name)
    @name = name
  end

  def self.what_am_i
    puts "I am the #{self} class"
  end

  def name
    @name
  end

end

niky = Person.new('niky')

# self is the instance of niky
niky.name

# self is Person class
Person.what_am_i

