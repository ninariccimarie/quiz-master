require 'rails_helper'

RSpec.describe Question, type: :model do
  subject { 
    described_class.new(question: "What type of animal is a dog?", answer: "mammal",
                        difficulty_level: 1) 
  }

  it "is valid with valid attributes" do
    expect(subject).to be_valid
  end

  it "is invalid without a question" do
    subject.question = nil
    expect(subject).to_not be_valid
  end

  it "is invalid without an answer" do
    subject.answer = nil
    expect(subject).to_not be_valid
  end

  it "is invalid without a difficulty level" do
    subject.difficulty_level = nil
    expect(subject).to_not be_valid
  end
end
