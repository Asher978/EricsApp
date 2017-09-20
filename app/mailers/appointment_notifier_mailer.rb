class AppointmentNotifierMailer < ApplicationMailer
    default :from => 'ashershaheen@gmail.com'

    
    def send_signup_email(user, appointment)
        puts "SENDGRID_USERNAME: #{ENV['user_name']}"
        @user = user
        @appointment = appointment
        mail to: "ashershaheen@gmail.com",
             subject: "Thanks for booking an appointment!"
    end
end
