class AddDayToQuiz < ActiveRecord::Migration[5.1]
  def change
    add_column :quizzes, :day, :text
  end
end
