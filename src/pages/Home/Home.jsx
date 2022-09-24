import React from 'react'
import {
    Swiper,
    SwiperSlide
} from 'swiper/react'
import SwiperCore, {
    EffectFade,
    Mousewheel,
    Pagination
} from 'swiper'
import './Home.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel"
import 'swiper/css/effect-fade'
import Hero from './sections/Hero/Hero';
import Agents from './sections/Agents/Agents';
import Maps from './sections/Maps/Maps';
import Guns from './sections/Guns/Guns';
import Contact from './sections/Contact/Contact';
import { useEffect } from 'react';


SwiperCore.use([Mousewheel, Pagination, EffectFade])

const swiperOptions = {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    pagination: true,
    effect: 'fade',
    speed: 500
}

const Home = () => {

    useEffect(()=>{
        document.title= "Valorant | Home"
    },[])
  return (
    <>
     <Swiper
        {...swiperOptions}
     >
        <SwiperSlide>
            <Hero/>
        </SwiperSlide>

        <SwiperSlide>
            <Agents/>
        </SwiperSlide>

        <SwiperSlide>
            <Maps/>
        </SwiperSlide>
        
        <SwiperSlide>
            <Guns/>
        </SwiperSlide>

        <SwiperSlide>
            <Contact/>
        </SwiperSlide>

     </Swiper>
    </>
  )
}

export default Home
