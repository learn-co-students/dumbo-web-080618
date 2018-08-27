require_relative './spec_helper'

describe "Basic Routes" do
  describe "GET '/books'" do
    it 'returns a status code of 200' do
      get '/books'
      expect(last_response.status).to eq(200)
    end

    it 'returns the index.erb' do
      get '/books'
      expect(last_response.body).to include("<h1>All Books</h1>")
    end
  end
end
