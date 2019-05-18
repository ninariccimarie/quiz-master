class Quiz < ApplicationRecord
  has_many :user_answers
  validates_presence_of :student_name, :class_name, :subject, :day
  serialize :answers, Array
end
