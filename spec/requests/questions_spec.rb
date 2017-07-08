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

    describe 'POST /questions' do
        let(:valid_attributes) { { question: 'What type of animal is a dog?', answer: 'Mammal', 
                                    difficulty_level: 'easy' } }
        
        context 'when the request is valid' do
            before { post '/questions', params: valid_attributes }

            it 'creates a question' do
                expect(JSON.parse(response.body)['answer']).to eq('Mammal')
            end

            it 'responds status code 201' do
                expect(response).to have_http_status(201)
            end
        end

        context 'when the request is invalid' do
            before { post '/questions', params: { answer: 'Mammal' } }

            it 'responds status code 422' do
                expect(response).to have_http_status(422)
            end    

            it 'returns a validation error message' do
                expect(response.body)
                    .to match(/Validation failed: Question can't be blank, Difficulty level can't be blank/)
            end
        end
    end

    describe 'PUT /questions/:id' do
        let(:valid_attributes) { { difficulty_level: 'medium' } }

        context 'when the record exists' do
            before { put "/questions/#{question_id}", params: valid_attributes}

            it 'updates the question' do
                expect(response.body).to be_empty
            end

            it 'responds status code 204' do
                expect(response).to have_http_status(204)
            end
        end
    end

    describe 'DELETE /questions/:id' do
        before { delete "/questions/#{question_id}" }

        it 'returns status code 204' do
            expect(response).to have_http_status(204)
        end
    end

end