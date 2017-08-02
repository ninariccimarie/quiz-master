class Api::ApiController < ApplicationController

  before_action :authenticate!

  def authenticate!
    # TODO:
    #
    #   Create client model
    #
    token = Client.find_by(token: params[:token])

    unless Rails.application.secrets.whitelisted_token == token
      json_response({ errors: [ { detail: "Access denied" } ] }, 401)
    end
  end
end
