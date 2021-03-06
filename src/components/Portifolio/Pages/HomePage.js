import React from 'react';
import HeroHome from '../Components/HeroHome';
import Carousel from '../Components/Carousel';
import AboutHome from '../Components/HomeAbout/AboutHome';
import HomeProfile from '../Components/HomeProfile'
import HomeTimeline from '../Components/HomeTimeline';


function HomePage(props) {
    return (
        <div>
            <HeroHome title={props.title}  subTitle={props.subTitle}  text={props.text}/>
            <AboutHome/>
            <Carousel/>
            <HomeProfile/>
            <HomeTimeline/>
        </div>
    )
}


export default HomePage;