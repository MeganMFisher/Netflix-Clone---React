import React, { Component } from 'react';
import './App.css';

import { Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Homepage from './components/Homepage/Homepage';


class App extends Component {
    render() {
        return (
            <div>
            <Route component={ Login } path='/' exact />
            <Route component={ Homepage } path='/home' />
            </div> 
        );
    }
}

export default App;

