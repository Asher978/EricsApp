# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!


puts "SENDGRID_USERNAME: #{ENV['user_name']}"

ActionMailer::Base.smtp_settings = {
        :user_name => ENV['SENDGRID_USERNAME'],
        :password => ENV['SENDGRID_PASSWORD'],
        :domain => 'smtp.sendgrid.com',
        :address => 'smtp.sendgrid.net',
        :port => 587,
        :authentication => :plain,
        :enable_starttls_auto => true
}
