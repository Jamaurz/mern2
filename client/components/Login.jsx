import React from 'react';
import { Link } from 'react-router';

export default function Login(props) {
    var login = props.login;
    console.log('login', login);
    if(login) {
        return <span>{login} <a href="logout">Logout</a></span>
    } else {
        return  <Link to='/login' >Login</Link>
    }
}