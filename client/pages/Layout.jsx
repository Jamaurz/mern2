import React from 'react';
import { Link } from 'react-router';
import { connect } from "react-redux"

import { checkAuth, authStore, checkMsg, msgStore } from "../actions/commonActions"

import Login from '../components/Login.jsx';

import './Layout.sass';

@connect((store, ownProps) => {
    //console.log('ownProps', ownProps);
    return {
        user: store.auth.user,
        msg: store.common.msg
    };
})
export default class Layout extends React.Component {
    componentWillMount() {
        let newThis = this;
        checkAuth(function(data) {
            if(data) {
                newThis.props.dispatch(authStore(data));
            }
        });

        checkMsg(function(msg) {
           console.log('data msg', msg);
           if(msg) {
               newThis.props.dispatch(msgStore(msg));
           }
        });
    }

    render() {
        return (
            <div class='app'>
                <div class='navigation'>
                    <Link to='/registration' >Registration</Link>
                    <Login login={this.props.user} />
                </div>
                <div class='message'>{ this.props.msg }</div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}