import React, { Component } from 'react'
import PropTypes from 'prop-types';

const QuestionCount = (props) => {
    return(
        <div>
            Question <span>{props.counter}</span> of <span>{props.total}</span>
        </div>
    )
}

QuestionCount.propTypes = {
    counter: PropTypes.number,
    total: PropTypes.number
}

export default QuestionCount