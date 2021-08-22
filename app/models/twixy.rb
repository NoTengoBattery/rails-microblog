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

  has_many :twixts, dependent: :destroy
  has_many :received_follows, foreign_key: :followed_id, class_name: "Follow", dependent: :destroy, inverse_of: :follower
  has_many :followers, through: :received_follows, source: :follower
  has_many :sent_follows, foreign_key: :follower_id, class_name: "Follow", dependent: :destroy, inverse_of: :followed
  has_many :followings, through: :sent_follows, source: :followed
end
