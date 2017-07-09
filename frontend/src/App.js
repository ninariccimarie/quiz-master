import React, { Component } from 'react';
import Home from './components/home/Home'
import Manage from './components/manage/Manage'
import Play from './components/play/Play'
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

import styles from './app.scss'

const App = () => (
  <Router>
    <div>
      <div className={ styles.topnav }>
        <div className={ styles.container }>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/manage">Manage</Link></li>
            <li><Link to="/play">Play</Link></li>
          </ul>
        </div>
      </div>
        <Route exact path="/" component={Home}/>
        <Route path="/manage" component={Manage}/>
        <Route path="/play" component={Play}/>
    </div>
  </Router>
) 

export default App;
