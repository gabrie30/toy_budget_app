class Budget < ActiveRecord::Base
  validates :number, presence: true
end
