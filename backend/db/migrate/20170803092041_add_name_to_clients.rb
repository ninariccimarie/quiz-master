class AddNameToClients < ActiveRecord::Migration[5.1]
  def change
    add_column :clients, :name, :string
  end
end
