class Question < ApplicationRecord
    enum difficulty_level: [:easy, :medium, :hard]
    validates_presence_of :question, :answer, :difficulty_level
end
