class Fan

  attr_accessor :name, :artist_id, :id

  def initialize(name:, artist_id:, id:)
    @name = name
    @artist_id = artist_id
    @id = id
  end

  def self.create_table
    sql = <<-SQL
    CREATE TABLE fans (id INTEGER PRIMARY KEY, name TEXT, artist_id INTEGER)
    SQL

    DB[:conn].execute(sql)
  end
end

# Fan.insert(name, artist_id)
# fan = #<Fan:0x21378172>
