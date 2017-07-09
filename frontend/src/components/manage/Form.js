import React, {Component} from 'react'


// const Question = (props) => {
//     const onQuestionChange = (e) => {
//         props.onChange(e.target.value)
//     }
//     return(
//         <label>Question
//                 <textarea value={props.question} onChange={onQuestionChange}/>
//         </label>
//     )
// }

// const Answer = (props) => {
//     const onAnswerChange = (e) => {
//         props.onChange(e.target.value)
//     }
//     return(
//         <label>Answer
//                 <input type="text" value={props.answer} onChange={onAnswerChange}/>
//         </label>
//     )
// }

// const DifficultyLevel = (props) => {
//     const levels = [ "easy", "medium", "hard"]
//     const onLevelChange = (e) => {
//         props.onChange(e.target.value)
//     }
//     return(
//         <label>Difficulty Level
//             <select value={props.difficulty_level} onChange={onLevelChange}>
//                 {levels.map((level) => 
//                     <option key={level} value={level}>{level}</option>)}
//             </select>
//         </label>
//     )
// }
const levels = [ "easy", "medium", "hard"]

export default class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            question: '',
            answer: '',
            difficulty_level: 'easy'
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.onQuestionChange = this.onQuestionChange.bind(this)
        this.onAnswerChange = this.onAnswerChange.bind(this)
        this.onLevelChange = this.onLevelChange.bind(this)
    }
    onSubmit() {
        const {question, answer, difficulty_level} = this.state
        this.props.onSubmit({question, answer, difficulty_level})
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