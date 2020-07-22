import React, { Component } from 'react';
import NewList from '../../components/NewList/NewList';
import NewItem from '../../components/NewItem/NewItem';
import {connect } from 'react-redux';
import callApi from './../../utils/ApiCaller'
import {actFechNews} from './../../actions/index'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state ={
            news : []
        }
        console.log(this.state.news);
    }
    
    componentDidMount(){
        callApi('news','GET', null).then(res =>{    
            
            // this.setState({
            //     news :res.data
            // });
            this.props.fetchAllNews(res.data);
        });
        
    }
    
    render() {
        // var {news } =this.state;
        var {news } =this.props;
        
        return (
            <div>
               {/* Page Header */}
                <header className="masthead" style={{backgroundImage: 'url("img/home-bg.jpg")'}}>
                <div className="overlay" />
                <div className="container">
                    <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <div className="site-heading">
                        <h1>My Blog</h1>
                        <span className="subheading">A Blog by Start Nguyen Hieu</span>
                        </div>
                    </div>
                    </div>
                </div>
                </header>
                <NewList>
                    {this.showNew(news)}
                </NewList>
              
            </div>
        );
    }
    showNew(news){
        
        var result = null;
            if(news.length >0){
                result =news.map((news,index)=>{
                    return(
                        <NewItem
                        key ={index}
                        news = {news}
    
                        />               
                    )
                })
            }
        
        
        return result;
    }
}

const mapStateToProps = state =>{
    return {
        news :state.news
    }
}
const mapDispatchToProps =( dispatch, props) =>{
    return {
        fetchAllNews :(news)=>{
            dispatch(actFechNews(news));
        }
    }
}


export default connect(mapStateToProps ,mapDispatchToProps)(Home);