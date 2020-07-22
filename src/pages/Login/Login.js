import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
        <div>
        {/* Page Header */}
        <header className="masthead" style={{backgroundImage: 'url("img/login.jpg")'}}>
        <div className="overlay" />
        <div className="container">
            <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
                <div className="page-heading">
                <h1>Login/Sign in</h1>
                <span className="subheading">Have questions? I have answers.</span>
                </div>
            </div>
            </div>
        </div>
        </header>
        {/* Main Content */}
        <div className="container">
        <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Remember</label>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>

            </div>
        </div>
        </div>
        <hr />
    </div>
    );
  }
}
