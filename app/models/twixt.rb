class Twixt < ApplicationRecord
  TEXT_LENGTH = {minimum: 5, maximum: 280}.freeze

  belongs_to :twixy

  validates :text,
    presence: true,
    length: Twixt::TEXT_LENGTH
end
