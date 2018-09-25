require 'pry'

class App
  def call(env_hash)
    # Rack can handle two different ways to serve a response
    # Through Rack::Response
    # and through the Array method
    # binding.pry
    resp = Rack::Response.new



    binding.pry
    # When I go to '/', I want to see "Hello, World"
    if env_hash["REQUEST_PATH"] == "/"
    # When I go to '/dogs', I want to see "Golden Retriever, Pugs"
      resp.write("Hello, World!")
    elsif env_hash["REQUEST_PATH"] == "/dogs"
      resp.write("Golden Retriever & Pugs")
    else
      resp.write "NOT VALID REQUEST"
    end

    resp.finish
  end
end
