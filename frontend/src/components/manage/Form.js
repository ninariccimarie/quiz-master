import React, { Component } from 'react'
import ReactQuill from 'react-quill'
import DifficultyLevel from './DifficultyLevel'
import PropTypes from 'prop-types';

import theme from 'react-quill/dist/quill.snow.css'

export default class Form extends Component {
    constructor(props) {
        super(props)
        const question = props.question || {}
        this.state = {
            id: question.id,
            question: question.question || '',
            answer: question.answer || '',
            difficulty_level: question.difficulty_level || 'easy'
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.onQuestionChange = this.onQuestionChange.bind(this)
        this.onAnswerChange = this.onAnswerChange.bind(this)
        this.handleLevelChange = this.handleLevelChange.bind(this)
    }
    onSubmit() {
        const {id, question, answer, difficulty_level} = this.state
        this.props.onSubmit({question, answer, difficulty_level}, id)
        this.setState({
            question: '',
            answer: '',
        })
    }

    onQuestionChange(value) {
        this.setState({question: value})
    }

    onAnswerChange(e) {
        this.setState({answer: e.target.value})
    }

    handleLevelChange(difficulty_level) {
        this.setState({difficulty_level})
    }


    render() {
        const {question, answer, difficulty_level} = this.state
        return(
            <div>
                <ReactQuill value={question} onChange={this.onQuestionChange}/>
                <label>Answer
                    <input type="text" value={answer} onChange={this.onAnswerChange}/>
                </label>
                <DifficultyLevel value={difficulty_level} onChange={this.handleLevelChange}/>
                <button onClick={this.onSubmit}>Submit</button>
            </div>
        )
    }
}

Form.propTypes = {
    id: PropTypes.number,
    question: PropTypes.string,    
    answer: PropTypes.string,
    difficulty_level: PropTypes.string,
    onSubmit: PropTypes.func,
    onQuestionChange: PropTypes.func,
    onAnswerChange: PropTypes.func,
    handleLevelChange: PropTypes.func
}