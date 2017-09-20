class CreateUploads < ActiveRecord::Migration[5.1]
  def change
    create_table :uploads do |t|
      t.string :title
      # t.attachment :image

      t.timestamps
    end
  end
end
