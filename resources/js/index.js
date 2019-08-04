import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Blog from './components/Blog';
import Example from './components/Example';
import BlogArticle from './components/BlogArticle';
import PostArticle from './components/PostArticle';

export default class Index extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <Router>
                            <div>
                                <Link to="/">Home</Link>
                                <Link to="/blog">Blog</Link>
                                <Link to="/blog/post-article">Post Article</Link>

                                <Route path="/" exact component={Example} />
                                <Route path="/blog" exact component={Blog} />
                                <Route path="/blog/:id" exact render={props => <BlogArticle {...props} />} />
                                <Route path="/blog/post-article" exact component={PostArticle} />
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Index />, document.getElementById('example'));
}
