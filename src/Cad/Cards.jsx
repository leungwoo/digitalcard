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
                        <Card link2="https://www.ray-ban.com/ShopCartDisplayView?catalogId=22552&langId=-1&storeId=10151" link="https://www.ray-ban.com/SearchDisplay?catalogId=22552&langId=-1&storeId=10151&pageSize=24&clientSide=true&searchType=1000&resultCatEntryType=&viewMode=Rayban&showResultsPage=true&beginIndex=0&sType=SimpleSearch&newpage=true&searchTerm=erika" imgsrc={img1} title="Erika" details="Discover the complete collection of Erika style sunglasses available online. This retro style features a rubber front, metal temples and matching temple tips for a sleek and sophisticated vintage style that will complement any look. Among our most popular sunglasses for men, Erika features an oversized round shape with a soft bridge and comes in a range of classic as well as vibrant color combinations. Choose from a selection of classic or gradient lenses, or add a premium touch with Polarized sunglasses for better clarity and contrast in the sun."/>
                    </div>
                    <div className="col-md-4">
                        <Card link2="https://www.ray-ban.com/ShopCartDisplayView?catalogId=22552&langId=-1&storeId=10151" link="https://www.ray-ban.com/usa/sunglasses/RB3447%20MALE%20round%20metal%20classic-shiny%20gold/8056597365093" imgsrc={img2}  title="Round Lens" details="They say the best things come in small packages, and these shades are no exception. The 'mini-me' version of the Round classic brings premium metal construction and the iconic Ray-Ban look to kids everywhere. Pick up a pair with classic dark green lenses or choose from an array of gradient options."/>
                    </div>
                    <div className="col-md-4">
                        <Card link2="https://www.ray-ban.com/ShopCartDisplayView?catalogId=22552&langId=-1&storeId=10151" link="https://www.ray-ban.com/usa/sunglasses/0RB2140-ORIGINAL%20WAYFARER%20CLASSIC-Black/805289126577" imgsrc={img3}  title="Wayfarer" details="Ray-Ban Original Wayfarer Classics are the most recognizable style in the history of sunglasses. Since its initial design in 1952, Wayfarer Classics gained popularity among celebrities, musicians, artists and those with an impeccable fashion sense.

                                    As an iconic style of sunglasses, Original Wayfarer Classics always make a statement. "/>
                    </div>

                </div>
            </div>
        );
    }
}


