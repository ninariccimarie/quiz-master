class Quiz < ApplicationRecord
  validates_presence_of :student_name, :class_name, :subject, :day, :answers
end
