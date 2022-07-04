import React from "react";
import  "./card-style.css";

const Card = (props)=> {
    return (
        <div className="card text-center shadow">
            <div className="overflow">
                <img className="card-img-top" src={props.imgsrc} alt="shades" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                    {props.details}
                </p>
                <a href={props.link} target="_blank" className="btn btn-outline-success">Learn more</a>  
                <a href={props.link2} target="_blank" className="btn btn-outline-success">Order Now</a>  
            </div>
        </div>
        )

}

export default Card