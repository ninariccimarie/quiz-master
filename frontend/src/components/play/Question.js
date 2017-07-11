import React from 'react'
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html'


const Question = (props) => {
    return(
        <h2>{renderHTML(props.question)}</h2>
    )
}

Question.propTypes = {
    question: PropTypes.string
}

export default Question