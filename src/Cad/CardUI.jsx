import React from "react";
import  "./card-style.css";

const Card = props => {
    return (
        
        <div className="card text-center">
            <div className="overflow">
                <img className="card-img-top" src={props.imgsrc} alt="image 1" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, molestiae recusandae esse ad provident suscipit debitis numquam corporis sunt architecto.
                </p>
                <a href="#" className="btn btn-outline-success">Go Anywhere</a>  
                <a href="#" className="btn btn-outline-success">Go Anywhere</a>  
            </div>
        </div>
        
    )
}

export default Card