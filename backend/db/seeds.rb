# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
question_list = [
    ['What sweet food made by bees using nectar from flowers?', 'Honey', 'easy'],
    ['Name the school that Harry Potter attended?', 'Hogwarts', 'medium'],
    ['What\'s the capital of Zimbabwe?', 'Harare', 'hard' ]
]

question_list.each do |question, answer, difficulty_level|
    Question.create(question: question, answer: answer, difficulty_level: difficulty_level)
end