class ChangeColumnNameInUploads < ActiveRecord::Migration[5.1]
  def change
    rename_column :uploads, :url, :pic
  end
end
