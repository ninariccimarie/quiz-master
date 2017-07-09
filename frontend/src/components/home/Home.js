import React, {component} from 'react'
import Manage from '../manage/Manage'
import Play from '../play/Play'
import styles from './home.scss'
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

const Home = () => (
    <div className={ styles.home }>
        <div>
            <Manage />
        </div>
        <div>
            <Play />
        </div>
    </div>
)
export default Home