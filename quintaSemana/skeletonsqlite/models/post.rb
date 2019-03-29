require_relative 'application'
  class Post < Application
    validates :title, :observations, presence:true
  end
