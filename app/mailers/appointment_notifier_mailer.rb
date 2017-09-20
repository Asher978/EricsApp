class AppointmentNotifierMailer < ApplicationMailer
    default :from => 'ashershaheen@gmail.com'

    
    def send_signup_email(user, appointment)
        @user = user
        @appointment = appointment
        mail to: "ashershaheen@gmail.com",
             subject: "Thanks for booking an appointment!"
    end
end
