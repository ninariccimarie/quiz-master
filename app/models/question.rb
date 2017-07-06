class Question < ApplicationRecord
    belongs_to :quiz, class_name: "Quiz"
    enum difficulty_level: [:easy, :medium, :hard]
    validates_presence_of :question, :answer, :difficulty_level
end
