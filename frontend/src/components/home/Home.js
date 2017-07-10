import React, { Component } from 'react'
import Manage from '../manage/Manage'
import Play from '../play/Play'
import DifficultyLevel from '../manage/DifficultyLevel'
import styles from './home.scss'

import Modal from 'react-modal'
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

const DifficultyModal = (props) => {
    console.log('modal', props)
    return (
        <div>
            <DifficultyLevel value={props.difficulty_level} onChange={props.handleLevelChange} />
            <div>
                <Link to={{pathname: "/play", state: {difficulty_level: props.difficulty_level}}}>Play</Link>   
            </div>
            <div>
                <Link to="/play">Play All</Link> 
            </div>
        </div>
    )
}

export default class Home extends Component {
    constructor(props) {
        super(props)
        const question = props.question || {}
        this.state = {
            difficulty_level: question.difficulty_level || 'easy',
            isModalOpen: this.props.open,
        }
        this.showModal = this.showModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.handleLevelChange = this.handleLevelChange.bind(this)
    }

    showModal() {
        this.setState({isModalOpen: true})
    }

    closeModal() {
        this.setState({isModalOpen: false})
    }

    handleLevelChange(difficulty_level) {
        this.setState({difficulty_level})
    }

    render(){
        const {questions, modalProps, difficulty_level = {}} = this.state
        // if(!questions) return <p>Loading...</p>
        return(
            <div className={ styles.home }>
                <div className={styles.manage}>
                    <Link to="/manage">Manage Questions</Link>
                </div>
                <div className={styles.play}>
                    <a href='#' onClick={e => this.showModal()}>Play!</a>
                    <Modal
                        isOpen={this.state.isModalOpen}
                        onRequestClose={this.closeModal}
                        contentLabel={'Play'}                
                    >
                        <DifficultyModal 
                            difficulty_level={this.state.difficulty_level} 
                            handleLevelChange={this.handleLevelChange}
                        />
                    </Modal>
                </div>
            </div>
        )
    }
}