import React, { Component } from 'react'
import PropTypes from 'prop-types';

const UserAnswer = (props) => {
    return(
        <div>
            <label>Answer
                <input type="text" value={props.user_answer} onChange={props.onAnswerChange}/>
            </label>
            <button onClick={() => props.checkAnswer(props.questionId, {user_answer: props.user_answer})}>Check Answer</button>
        </div>
    )
}

UserAnswer.propTypes = {
    user_answer: PropTypes.string,
    onAnswerChange: PropTypes.func,
    checkAnswer: PropTypes.func,
    questionId: PropTypes.number
}

export default UserAnswer