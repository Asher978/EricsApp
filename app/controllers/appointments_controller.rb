class AppointmentsController < ApiController
    before_action :require_login, except: [:index, :show]

    def index
        appointments = Appointment.all.includes(:user)
        render json: { event: appointments.map(&:serialize) }
    end

    def create
        appointment = Appointment.new(appointment_params)
        appointment.user = current_user
        if appointment.save
            event = Appointment.all
            AppointmentNotifierMailer.send_signup_email(appointment.user, appointment).deliver
            render json: {
                message: 'Appointment was created and An email was sent to Eric! He will be in touch shortly. Thank you!',
                appointment: appointment,
                event: event.map(&:serialize)
            }
        else
            render json: { message: 'Error in the submission. Please submit your request again!' }
        end
    end

    def destroy
        app = Appointment.delete(params[:appointment_id])
        appointments = Appointment.all
        render json: { event: appointments.map(&:serialize) }
    end

    private
    def appointment_params
        params.require(:appointment).permit(:date, :time, :description)
    end

end
