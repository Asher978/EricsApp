# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!


# ActionMailer::Base.smtp_settings = {
#     :user_name => ENV['user_name'],
#     :password => ENV['password'],
#     :domain => 'smtp.sendgrid.com',
#     :address => 'smtp.sendgrid.net',
#     :port => 587,
#     :authentication => :plain,
#     :enable_starttls_auto => true
# }

ActionMailer::Base.smtp_settings = {
    :authentication => :plain,
    :address => "smtp.mailgun.org",
    :port => 587,
    :domain => ENV['domain'],
    :user_name => ENV['user_name'],
    :password => ENV['password']
}