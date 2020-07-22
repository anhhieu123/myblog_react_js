import React, { Component } from 'react';
import callApi from '../../utils/ApiCaller';

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state ={
            news : []
        }
        console.log(this.state.news);
    }

    componentDidMount(){
        var {match} = this.props;
        if(match){
            var id = match.params.id;
            callApi(`news/${id}`, 'GET', null).then(res =>{
                this.setState({
                    news :res.data
                });
            })
        }
    }
    


  render() {
    var {news } =this.state;
    return (
        
        <div>
            {/* Page Header */}
            <header className="masthead" style={{backgroundImage: 'url("img/post-bg.jpg")'}}>
            <div className="overlay" />
            <div className="container">
                <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                    <div className="post-heading">
                    <h2>{news.title}</h2>
                    <p className="subheading">{news.qoute}</p>
                    
                    </div>
                </div>
                </div>
            </div>
            </header>
            {/* Post Content */}
            <article>
            <div className="container">
                <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                    <p>{news.content}</p>
                    <p>Placeholder text by
                    <a href="http://spaceipsum.com/">Space Ipsum</a>. Photographs by
                    <a href="https://www.flickr.com/photos/nasacommons/">NASA on The Commons</a>.</p>
                </div>
                </div>
            </div>
            </article>
            <hr />
        </div>
      
    );
  }
}
