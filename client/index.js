// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/app';
//
// ReactDOM.render(<App />, document.getElementById('app'));

import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, hashHistory } from "react-router"
import { syncHistoryWithStore } from "react-router-redux"

import { Provider } from "react-redux"

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Layout from "./pages/Layout.jsx";
import Registration from "./pages/Registration.jsx";

import store from "./store"

const app = document.getElementById('app');

const history = syncHistoryWithStore(hashHistory, store);
console.log(history);
ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={Layout}>
                <IndexRoute component={Home}/>
                <Route path='login' component={Login}/>
                <Route path='registration' component={Registration} />
            </Route>
        </Router>
    </Provider>,
    app);