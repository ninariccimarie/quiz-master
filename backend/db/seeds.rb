question_list = [
  ['What sweet food made by bees using nectar from flowers?', 'Honey', 'easy'],
  ['Name the school that Harry Potter attended?', 'Hogwarts', 'medium'],
  ['What\'s the capital of Zimbabwe?', 'Harare', 'hard' ]
]

token_list = [
  ['dfYGLxuSEbGW6gh65KUX2Qna'],
  ['vE9M8DMiJYqEHbduqX2huPYJ'],
  ['s7XsPnTuPMJRwytf3vnNw7GA']
]

question_list.each do |question, answer, difficulty_level|
  Question.create(question: question, answer: answer, difficulty_level: difficulty_level)
end

token_list.each do |token|
  Client.create(token: token)
end