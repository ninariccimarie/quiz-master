class CreateQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :questions do |t|
      t.text :question
      t.string :answer
      t.integer :difficulty_level

      t.timestamps
    end
  end
end
