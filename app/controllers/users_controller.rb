class UsersController < ApiController
    before_action :require_login, except: [:create]
    
    def create
        user = User.create!(user_params)
        render json: { token: user.auth_token }
    end

    def profile
        user = User.find_by_auth_token!(request.headers[:token])
        render json: { user: { username: user.username, email: user.email, firstname: user.firstname, lastname: user.lastname, admin: user.admin } }
    end

    private
    def user_params
        params.require(:user).permit(:username, :email, :password, :firstname, :lastname, :admin)
    end
end
