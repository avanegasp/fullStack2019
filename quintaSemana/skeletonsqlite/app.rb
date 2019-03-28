require 'sinatra'
require 'sinatra/activerecord'
set :database, "sqlite3:post.sqlite3"
Dir[__dir__+"/models/*.rb"].each {|file| require file }

posts = ["séptimo día"]

class Post
  def initialize
    @titles = titles
  end
end

#index
get '/titles' do
  p params
  @posts = posts
  erb :'titles/index'
end

#new
get '/titles/new' do
  erb :'titles/new'
end

#create
post '/titles' do
  p params
  posts << (params["title"])
  @posts = posts
  erb :'titles/index'
end
