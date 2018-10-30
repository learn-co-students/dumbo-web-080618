# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

6.times do
  Hobbit.create(name: Faker::Hobbit.character,
                title: Faker::Job.title,
                field: Faker::Job.field,
                seniority: Faker::Job.seniority,
                position: Faker::Job.position,
                key_skill: Faker::Job.key_skill,
                employment_type: Faker::Job.employment_type)
end
