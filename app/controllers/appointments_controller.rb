require "bigbertha"

class AppointmentsController < ApiController
    before_action :require_login, except: [:index, :show]


    def index
        appointments = Appointment.all.includes(:user)
        time_since_last_admin_logout = user.last_logout
        # recent_appointments = Appointment.where('created_at > ?' current_user.last_logout)
        # recent_appointments: {event: appointments.map(&:serialize) } (this will go in the json response)
        render json: { event: appointments.map(&:serialize) }
    end

    def create
        appointment = Appointment.new(appointment_params)
        appointment.user = current_user
        if appointment.save
            event = Appointment.all
            AppointmentNotifierMailer.send_signup_email(appointment.user, appointment).deliver
            @data = {
                date: appointment.date,
                time: appointment.time,
                description: appointment.description,
                user: appointment.user.username,
                id: appointment.id
            }
            base_url = 'https://ericapp-1a07a.firebaseio.com/'
            @ref = Bigbertha::Ref.new(base_url)
            @ref.child('appoint').push(@data)
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
