FactoryGirl.define do
  factory :question do
    question "What type of animal is a dog?"
    answer "Mammal"
    difficulty_level 0
  end

  factory :question_medium, parent: :question do
    difficulty_level 1
  end

 factory :question_hard, parent: :question do
    difficulty_level 2
  end
end