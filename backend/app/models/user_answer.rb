class UserAnswer < ApplicationRecord
  belongs_to :quiz
  validates_presence_of :answer

  def create
    @user_answer = @quiz.user_answers.build(user_answer_params)

    json_response(@quiz, :created)
  end

  private

  def user_answer_params
    params.permit(:answer)
  end
end
