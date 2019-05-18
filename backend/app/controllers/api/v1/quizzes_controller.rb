class Api::V1::QuizzesController < Api::V1::ApiController
  def index
    @quizzes = Quiz.all
    json_response(@quizzes)
  end

  def show
    json_response(@quiz)
  end

  def create
    @quiz = Quiz.create!(quiz_params)

    json_response(@quiz, :created)
  end

  def update
    @quiz.update(quiz_params)
    head :no_content
  end

  def destroy
    @quiz.destroy
    head :no_content
  end

  private

  def quiz_params
    params.permit(:student_name, :class_name, :subject, :day)
  end

  def set_quiz
    @quiz = Quiz.find(params[:id])
  end
end
