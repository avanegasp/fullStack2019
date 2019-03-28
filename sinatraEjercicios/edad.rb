require 'sinatra'

get '/age-in-5-years' do
  age = params[:age].to_i
  "Tu edad en 5 años será: #{age + 5}"
end
