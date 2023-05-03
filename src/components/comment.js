import React from "react";
import LikeButton from './reply-button'



let e = React.createElement;

export default class Comment extends React.Component {
    render() {
     

        return(
            <div className="card w-75">
                <div className="card-header bg-success text-white">
                    Username and Time
                </div>
                <div className="card-body">
                    Comment content
                </div>
                <div className="card-footer">
                  
                </div>
            </div>
    );
      
    }
}
