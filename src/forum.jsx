import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import React from 'react';
import './site.scss';

export default class Forum extends React.Component {
    render() {
        return (
            <div id="forumWrapper" className="page container-fluid">
               <h1 className="px-3 pt-2">Forum</h1>
               <div className="card mx-2">
                   <div className="card-body">
                        <div className="">
                            <h3>Title</h3>
                            <h4>Username</h4>
                            <p>10.10.2010</p></div>
                        <p></p>
                   </div>

               </div>
            </div>
        );
    }
}