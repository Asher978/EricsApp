class UpdatingUploadsTable < ActiveRecord::Migration[5.1]
  def change
    remove_column :uploads, :title    
  end
end
