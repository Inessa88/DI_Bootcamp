import React from "react";
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComponent() {
    return (
        <div className ="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src="../1.jpg"/>
                    <button className="city">Hong Kong</button>
                </div>
                <div>
                    <img src="../2.webp"/>
                    <button className="city">Macao</button>
                </div>
                <div>
                    <img src="../3.webp"/>
                    <button className="city">Japan</button>
                </div>
                <div>
                    <img src="../4.webp"/>
                    <button className="city">Las Vegas</button>
                </div>
            </Carousel>
            
        </div>
    );
}