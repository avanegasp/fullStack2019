require 'sinatra'

name = ""
favorite_food = ""

get '/food_form' do
  erb :food_form
end

post '/food_create' do
  name << params[:name]
  favorite_food << params[:favorite_food]
  @name = name
  @favorite_food = favorite_food

  erb :food_create
end
