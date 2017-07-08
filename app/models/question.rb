require 'numbers_in_words'

class Question < ApplicationRecord
    enum difficulty_level: [:easy, :medium, :hard]
    validates_presence_of :question, :answer, :difficulty_level

    def is_correct?(user_answer)

        if is_integer?(answer)
            NumbersInWords.in_numbers(user_answer) == answer.to_i
        else
            answer == user_answer
        end
    end

    def self.filter(filter)
        if filter
            where(difficulty_level: filter)
        end
    end

    private
    def is_integer?(string)
        /\A[-+]?\d+\z/.match(string)
    end
end
