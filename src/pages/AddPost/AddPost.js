import React, { Component } from 'react';
import callApi from '../../utils/ApiCaller';

export default class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state =({
            id:'',
            txtTitle: '',
            txtQoute: '',
            txtContent: ''
        })
    }

    onChange =(e)=>{
        var target = e.target;
        var name = target.name;
        var value = target.type ==='checkbox'? target.checked : target.value;

        this.setState({
            [name]: value
        })
    }

    onSave =(e)=>{
        var {txtContent,txtQoute,txtTitle} = this.state;
        var {history} =this.props;
        e.preventDefault() ;
        callApi('news','POST',{
            title:txtTitle,
            qoute:txtQoute,
            content:txtContent
        }).then(res=>{
            history.goBack();
            //history.push("/");
        })
       
    }
    
  render() {
    var {txtContent,txtQoute,txtTitle} = this.state;
    return (
        <div>
            {/* Page Header */}
            <header className="masthead" style={{backgroundImage: 'url("img/post-bg.jpg")'}}>
            <div className="overlay" />
            <div className="container">
                <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                    <div className="page-heading">
                    <h1>Add Post</h1>
                    <span className="subheading"> More interesting and interesting articles.</span>
                    </div>
                </div>
                </div>
            </div>
            </header>
            {/* Main Content */}
            <div className="container">
                <form onSubmit = {this.onSave}>
                    <div className="form-group">
                        <label >Title</label>
                        <input type="text" 
                            className="form-control"
                            name ='txtTitle' 
                            placeholder="Enter title"
                            value = {txtTitle}
                            onChange ={this.onChange}
                          />
                    </div>
                    <div className="form-group">
                        <label >Qoute</label>
                        <input type="text" 
                            className="form-control" 
                            name ='txtQoute' 
                            placeholder="Enter Qoute" 
                            value = {txtQoute}
                            onChange ={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label >Content</label>
                        <textarea  
                            className="form-control" 
                            name ='txtContent' rows="3" 
                            placeholder="Enter Content" 
                            value = {txtContent}
                            onChange ={this.onChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
            <hr />
        </div>
    );
  }
}
