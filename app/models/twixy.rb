class Twixy < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable, :rememberable, :validatable

  USERNAME_FORMAT = /\A[a-zA-Z]+[a-zA-Z0-9\-._~]*\z/
  USERNAME_LENGTH = {minimum: 5, maximum: 25}.freeze

  validates :username,
    format: {with: Twixy::USERNAME_FORMAT, message: :bad_format, symbols: "-._~"},
    length: Twixy::USERNAME_LENGTH,
    presence: true,
    uniqueness: true
  validates :password_confirmation, presence: true, on: :create
end
