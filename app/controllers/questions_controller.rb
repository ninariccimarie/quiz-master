class QuestionsController < ApplicationController
    before_action :set_question, only: [:show, :update, :destroy]

    #GET /questions
    def index
        if question_params[:difficulty_level]
            @questions = Question.filter(question_params[:difficulty_level])
        else
            @questions = Question.all
        end
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

    #PUT /questions/:id
    def update
        @question.update(question_params)
        head :no_content
    end

    #DELETE /questions/:id
    def destroy
        @question.destroy
        head :no_content
    end

    #GET /

    private

    def question_params
        params.permit(:question, :answer, :difficulty_level)
    end

    def set_question
        @question = Question.find(params[:id])
    end
end
