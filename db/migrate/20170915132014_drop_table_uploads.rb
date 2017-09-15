class DropTableUploads < ActiveRecord::Migration[5.1]
  def change
    drop_table :uploads 
    drop_table :images 
  end
end
