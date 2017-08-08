class ApplicationController < ActionController::Base
  protect_from_forgery unless: -> { request.format.json? }
  include Response
  include ExceptionHandler
  before_action :set_locale

    def set_locale
      I18n.locale = params[:locale] || I18n.default_locale
    end
end
