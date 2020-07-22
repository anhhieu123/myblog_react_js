import React, { Component } from 'react';

class NewList extends Component {
    render() {
        return (
            <div>
                {/* Main Content */}
                <div className="container">
                    <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        {this.props.children}
                        {/* Pager */}
                        <div className="clearfix">
                        <a className="btn btn-primary float-right" href="/">Older Posts →</a>
                        </div>
                    </div>
                    </div>
                </div>
                <hr />
                </div>

        );
    }
}

export default NewList;