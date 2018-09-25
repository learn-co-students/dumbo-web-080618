class Doctor < ActiveRecord::Base
  has_many :appointments
  has_many :patients, through: :appointments

  def patient_names
    # an array of all of the names of my patients
    self.patients.map { |patient| patient.name }
  end
end
