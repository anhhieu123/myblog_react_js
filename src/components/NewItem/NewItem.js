import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewItem extends Component {
    
    render() {
        
        var {news} =this.props;
        return (
            <div>
                <div className="post-preview">
                    <Link to={`/post/${news.id}`}>
                        <h2 className="post-title">
                        {news.title}
                        </h2>
                        <h3 className="post-subtitle">
                        {news.qoute}
                        </h3>
                    </Link>
                    <p className="post-meta">Posted by
                        <a href="/"> Admin </a>
                        on April 06, 2020</p>
                    </div>
                    <hr />
            </div>
        );
    }
}

export default NewItem;
