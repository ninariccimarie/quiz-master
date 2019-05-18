class CreateQuizzes < ActiveRecord::Migration[5.1]
  def change
    create_table :quizzes do |t|
      t.string :student_name
      t.string :class_name
      t.string :subject
      t.timestamps
    end
  end
end
