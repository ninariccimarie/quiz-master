import React, { Component } from 'react'
import DifficultyLevel from '../manage/DifficultyLevel'
import styles from './home.scss'
import './modal.css'

import Modal from 'react-modal'
import {
	Link
} from 'react-router-dom'

const DifficultyModal = (props) => {
    return (
        <div className={styles.difficultyLevel}>
            <DifficultyLevel value={props.difficulty_level} onChange={props.handleLevelChange} />
            <div className={styles.play}>
                <Link to={{pathname: "/play", state: {difficulty_level: props.difficulty_level}}}>Play</Link>   
            </div>
            <div className={styles.playAll}>
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
        return(
            <div className={ styles.home }>
                <div className={styles.manage}>
                    <div className={styles.icon}></div>
                    <Link to="/manage">Manage Questions</Link>
                </div>
                <div className={styles.play}>
                    <div className={styles.icon}></div>
                    <a href='#' onClick={e => this.showModal()}>Play!</a>
                    <Modal
                        isOpen={this.state.isModalOpen}
                        onRequestClose={this.closeModal}
                        contentLabel={'Play'}
                        className={styles.Modal}
                        overlayClassName={styles.Overlay}

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