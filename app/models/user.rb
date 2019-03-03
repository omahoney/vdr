class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, 
          :registerable,
          :recoverable, 
          :rememberable, 
          :validatable

enum role: [:user, :vip, :admin]
after_initialize :set_default_role, :if => :new_record?

def set_default_role
  self.role ||= :user
end

def username
  return self.email.split('@')[0].capitalize
end

def editor?
  return self.admin? || self.vip?
end          
end
