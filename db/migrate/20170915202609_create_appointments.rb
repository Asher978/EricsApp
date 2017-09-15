class CreateAppointments < ActiveRecord::Migration[5.1]
  def change
    create_table :appointments do |t|
      t.date :date
      t.time :time
      t.text :description
      t.belongs_to :user

      t.timestamps
    end
  end
end
