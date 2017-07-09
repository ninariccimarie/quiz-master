import React, {Component} from 'react'

const levels = [ "easy", "medium", "hard"]

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
        this.onLevelChange = this.onLevelChange.bind(this)
    }
    onSubmit() {
        const {id, question, answer, difficulty_level} = this.state
        this.props.onSubmit({question, answer, difficulty_level}, id)
        this.setState({
            question: '',
            answer: '',
        })
    }

    onQuestionChange(e) {
        this.setState({question: e.target.value})
    }

    onAnswerChange(e) {
        this.setState({answer: e.target.value})
    }

    onLevelChange(e) {
        this.setState({difficulty_level: e.target.value})
    }


    render() {
        const {question, answer, difficulty_level} = this.state
        return(
            <div>
                <label>Question
                        <textarea value={question} onChange={this.onQuestionChange}/>
                </label>
                <label>Answer
                    <input type="text" value={answer} onChange={this.onAnswerChange}/>
                </label>
                <label>Difficulty Level
                    <select value={difficulty_level} onChange={this.onLevelChange}>
                        {levels.map((level) => 
                            <option key={level} value={level}>{level}</option>)}
                    </select>
                </label>
                <button onClick={this.onSubmit}>Submit</button>
            </div>
        )
    }
}