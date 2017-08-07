require 'rails_helper'

RSpec.describe Api::V1::QuestionsController, type: :request do
  let!(:questions) { create_list(:question, 5) }
  let!(:questions_medium) { create_list(:question_medium, 3) }
  let!(:questions_hard) { create_list(:question_hard, 2) }
  let!(:client) { create :client }
  let(:question_id) { questions.first.id }

  describe 'GET /api/v1/questions' do
    context 'when authenticated' do
      before do
        get '/api/v1/questions', params: {}, headers: { "Authorization" => "Token token=#{client.token}" }
      end

      it 'retrieves questions' do
        expect(json).not_to be_empty
        expect(json.size).to eq(10)
      end

      it 'responds status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when unauthenticated' do
      before { get '/api/v1/questions', params: {}, headers: { "Authorization" => "Token token=foo" } }

      it 'responds status code 401' do
        expect(response).to have_http_status(401)
      end
    end
  end

  describe 'GET /api/questions/:id' do
    context 'when authenticated' do
      before do
        get "/api/v1/questions/#{question_id}", params: {}, headers: { "Authorization" => "Token token=#{client.token}" }
      end

      context 'and when the question exists' do
        it "returns the question" do
          expect(json).not_to be_empty
          expect(json['id']).to eq(question_id)
        end

        it 'responds status code 200' do
          expect(response).to have_http_status(200)
        end
      end

      context 'and when the question does not exist' do
        let(:question_id) { 100 }

        it 'responds status code 404' do
          expect(response).to have_http_status(404)
        end

        it 'returns a not found message' do
          expect(response.body).to include("Couldn't find Question")
        end
      end
    end

    context 'when unauthenticated' do
      before { get "/api/v1/questions/#{question_id}", params: {}, headers: { "Authorization" => "Token token=foo" } }

      it 'responds status code 401' do
        expect(response).to have_http_status(401)
      end
    end
  end

  describe 'POST /api/v1/questions' do
    let(:valid_attributes) do
      {
        question:         'What type of animal is a dog?',
        answer:           'Mammal',
        difficulty_level: 'easy'
      }
    end

    context 'when authenticated' do
      context 'and when the request is valid' do
        before { post '/api/v1/questions', params: valid_attributes, headers: { "Authorization" => "Token token=#{client.token}" } }

        it 'creates a question' do
          expect(json['answer']).to eq('Mammal')
        end


        it 'responds status code 201' do
          expect(response).to have_http_status(201)
        end
      end

      context 'and when the request is invalid' do
        before { post '/api/v1/questions', params: { answer: 'Mammal' }, headers: { "Authorization" => "Token token=#{client.token}" } }

        it 'responds status code 422' do
          expect(response).to have_http_status(422)
        end

        it 'returns a validation error message' do
          expect(response.body).to match(/Validation failed: Question can't be blank, Difficulty level can't be blank/)
        end
      end
    end

    context 'when unauthenticated' do
      before { post "/api/v1/questions", params: valid_attributes, headers: { "Authorization" => "Token token=foo" } }

      it 'responds status code 401' do
        expect(response).to have_http_status(401)
      end
    end

  end

  describe 'PUT /api/v1/questions/:id' do
    let(:valid_attributes) { { difficulty_level: 'medium' } }

    context 'when authenticated' do
      context 'and when the record exists' do
        before { put "/api/v1/questions/#{question_id}", params: valid_attributes, headers: { "Authorization" => "Token token=#{client.token}" } }

        it 'updates the question' do
          expect(response.body).to be_empty
        end

        it 'responds status code 204' do
          expect(response).to have_http_status(204)
        end
      end
    end

    context 'when unauthenticated' do
      before { put "/api/v1/questions/#{question_id}", params: valid_attributes, headers: { "Authorization" => "Token token=foo" } }

      it 'responds status code 401' do
        expect(response).to have_http_status(401)
      end
    end
  end

  describe 'DELETE /api/v1/questions/:id' do
    context 'when authenticated' do
      before { delete "/api/v1/questions/#{question_id}", params: {}, headers: { "Authorization" => "Token token=#{client.token}" } }

      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end
    end

    context 'when unauthenticated' do
      before { delete "/api/v1/questions/#{question_id}", params: {}, headers: { "Authorization" => "Token token=foo" } }

      it 'returns status code 401' do
        expect(response).to have_http_status(401)
      end
    end

  end

  describe 'GET /api/v1/questions?difficulty_level=:difficulty_level' do
    let(:easy) { { difficulty_level: 'easy' } }
    let(:medium) { { difficulty_level: 'medium' } }
    let(:hard) { { difficulty_level: 'hard' } }

    context 'when authenticated' do
      context 'and when difficulty level: easy' do
        before { get '/api/v1/questions?difficulty_level=easy', params: {}, headers: { "Authorization" => "Token token=#{client.token}" } }

        it 'filters list of questions with difficulty level: easy' do
          expect(json).not_to be_empty
          expect(json.size).to eq(5)
        end
      end

      context 'and when difficulty level: medium' do
        before { get '/api/v1/questions?difficulty_level=medium', params: {}, headers: { "Authorization" => "Token token=#{client.token}" } }

        it 'filters list of questions with difficulty level: medium' do
          expect(json).not_to be_empty
          expect(json.size).to eq(3)
        end
      end

      context 'and when difficulty level: hard' do
        before { get '/api/v1/questions?difficulty_level=hard', params: {}, headers: { "Authorization" => "Token token=#{client.token}" } }

        it 'filters list of questions with difficulty level: hard' do
          expect(json).not_to be_empty
          expect(json.size).to eq(2)
        end
      end
    end

    context 'when unauthenticated' do
      before { get '/api/v1/questions?difficulty_level=hard', params: {}, headers: { "Authorization" => "Token token=foo" } }

      it 'returns status code 401' do
        expect(response).to have_http_status(401)
      end
    end
  end

  describe 'POST /questions/:id/answers' do
    context 'when authenticated' do
      context 'and when user anwer is correct' do
        before { post '/api/v1/questions/1/answers', params: { user_answer: 'Mammal' }, headers: { "Authorization" => "Token token=#{client.token}" } }

        it 'returns a correct answer message' do
          expect(response.body).to match(/Yay! You're correct!/)
        end
      end

      context 'and when user answer is incorrect' do
        before { post '/api/v1/questions/1/answers', params: { user_answer: 'Reptile' }, headers: { "Authorization" => "Token token=#{client.token}" } }

        it 'returns a wrong answer message' do
          expect(response.body).to match(/Sorry, your answer is wrong. \:\(/)
        end
      end
    end

    context 'when unauthenticated' do
      before { post '/api/v1/questions/1/answers', params: { user_answer: 'Mammal' }, headers: { "Authorization" => "Token token=foo" } }

      it 'returns status code 401' do
        expect(response).to have_http_status(401)
      end
    end
  end
end