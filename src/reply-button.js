import React from 'react';
import './App.css'



export default class LikeButton extends React.Component {
    render(){
        return <div className="topnav">
            <a className="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
         
              
          </div>;
          
    }
}