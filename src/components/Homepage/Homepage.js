import React, { Component } from 'react';
// import './Homepage.css';

import { connect } from 'react-redux';
import { getUserInfo } from './../../ducks/user_reducer';


class Homepage extends Component {

    componentDidMount() {
        this.props.getUserInfo();
        console.log(this.props.getUserInfo)
    }

    render() {
        return (
            <div> 
                <h1>Homepage</h1> 
            </div> 
        )
    }
}  

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

let outputActions = {
    getUserInfo, 
 } 

 export default connect( mapStateToProps, outputActions)(Homepage);