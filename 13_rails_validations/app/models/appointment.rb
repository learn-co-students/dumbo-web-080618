class Appointment < ApplicationRecord
  belongs_to :patient
  belongs_to :doctor

  validates :date, presence: true
  validates :date, length: { maximum: 50, message: "This is wack" }

  # def
end
