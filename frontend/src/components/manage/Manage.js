import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Table from 'rc-table'
import Modal from 'react-modal'
import renderHTML from 'react-render-html'

import Api from '../../Api'
import Form from './Form'

import 'rc-table/assets/index.css';
import 'rc-table/assets/animation.css';
import styles from './manage.scss'
import '../home/modal.css'


const api = Api()

export default class Manage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalOpen: this.props.open,
            modalProps: {
                label: ''
            }
        }
        this.getAll = this.getAll.bind(this)
        this.create = this.create.bind(this)
        this.destroy = this.destroy.bind(this)
        this.update = this.update.bind(this)
        this.showModal = this.showModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.renderActions = this.renderActions.bind(this)

        this.columns = [
            { title: 'Id', dataIndex: 'id', key: 'id', width: 100 },
            { title: 'Question', dataIndex: 'question', key: 'question', width: 250, render: (value) => renderHTML(value) },
            { title: 'Answer', dataIndex: 'answer', key: 'answer', width: 250 },
            { title: 'Difficulty Level', dataIndex: 'difficulty_level', key: 'difficulty_level', width: 250 },
            { title: 'Action', dataIndex: '', key: 'actions', width: 250, render: this.renderActions}
        ]
    }

    showModal(type, question = {}) {
        if (type === 'create') {
            this.setState({
                modalProps: {
                    label: 'Create',
                    action: this.create
                }
            })
        }
        else if (type === 'update') {
            this.setState({
                modalProps: {
                    label: 'Update',
                    action: this.update,
                    question
                }
            })
        }
        this.setState({isModalOpen: true})
    }

    closeModal() {
        this.setState({isModalOpen: false})
    }

    getAll() {
        api.index('questions')
        .then(response => this.setState({questions: response.data}))
        .catch(err => console.log(err))

    }

    create(params){
        api.create('questions', params)
        .then(() => this.getAll())
        this.closeModal()
    }

    destroy(id){
        api.destroy('questions', id)
        .then(() => this.getAll())
    }

    update(params, id){
        api.update('questions', id, params)
        .then(() => this.getAll())
        this.closeModal()
        
    }

    renderActions(value, row, index) {
        return(
            <div className={styles.buttons}>
                <button className='edit-btn' onClick={e => this.showModal('update', row)}>Edit</button>
                <button className='delete-btn'onClick={e => this.destroy(row.id)}>Delete</button>
            </div>
        )
    }

    componentDidMount(){
        this.getAll()
    }

    render() {
        const {questions, modalProps = {}} = this.state
        if(!questions) return <p>Loading...</p>
        return(
            <div className={ styles.manage }>
                <Modal
                    isOpen={this.state.isModalOpen}
                    onRequestClose={this.closeModal}
                    contentLabel={modalProps.label}
                    className={styles.Modal}
                    overlayClassName={styles.Overlay}                
                >
                    <Form onSubmit={modalProps.action} question={modalProps.question}/>
                </Modal>
                <h1 className={ styles.title }>Manage Questions</h1>
                <div className={ styles.table }>
                    <button className= {styles.button} onClick={e => this.showModal('create')}>New Question</button>                    
                    <Table 
                        columns={this.columns} 
                        data={questions} 
                        scroll={{ y: 300 }}
                        title={currentData => <div>List: {currentData.length} questions</div>}
                    />
                </div>
            </div>
        )
    }
}

Manage.propTypes = {
    isModalOpen: PropTypes.bool,
    modalProps: PropTypes.object,
    columns: PropTypes.array,
    getAll: PropTypes.func,
    create: PropTypes.func,
    destroy: PropTypes.func,
    update: PropTypes.func,
    showModal: PropTypes.func,
    closeModal: PropTypes.func,
    renderActions: PropTypes.func
}