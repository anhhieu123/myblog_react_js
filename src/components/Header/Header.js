import React, { Component } from 'react';
import { Route,Link } from 'react-router-dom';
const menus = [
    {   name : 'Home',
        to : '/',
        exact : true
    },
    {   name : 'About',
        to : '/about',
        exact : false
    },
    
    {   name : 'ADD Post',
        to : '/add',
        exact : false
    },

    {   name : 'Contact',
        to : '/contact',
        exact : false
    },
    {   name : 'Login',
        to : '/login',
        exact : false
    }

]

const MenuLink = ({lable, to , exact}) =>{

    return(
        <Route
            path ={to}
            exact = {exact}
            children ={(match) =>{
                var  active =match? 'nav-item' : '';
                return(
                    <li className={active}>
                        <Link className="nav-link" to ={to}>{lable}</Link>
                    </li>
                );

            }
            }
        />
    );
    

}

class Header extends Component {
    render() {
        return (          
            <div>
                {/* Navigation */}
                <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand" href="/">NEW 24h</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        {this.showMenu(menus)}
                    </ul>
                    </div>
                </div>
                </nav>
                
          </div>
          
        );
    }

    showMenu =(menus)=>{
        var result =null;

        if(menus.length >0){
            result = menus.map((menu,index)=>{
                return(
                    <MenuLink 
                        key={index}
                        lable={menu.name}
                        to ={menu.to}
                        exact={menu.exact}
                    />
                );
            });
        }

        return result;
    }
}

export default Header;

