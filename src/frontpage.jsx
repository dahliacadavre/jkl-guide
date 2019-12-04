import React from 'react';
import {
    Switch,
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
import Footer from './component/footer';
import Nav from './component/nav';
import Fbcomponent from './component/fbcomponent';
import Addservice from './add-service';
import Faq from './faq';
import Forum from './forum';
import Favorites from './favorites';

class Frontpage extends React.Component {
    render() {
        return (      
            <div id="compContainer" className="p-0 col-lg-11 d-flex flex-column m-auto shadow shadow-lg" >
                <Nav />
                <Route render={({location}) => (
                    <TransitionGroup id="pageWrapper" className="container-fluid p-0" >
                        <CSSTransition
                            key={location.key}
                            timeout={300}
                            classNames="fade"
                        >
                            <Switch location={location}>
                                <Route exact path="/JKL-Guide">
                                    <Fbcomponent />
                                </Route>
                                <Route path="/JKL-Guide/Add-service">
                                    <Addservice />
                                </Route>
                                <Route path="/JKL-Guide/Faq">
                                    <Faq />
                                </Route>
                                <Route path="/JKL-Guide/Forum">
                                    <Forum />
                                </Route>
                                <Route path="/JKL-Guide/Favorites">
                                    <Favorites />
                                </Route>
                            </Switch>
                        </CSSTransition>
                </TransitionGroup>
                )} />
                <Footer />
            </div>  
        );
    }
};

export default Frontpage;
