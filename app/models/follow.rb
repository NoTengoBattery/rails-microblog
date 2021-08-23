# rubocop:disable Rails/UniqueValidationWithoutIndex

class Follow < ApplicationRecord
  belongs_to :follower, class_name: "Twixy"
  belongs_to :followed, class_name: "Twixy"

  validate :check_follow_self
  validates :follower, :followed, presence: true
  validates :follower, uniqueness: {scope: :followed}

  private

  def check_follow_self
    errors.add(:follower, "can't follow yourself") if follower == followed
  end
end

# rubocop:enable Rails/UniqueValidationWithoutIndex
