class Follow < ApplicationRecord
  belongs_to :follower, class_name: "Twixy"
  belongs_to :followed, class_name: "Twixy"
end
