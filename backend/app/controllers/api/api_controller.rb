class Api::ApiController < ApplicationController

  before_action :authenticate!

  def authenticate!
    authenticate_or_request_with_http_token do |token, options|
      Client.exists?(token: token)
    end
  end
end
