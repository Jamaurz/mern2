import React from 'react';
import { Link } from 'react-router';
import { connect } from "react-redux"

import { checkAuth, authStore } from "../actions/commonActions"

import Login from '../components/Login.jsx';

import './Layout.sass';

@connect((store, ownProps) => {
    //console.log('ownProps', ownProps);
    return {
        user: store.auth.user
    };
})
export default class Layout extends React.Component {
    componentWillMount() {
        var newThis = this;
        checkAuth(function(data) {
            newThis.props.dispatch(authStore(data));
        })
    }

    render() {
        return (
            <div>
                <Link to='/registration' >Registration</Link>
                <Login login={this.props.user} />
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}