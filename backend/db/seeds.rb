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

quizzes = [
  ["Marlon", "Sampaguita", "Araling Panlipuan", "Monday",
    [
      {
          "question_id": 1,
          "answer": "honey"
      },
      {
          "question_id": 2,
          "answer": "asadadsa"
      },
      {
          "question_id": 3,
          "answer": "asadsa"
      }
    ]
  ],
  ["Caras", "Sampaguita", "Science", "Tuesday",
    [
      {
          "question_id": 1,
          "answer": "honey"
      },
      {
          "question_id": 2,
          "answer": "hello"
      },
      {
          "question_id": 3,
          "answer": "hi"
      }
    ]
  ],
  ["Nina", "Crysanthemum", "Science", "Tuesday",
    [
      {
          "question_id": 1,
          "answer": "honey"
      },
      {
          "question_id": 2,
          "answer": "syrup"
      },
      {
          "question_id": 3,
          "answer": "hasdsai"
      }
    ]
  ],
]

quizzes.each do |student_name, class_name, subject, day, answers|
  Quiz.create(student_name: student_name, class_name: class_name, subject: subject, day: day, answers: answers)
end