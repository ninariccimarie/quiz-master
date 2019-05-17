require_relative 'boot'
require 'rails/all'

Bundler.require(*Rails.groups)

module QuizMaster
  class Application < Rails::Application

    config.i18n.fallbacks = true
    config.i18n.fallbacks = [:en, :"en-PH"]

    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1

    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins 'http://localhost:3000'
        resource '*', :headers => :any, :methods => [:get, :post, :put, :delete, :options]
      end
    end

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end
