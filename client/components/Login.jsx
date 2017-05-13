import React from 'react';
import { Link } from 'react-router';

export default function Login(props) {
    var login = props.login;
    console.log('login', login);
    if(login) {
        return (
            <span>
                <span>{login} <a href="logout">Logout</a></span>
            </span>
        )
    } else {
        return  (
            <span>
                <Link to='/registration'>Registration</Link>
                <Link to='/login'>Login</Link>
            </span>
        )
    }
}