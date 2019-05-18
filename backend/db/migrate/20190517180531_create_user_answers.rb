class CreateUserAnswers < ActiveRecord::Migration[5.1]
  def change
    create_table :user_answers do |t|
      t.belongs_to :quiz, index: true
      t.integer :question_id
      t.string :answer

      t.timestamps
    end
  end
end
