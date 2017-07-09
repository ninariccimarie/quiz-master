import React, {Component} from 'react'
import Table from 'rc-table'
import Api from '../../Api'
import Form from './Form'
import styles from './manage.scss'

const api = Api()

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
            //questions: []
        }
        this.getAll = this.getAll.bind(this)
        this.create = this.create.bind(this)
    }

    getAll() {
        api.index('questions')
        .then(response => this.setState({ questions: response.data }))
        .catch(err => console.log(err))
    }

    create(params){
        console.log(params)
        api.create('questions', params)
    }

    componentDidMount(){
        this.getAll()
    }

    render() {
        const {questions} = this.state
        if(!questions) return <p>Loading...</p>

        return(
            <div>
                <h1>Manage Questions</h1>
                <div>
                    <Table columns={columns} data={questions}/>
                </div>
                <div>
                    <Form onSubmit={this.create} />
                </div>
            </div>
        )
    }
}