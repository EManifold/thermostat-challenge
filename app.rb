require 'sinatra'
require 'json'

set :public_folder, proc { File.join(root) }

class Thermostat < Sinatra::Base
  enable :sessions
  get '/index.html' do
    # headers 'Access-Control-Allow-Origin' => '*'
    # { time: Time.now.to_s}.to_json
    index = session[:index] || 0.to_s

    content_type :json
    { index: index }.to_json
  end

  post '/index.html' do
    session[:index] = params[:index]
    200
  end

end
