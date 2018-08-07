# Google Books API "https://www.googleapis.com/books/v1/volumes?q={#{term}}"
require 'rest-client'
require 'json'
require 'pry'

response = RestClient.get 'https://www.reddit.com/.json'
json_response = JSON.parse(response.body)
# binding.pry

json_response["data"]["children"].each do |reddit|
  puts "================================"
  puts "Title: #{reddit["data"]["title"]}"
  puts "Found on: r/#{reddit["data"]["subreddit"]}"
  puts "Score: #{reddit["data"]["score"]}"
  puts "================================"
end
# json_response["data"]["children"][0]["data"]["title"]
# json_response["data"]["children"][0]["data"]["subreddit"]
# json_response["data"]["children"][0]["data"]["score"]
# puts json_response
