import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slider_1 from '../../../img/slider_1.jpg';
import slider_2 from '../../../img/slider_2.jpg';
import slider_3 from '../../../img/slider_3.jpg';


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./main.css";

// import required modules
import { Pagination } from "swiper";

export default function App() {
    return (
        <>
        <Swiper
            spaceBetween={30}
            pagination={{
            clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>{slider_1}</SwiperSlide>
            <SwiperSlide>{slider_2}</SwiperSlide>
            <SwiperSlide>{slider_3}</SwiperSlide>
        </Swiper>
        </>
    );
}
