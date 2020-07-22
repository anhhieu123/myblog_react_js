import React from  'react';
import Home from './pages/HomePages/Home';
import NotFounds from './pages/NotFounds/NotFounds';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Post from './pages/Post/Post';
import NewPost from './pages/AddPost/AddPost';
import Login from './pages/Login/Login';

const  routes =[
    {
        path: "/",
        exact : true,
        main: ()=> <Home />
    },
    {
        path: "/about",
        exact : false,
        main: ()=> <About />
    },
    {
        path: "/contact",
        exact : false,
        main: ()=> <Contact />
    },
    {
        path: "/post/:id",
        exact : true,
        main: ({match})=> <Post match = {match}/>
    },
    {
        path: "/add",
        exact : true,
        main: ({history})=> <NewPost history ={history}/>
    },
    {
        path: "/login",
        exact : false,
        main: ()=> <Login />
    },
    {
        path: "",
        exact : false,
        main: ()=> <NotFounds />
    }
];

export default routes;