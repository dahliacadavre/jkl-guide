import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as Router,
    Route,
} from "react-router-dom";
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import './site.scss';
import LoginApp from './login';
import Frontpage from './frontpage';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            loggedInStatus: "NOT_LOGGED_IN",
            user: {}
        }
    }
    render() {
        return (
            <div id="componentWrapper">
                <Route  
                    path="/"
                    render={props => (
                        <LoginApp {...props} loggedInStatus={this.state.loggedInStatus} />
                    )}
                >   
                </Route>
                <Route 
                    path="/JKL-Guide"
                    render={props => (
                        <Frontpage {...props} loggedInStatus={this.state.loggedInStatus} />
                    )}
                >
                </Route>
            </div>    
        );
    }
};

ReactDOM.render(
    <Router>
        <App />
    </Router>
    
   ,document.getElementById('app')
);
