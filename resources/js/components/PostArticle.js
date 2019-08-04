import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class PostArticle extends Component {

    constructor(props){
        super();
        this.state = {
            title: '',
            body: ''
        };
    }

    handleTitleChange(e){
        this.setState({
            title: e.target.value
        });
    }

    handleBodyChange(e){
        this.setState({
            body: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        axios.post('/api/blogs', this.state).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        }) 
    }

    render() {
        return (
            
            <div className="card">
                <div className="card-header">Post an article</div>
                <div className="card-body">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input value={this.state.title} onChange={this.handleTitleChange.bind(this)} placeholder="enter post title" type="text" className="form-control" name="title" id="title" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="body">Body</label>
                            <textarea value={this.state.body} onChange={this.handleBodyChange.bind(this)} placeholder="enter post body" name="body" id="body" className="form-control" rows="4"></textarea>
                        </div>
                        <button className="btn btn-default" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}
