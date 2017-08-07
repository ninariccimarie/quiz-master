class Question < ApplicationRecord
  enum difficulty_level: [:easy, :medium, :hard]
  validates_presence_of :question, :answer, :difficulty_level

  scope :filter, ->(filter) { where(difficulty_level: filter) }

  def is_correct?(user_answer)
    if is_integer?(answer)
      NumbersInWords.in_numbers(user_answer) == answer.to_i
    else
      self.answer.downcase == user_answer.strip.downcase
    end
  end

  private
  def is_integer?(string)
    /\A[-+]?\d+\z/.match(string)
  end
end
