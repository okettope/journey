import React from 'react';
// import Jumbotron from 'react-bootstrap/Jumbotron';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import Slide1 from '../img/slide1.jpg'
import Slide2 from '../img/slide2.jpg'
import Slide3 from '../img/slide3.jpg'
import Slide4 from '../img/slide4.png'
import CarouselCaption from 'react-bootstrap/CarouselCaption';


function HeroHome(props) {
    return (
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Slide1}
      alt="First slide"
    />
    <Carousel.Caption>
      <div className="slidertitle">
      <h1><strong>Welcome to my Portfolio</strong></h1>
      <p className="ayoade">Ayoade Oketona</p>
      <Button variant="light" href="https://drive.google.com/open?id=10_ExFD9gJHWkHJTfxGM3pNGmcLu7tVK4" target="_blank">Download CV</Button>

      </div>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Slide2}
      alt="Second slide"
    />
    
    <Carousel.Caption>
        <div className="slidertitle">
          <h1><strong>"Design is not for philosophy, it is for life"</strong></h1>
          <p className="ayoade">Graphics Designing</p>
        </div>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Slide3}
      alt="Third slide"
    />

    <Carousel.Caption>
        <div className="slidertitle">
          <h1><strong>"The web is the place you showcase your dreams"</strong></h1>
          <p className="ayoade">Web Development</p>
        </div>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Slide4}
      alt="forth slide"
    />

    <Carousel.Caption>
        <div className="slidertitle">
          <p className="ayoade">I am a Front End Developer</p>
        </div>
    </Carousel.Caption>
  </Carousel.Item>


</Carousel>
    )
}

export default HeroHome
