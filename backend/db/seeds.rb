Client.create!(name: 'Nina', 
              token: 'WLXTomWa3mM8QKtKRe5W2Mr2', 
              password: 'admin',
              password_confirmation: 'admin')

question_list = [
  ['What sweet food made by bees using nectar from flowers?', 'Honey', 'easy'],
  ['Name the school that Harry Potter attended?', 'Hogwarts', 'medium'],
  ['What\'s the capital of Zimbabwe?', 'Harare', 'hard' ]
]

question_list.each do |question, answer, difficulty_level|
  Question.create(question: question, answer: answer, difficulty_level: difficulty_level)
end