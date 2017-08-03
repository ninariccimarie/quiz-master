class Api::ApiController < ApplicationController

  before_action :authenticate!

  def authenticate!
    # TODO:
    #
    #   Create client model
    #
    # token = Client.find_by(token: params[:token])
    # puts 'api_controller client token'
    # puts token

    # unless Rails.application.secrets.whitelisted_token == token
    #   json_response({ errors: [ { message: "Access denied" } ] }, 401)
    # end

    authenticate_or_request_with_http_token do |token, options|
      Client.exists?(token: token)
    end
  end
end
