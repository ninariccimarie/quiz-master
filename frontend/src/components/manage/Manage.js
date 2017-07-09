import React, {Component} from 'react'
import Table from 'rc-table'
import Form from './Form'
import styles from './manage.scss'

const questions = [
    { id:1, question: "What is the capital of the Philippines?", answer: "Manila", difficulty_level: "easy" },
    { id:2, question: "What is x in x + 1 = 2 ?", answer: "1", difficulty_level: "easy" },
    { id:3, question: "True or False? The center of the Earth is very hot.", answer: "True", difficulty_level: "easy"}
]

const columns = [
    { title: 'Id', dataIndex: 'id', key: 'id', width: 250 },
    { title: 'Question', dataIndex: 'question', key: 'question', width: 250 },
    { title: 'Answer', dataIndex: 'answer', key: 'answer', width: 250 },
    { title: 'Difficulty Level', dataIndex: 'difficulty_level', key: 'difficulty_level', width: 250 },
    { title: 'Action', dataIndex: '', key: 'actions', width: 250, render: () => <button text='Edit' handleClick={this.setShowForm}>Edit</button>}
]

export default class Manage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            questions: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(temp){
        console.log(temp)
    }

    render() {

        return(
            <div>
                <h1>Manage Questions</h1>
                <div>
                    <Table columns={columns} data={questions}/>
                </div>
                <div>
                    <Form onSubmit={this.handleSubmit} />
                </div>
            </div>
        )
    }
}