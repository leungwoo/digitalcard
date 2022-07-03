import React,{Component} from "react";
import Card from "./CardUI";
import img1 from "../Assets/masqueraders.jpeg";
import img2 from "../Assets/ocean.jpeg";
import img3 from "../Assets/Richard-06.jpg";

export default class Cards extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} title="Carnival"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2}  title="Caribbean"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3}  title="Fitness"/>
                    </div>

                </div>
            </div>
        );
    }
}


