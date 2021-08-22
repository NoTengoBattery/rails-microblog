class Twixy < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable, :rememberable, :validatable

  FULL_NAME_LENGTH = {minimum: 3, maximum: 30}.freeze
  USERNAME_FORMAT = /\A[a-zA-Z]+[a-zA-Z0-9\-._~]*\z/
  USERNAME_LENGTH = {minimum: 5, maximum: 25}.freeze

  validates :full_name,
    presence: true,
    length: Twixy::FULL_NAME_LENGTH
  validates :password_confirmation,
    presence: true,
    on: :create
  validates :username,
    allow_blank: false,
    format: {with: Twixy::USERNAME_FORMAT, message: :bad_format, symbols: "-._~"},
    length: Twixy::USERNAME_LENGTH,
    presence: true,
    uniqueness: {case_sensitive: false}
end
