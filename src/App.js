/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import routes from './routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
     <Router>
        <div>
        <Header />

        {this.showContentMenu(routes)}
        <Footer />.
      </div>

     </Router>
    );
  }

  showContentMenu=(routes)=>{
    var results = null;
    if(routes.length > 0){
      results =routes.map((routes, index)=>{
        return(
            <Route
              key ={index}
              path = {routes.path}
              exact ={routes.exact}
              component ={routes.main}
            />
          );

        
      });
    }
    return <Switch>{results}</Switch>
  }
}

export default App;
