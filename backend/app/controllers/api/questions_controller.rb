class Api::QuestionsController < Api::ApiController

  before_action :set_question, only: [:show, :update, :destroy, :answer]

  def index
    @questions =
      if question_params[:difficulty_level]
        Question.filter(question_params[:difficulty_level])
      else
        Question.all
      end

    json_response @questions
  end

  def show
    json_response(@question)
  end

  def create
    @question = Question.create!(question_params)
    json_response(@question, :created)
  end

  def update
    @question.update(question_params)
    head :no_content
  end

  def destroy
    @question.destroy
    head :no_content
  end

  def answer
    if @question.is_correct?(user_params[:user_answer])
      json_response({message: "Yay! You're correct!"})
    else
      json_response({message: "Sorry, your answer is wrong. :("})
    end
  end

  private

  def user_params
    params.permit(:user_answer)
  end

  def question_params
    params.permit(:question, :answer, :difficulty_level)
  end

  def set_question
    @question = Question.find(params[:id])
  end
end
