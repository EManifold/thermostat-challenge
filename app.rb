require 'sinatra'
require 'json'

set :public_folder, proc { File.join(root) }

get '/index.html' do
  # headers 'Access-Control-Allow-Origin' => '*'
  # { time: Time.now.to_s}.to_json
end
