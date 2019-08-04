import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Blog extends Component {

    constructor(){
        super();
        this.state = {
            blogs: []
        };
    }

    componentWillMount(){
        axios.get('/api/blogs').then(response => {
            this.setState({
                blogs: response.data
            });
        }).catch(errors => {
            console.log(errors);
        });
    }

    render() {
        return (            
            
            <div className="card">
                <div className="card-header">Blog</div>
                <div className="card-body">
                    <ul>
                        {this.state.blogs.map(blog => 
                            <li>
                                <Link to={"/blog/" + blog.id}>{blog.title}</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}
