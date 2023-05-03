import React from "react";
import ReplyButton from './reply-button';
import './App.css';




let e = React.createElement;

export default class Post extends React.Component {
    render() {
        return(
        <div className="card">
            <h3 className="card-header bg-primary text-white">log in</h3>
            <label className="card-header text-center" form="username">User Name</label>
            <input type="text" placeholder="Enter Password" name="password" required></input>

            <label className="card-header text-center" form="password">Password</label>
            <input type="text" placeholder="Enter Password" name="password"required ></input>

            <button className="card-footer bg-primary text-white" type="submit">Login</button>

        </div>

        );     
          
     }
}