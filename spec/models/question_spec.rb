require 'rails_helper'

RSpec.describe Question, type: :model do
  subject(:question) { 
      described_class.new(question: "What is x in x + 1 = 2", answer: "1",
                          difficulty_level: 1) 
  }  

  describe 'validations' do 

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

  describe 'is_correct?' do
    context 'when answer is correct' do
      it 'returns true' do
        expect(subject.is_correct?(question.answer)).to be true
      end
    end

    context 'when answer is incorrect' do

      it 'returns false' do
        expect(subject.is_correct?("2")).to be false
      end
    end

    context 'when answer is a number' do
      context 'and is correct but in words' do
        it 'returns true' do
          expect(subject.is_correct?("one")).to be true
        end
      end

      context 'and is incorrect but in words' do
        it 'returns false' do
          expect(subject.is_correct?("two")).to be false
        end
      end
    end

  end

end
