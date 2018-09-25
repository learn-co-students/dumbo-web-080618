require_relative '../config/environment'


def find_doctor
  puts "Please select a doctor"

  Doctor.all.each do |doctor|
    puts "#{doctor.name}"
  end

  doctor_name = gets.chomp

  puts "You're making an appointment with #{doctor_name} who specializes in #{Doctor.find_by(name: doctor_name).specialty}"
end


find_doctor
