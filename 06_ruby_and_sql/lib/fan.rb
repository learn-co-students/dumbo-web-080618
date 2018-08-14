class Fan

  attr_accessor :name, :artist_id, :id

  def initialize(fan_hash)
    @name = fan_hash["name"]
    @id = fan_hash["id"]
    @artist_id = fan_hash["artist_id"]
  end

  def self.create(fan_hash)
    new_fan = Fan.new(fan_hash)
    new_fan.save
    new_fan
  end

  def save

    Fan.insert(self.name, self.artist_id)

    beef = <<-SQL
      SELECT * FROM fans ORDER BY id DESC LIMIT 1
    SQL

    new_fan_hash = DB[:conn].execute(beef)
    # binding.pry
    self.id = new_fan_hash[0]["id"]

    # DESC -> 10, 9, 8, 7....
    # ASC -> 1, 2, 3, 4....
  end


  def self.create_table
    sql = <<-SQL
    CREATE TABLE fans (id INTEGER PRIMARY KEY, name TEXT, artist_id INTEGER);
    SQL

    DB[:conn].execute(sql)
  end

  def self.insert(name, artist_id)
    sql = <<-SQL
      INSERT INTO fans (name, artist_id) VALUES (?, ?)
    SQL

    # binding.pry

    DB[:conn].execute(sql,name, artist_id)
    # binding.pry
  end

  def self.find(id)
    sql = <<-SQL
      SELECT * FROM fans WHERE id = ?
    SQL

    # binding.pry

    DB[:conn].execute(sql, id)
  end
end

# fan = #<Fan:0x21378172>
