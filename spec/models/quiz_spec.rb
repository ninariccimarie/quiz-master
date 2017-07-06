require 'rails_helper'

RSpec.describe Quiz, type: :model do
  it "is valid with valid attributes" do
    expect(Quiz.new).to be_valid
  end
end
