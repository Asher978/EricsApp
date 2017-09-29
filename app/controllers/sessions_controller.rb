class SessionsController < ApiController
    skip_before_action :require_login, only: [:create], raise: false
    
    def create
        if user = User.validate_login(params[:username], params[:password])
            allow_token_to_be_used_only_once_for(user)
            send_token_for_valid_login_of(user)
            # TODO
            # current_user.last_login = DateTime.now
        else
            render_unauthorized("Error with your login or password")
        end
    end

    def destroy
        logout
        head :ok
    end

    private

    def send_token_for_valid_login_of(user)
        render json: { token: user.auth_token, admin: user.admin }
    end

    def allow_token_to_be_used_only_once_for(user)
        user.regenerate_auth_token
    end

    def logout
        # TODO
        # current_user.last_logout = DateTime.now
        current_user.invalidate_token

    end
end
