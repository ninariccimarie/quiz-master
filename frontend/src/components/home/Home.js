import React, {Component} from 'react'
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
        <div className={styles.manage}>
            <Link to="/manage">Manage Questions</Link>
            <Route path="/manage" component={Manage}/>
        </div>
        <div className={styles.play}>
            <Link to="/play">Quiz Mode</Link>
            <Route path="/play" component={Play}/>
        </div>
    </div>
)
export default Home