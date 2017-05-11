import React from 'react';
import { connect } from "react-redux"

@connect((store, ownProps) => {
    return {

    };
})
export default class Login extends React.Component {
    render() {
        return (
            <div>
                <form action="/login" method="post">
                    <div>
                        <label>Email:</label>
                        <input type="type" name="username"/>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" name="password"/>
                    </div>
                    <div>
                        <input type="submit" value="Log In"/>
                    </div>
                </form>
            </div>
        )
    }
}