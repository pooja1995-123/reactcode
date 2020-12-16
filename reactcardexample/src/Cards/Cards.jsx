import React from "react";
import Card from "./CardUI";
import img1 from "../assets/pic1.jpeg";
import img2 from "../assets/pic2.jpg";
import img3 from "../assets/pic3.jpg";
class Cards extends React.Component
{
    
    render()
    {
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} title="Chess" para="Chess is a two-player strategy board game played on a checkered board with 64 squares arranged in an 8×8 square grid. Played by millions of people worldwide, chess is believed to be derived from the Indian game chaturanga sometime before the 7th century."/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2} title="Hockey" para="Hockey is a sport in which two teams play against each other by trying to manoeuvre a ball or a puck into the opponent's goal using a hockey stick. There are many types of hockey such as bandy, field hockey, ice hockey and rink hockey."/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3} title="Cricket" para="Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 22-yard pitch with a wicket at each end, each comprising two bails balanced on three stumps."/>
                    </div>

                </div>
            </div>
        )
    }
}

export default Cards;