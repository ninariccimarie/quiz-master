class AddAnswersToQuiz < ActiveRecord::Migration[5.1]
  def change
    add_column :quizzes, :answers, :text
  end
end
