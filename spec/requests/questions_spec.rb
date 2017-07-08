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

    describe 'GET /questions/:id' do
        before { get "/questions/#{question_id}" }

        context 'when the question exists' do
            it "returns the question" do
                expect(JSON.parse(response.body)).not_to be_empty
                expect(JSON.parse(response.body)['id']).to eq(question_id)
            end

            it 'responds status code 200' do
                expect(response).to have_http_status(200)
            end
        end

        context 'when the question does not exist' do
            let(:question_id) { 100 }

            it 'responds status code 404' do
                expect(response).to have_http_status(404)
            end

            it 'returns a not found message' do
                expect(response.body).to include("Couldn't find Question")
            end
        end
    end

end