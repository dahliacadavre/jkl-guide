import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import './site.scss';
import ForumSmall from './component/forumsmall';

export default class Forum extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        };
        this.renderDiscussions = this.renderDiscussions.bind(this);
    }

    renderDiscussions(){
        return(
            <div className="card">
                <div className="card-header d-flex justify-content-between">
                    <h4 className="pt-0 m-0" >Username</h4>
                    <h4 className="pt-0 m-0" >Title</h4>
                    <p className="pt-0  m-0" >10.10.2010</p>  
                </div> 
                <div className="card-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, natus quasi cupiditate reiciendis ipsam consequuntur! Dicta quae asperiores nemo voluptates modi ratione quia quibusdam, itaque corporis quasi, fugiat doloribus unde!</p>
                </div>
            </div>
        )
    }
    render() {
        return (
            <div id="forumWrapper" className="page d-flex justify-content-around flex-wrap">
               <div className="col-lg-8 pr-lg-0 pl-xl-5 pl-lg-3">
                   <div className="card h-100 shadow justify-content-start">
                        {this.renderDiscussions()}
                        {this.renderDiscussions()}
                        {this.renderDiscussions()}
                   </div>
               </div>
               <div className="col-lg-3 pl-lg-0 pr-xl-5 pr-lg-3">
                    <ForumSmall />
               </div>
            </div>
        );
    }
}