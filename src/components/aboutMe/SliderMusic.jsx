import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {iframesLinks} from "../../utils/const.jsx";
import Iframes from "./Iframes.jsx";
import '../../css/slider.css';


const SliderMusic = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

    }
    return (
        <div className={"w-full"}>
        <Slider {...settings}>
            <div><Iframes iframe={iframesLinks["sempiternal"]} /></div>
            <div><Iframes iframe={iframesLinks["meteora"]} /></div>
            <div><Iframes iframe={iframesLinks["spirit"]}/></div>
        </Slider>
            </div>
    );
};

export default SliderMusic;