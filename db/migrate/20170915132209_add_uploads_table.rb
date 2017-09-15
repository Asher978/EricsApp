class AddUploadsTable < ActiveRecord::Migration[5.1]
  def change
    create_table :uploads 
    add_column :uploads, :url, :string
  end
end
