import React from "react";
import Swiper from "../../vendors/swiper-min";

export class MySwiper extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
        
        var mySwiperReact = new Swiper('.swiper-container', {
            speed: 400,
            spaceBetween: 100
        }); 
        console.log('mySwiperReact', mySwiperReact);
    }
    render() {
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">Slide 1</div>
                    <div className="swiper-slide">Slide 2</div>
                    <div className="swiper-slide">Slide 3</div>
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-scrollbar"></div>
            </div>
        );
    }
}