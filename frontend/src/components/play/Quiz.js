import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Question from './Question'
import QuestionCount from './QuestionCount'
import UserAnswer from './UserAnswer'

const Quiz = (props) => {
    return(
        <div>
            <QuestionCount
                counter = {props.questionNum}
                total = {props.questionTotal}
            />
            <Question
                question = {props.question}
            />
            <UserAnswer
                user_answer = {props.user_answer}
                questionId = {props.questionId}
                onAnswerChange = {props.onAnswerChange}
                checkAnswer = {props.checkAnswer}
            />
        </div>
    )
}

Quiz.propTypes = {
    questionNum: PropTypes.number,
    questionTotal: PropTypes.number,
    questionId: PropTypes.number,
    question: PropTypes.string,
    user_answer: PropTypes.string,
    onAnswerChange: PropTypes.func,
    checkAnswer: PropTypes.func
}

export default Quiz

/*questions = {props.questions}
user_answer= {props.user_answer}
onAnswerChange = {props.onAnswerChange}
checkAnswer = {props.checkAnswer}
result = {props.result}*/