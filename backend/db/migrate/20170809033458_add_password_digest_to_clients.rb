class AddPasswordDigestToClients < ActiveRecord::Migration[5.1]
  def change
    add_column :clients, :password_digest, :string
  end
end
