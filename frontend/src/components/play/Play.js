import React, { Component } from 'react'
import { toast } from 'react-toastify'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Api from '../../Api'
import Quiz from './Quiz'
import styles from './play.scss'

const api = Api()

const ToastMessage = ({message}) => <h2>{message}</h2>

export default class Play extends Component {
    constructor(props){
        super(props)
        this.difficulty = props.location && props.location.state && props.location.state.difficulty_level || null
        this.state = {
            counter: 0,
            questionNum: 1,
            question: '',
            user_answer: '',
            score: 0,
            hasFinished: false
        }
        
        this.getAll = this.getAll.bind(this)
        this.setUserAnswer = this.setUserAnswer.bind(this)
        this.handleAnswerChange = this.handleAnswerChange.bind(this)
        this.setNextQuestion = this.setNextQuestion.bind(this)
        this.checkAnswer = this.checkAnswer.bind(this)
        this.renderQuiz = this.renderQuiz.bind(this)
        this.renderResult = this.renderResult.bind(this)
    }

    getAll(){
        api.index('questions', {difficulty_level: this.difficulty})
        .then(response => this.setState({questions: response.data}))
        .catch(err => console.log(err))
    }

    componentDidMount(){
        this.getAll()
    }

    setUserAnswer(user_answer){
        this.setState({user_answer})
    }

    handleAnswerChange(e){
        this.setUserAnswer(e.target.value)
    }

    setNextQuestion(){
        const questions = this.state.questions        
        const counter = this.state.counter + 1
        const questionNum = this.state.questionNum + 1
        this.setState({
            counter,
            questionNum,
            question: questions[counter].question,
            questionId: questions[counter].id,
            user_answer: ''
        })
    }

    checkAnswer(id, params){
        const score = this.state.score
        const counter = this.state.counter
        const questions = this.state.questions
       
        api.answer('questions', id, params)
        .then((response) => {
            const message = response.data.message
            if(message === 'Yay! You\'re correct!'){
                console.log('score', score)
                this.setState({score: score + 1})
            }
            toast(<ToastMessage message={message}/>)
        })
        
        if (counter < questions.length - 1) {
            this.setNextQuestion()
        } else {
            this.setState({hasFinished: true})
        }
    }

    renderQuiz(){
        const {
            questions,
            questionNum,
            questionId,
            question,
            user_answer,
            result,
            counter
        } = this.state
        if(!questions) return <p>Loading...</p>
        const currentId = counter === 0 ? questions[counter].id : questionId
        const currentQuestion = counter === 0 ? questions[counter].question : question
        
        return(
            <div>
                <h1>Quiz Mode</h1>                
                <Quiz 
                    questions={questions}
                    questionNum={questionNum}
                    questionId={currentId}
                    question={currentQuestion}
                    questionTotal={questions.length}
                    user_answer={user_answer}
                    onAnswerChange={this.handleAnswerChange}
                    checkAnswer={this.checkAnswer}
                    result={result}
                />
            </div>
        )        
    }

    renderResult() {
        const {score, questions} = this.state
        return(
              <ReactCSSTransitionGroup
                className="container result"
                component="div"
                transitionName="fade"
                transitionEnterTimeout={800}
                transitionLeaveTimeout={500}
                transitionAppear
                transitionAppearTimeout={500}
                >
            <h2>You got {score} out of {questions.length}</h2>
            </ReactCSSTransitionGroup>
        )
    }
    render() {
        return(
            <div className= {styles.play}>
                {this.state.hasFinished ? this.renderResult() : this.renderQuiz()}
            </div>
        )
    }
}