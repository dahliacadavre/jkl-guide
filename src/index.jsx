import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch
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
                                <CSSTransition
                                timeout={600}
                                classNames="fade"
                                >
                                <LoginApp {...props} loggedInStatus={this.state.loggedInStatus} />
                                </CSSTransition>

                            )}
                        >   
                        </Route>
                        <Route 
                            path="/JKL-Guide"
                            render={props => (
                                <CSSTransition
                                timeout={600}
                                classNames="fade"
                                >
                                <Frontpage {...props} loggedInStatus={this.state.loggedInStatus} />
                                </CSSTransition>
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
