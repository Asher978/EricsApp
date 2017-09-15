class AppointmentsController < ApiController
    before_action :require_login

    def index
        appointments = Appointment.all.includes(:user)
        render json: { appointments: appointments.map(&:serialize) }
    end

    def create
        appointment = Appointment.new(appointment_params)
        appointment.user = current_user
        if appointment.save
            render json: {
                message: 'ok',
                appointment: appointment,
            }
        else
            render json: { message: 'Could not create an appointment' }
        end
    end

    private
    def appointment_params
        params.require(:appointment).permit(:date, :time, :description)
    end

end
