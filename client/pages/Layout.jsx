import React from 'react';
import { Link } from 'react-router';
import { connect } from "react-redux"

import {add, addEvent, singIn, singInTwitter, getEvent, getAllEvent} from "../actions/commonActions"

// import Login from '../components/Login.jsx';
// import Event from '../components/Event.jsx';

import './Layout.sass';

@connect((store, ownProps) => {
    //console.log('ownProps', ownProps);
    return {
        events: store.common.events,
        user: store.twitter.user
    };
})
export default class Layout extends React.Component {

    render() {
        return (
            <div>
                <form action="/login" method="post">
                    <div>
                        <label>Username:</label>
                        <input type="text" name="username"/>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" name="password"/>
                    </div>
                    <div>
                        <input type="submit" value="Log In"/>
                    </div>
                </form>

                <form action="/signup" method="post">
                    <div>
                        <label>Username:</label>
                        <input type="text" name="username"/>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" name="password"/>
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" name="email"/>
                    </div>
                    <div>
                        <input type="submit" value="Log In"/>
                    </div>
                </form>
            </div>
        )
    }
}