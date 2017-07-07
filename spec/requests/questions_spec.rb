require 'rails_helper'

RSpec.describe "Questions API", type: :request do
    let!(:questions) { create_list(:question, 5) }
    let(:question_id) { questions.first.id }

    describe 'GET /questions' do
        before { get '/questions' }

        it 'retrieves questions' do
            expect(JSON.parse(response.body)).not_to be_empty
            expect(JSON.parse(response.body).size).to eq(5)
        end

        it 'responds status code 200' do
            expect(response).to have_http_status(200)
        end
    end
end