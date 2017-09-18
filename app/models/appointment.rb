class Appointment < ApplicationRecord

    belongs_to :user

    delegate :username, to: :user

    def serialize
        slice(:time, :date, :username)
    end
end
