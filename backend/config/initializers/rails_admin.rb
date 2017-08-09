RailsAdmin.config do |config|

  config.authorize_with do
    authenticate_or_request_with_http_basic('Admin Authentication') do |username, password|
      admin = Client.find_by_id(1)
      username == admin.name.downcase && admin.authenticate(password)
    end
  end
  
  config.model 'Client' do
    visible false
  end

  config.actions do
    dashboard                     # mandatory
    index                         # mandatory
    new
    export
    bulk_delete
    show
    edit
    delete
    show_in_app

    ## With an audit adapter, you can add:
    # history_index
    # history_show
  end
end
