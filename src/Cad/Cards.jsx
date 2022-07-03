import React,{Component} from "react";
import Card from "./CardUI";
import img1 from "../Assets/BrownErika.jpg";
import img2 from "../Assets/rayban-seethrough-lens.jpeg";
import img3 from "../Assets/wayfarer-.jpeg";

export default class Cards extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} title="Erika"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2}  title="Round Lens"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3}  title="Wayfarer"/>
                    </div>

                </div>
            </div>
        );
    }
}


