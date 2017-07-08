class QuestionsController < ApplicationController
    before_action :set_question, only: [:show, :update, :destroy]

    #GET /questions
    def index
        @questions = Question.all
        json_response(@questions)
    end

    #GET /questions/:id
    def show
        json_response(@question)
    end

    #POST /questions
    def create
        @question = Question.create!(question_params)
        json_response(@question, :created)
    end

    private

    def question_params
        params.permit(:question, :answer, :difficulty_level)
    end

    def set_question
        @question = Question.find(params[:id])
    end
end
