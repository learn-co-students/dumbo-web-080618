require_relative '../config/environment'
require 'rack/test'
require 'rspec'

ENV['SINATRA_ENV'] = 'test'

RSpec.configure do |config|
  config.include Rack::Test::Methods
end

def app
  Rack::Builder.parse_file('config.ru').first
end
