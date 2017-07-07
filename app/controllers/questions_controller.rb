class QuestionsController < ApplicationController
    before_action :set_question, only: [:show, :update, :destroy]

    #GET /questions/1.json
    def index
        @questions = Question.all
        json_response(@questions)
    end
end
