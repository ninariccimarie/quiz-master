class CreateClients < ActiveRecord::Migration[5.1]
  def change
    create_table :clients do |t|
      t.string :token
      t.string :name

      t.timestamps
    end
  end
end
