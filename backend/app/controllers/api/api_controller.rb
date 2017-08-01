class Api::ApiController < ApplicationController

  before_action :authenticate!

  def authenticate!
    # TODO: Auth by token
  end

end
