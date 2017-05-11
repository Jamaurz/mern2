import React from 'react';
import { connect } from "react-redux"

@connect((store) => {
    return {
    };
})
export default class Registration extends React.Component {
    render() {
        return (
            <div>
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
                        <input type="submit" value="Send"/>
                    </div>
                </form>
            </div>
        )
    }
}