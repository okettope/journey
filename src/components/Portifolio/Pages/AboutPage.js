import React from 'react';
import HeroAbout from '../Components/HeroAbout';
import AboutContent from '../Components/AboutContent';
import MyProgress from '../Components/MyProgress';
import { BrowserRouter as Router,Route, Link } from "react-router-dom";



function AboutPage(props) {
    return (
        <div>
            <HeroAbout title={props.title}/>

            <AboutContent>
                <p className="aboutConA">Hello, my name is Cornelius. I'm a full stack developer with experience in JavaScript, React JS, Node JS, Python and Django. I also do Graphics and Product Designing<br/><br/>
                I've been learning web development languages, tools and technologies for more than one year. <br/><br/>
                I've learnt Graphics Designing for more than Six years and have working experience of not less than Four years. <br/><br/>
                My dream is to become a competent Full Stack Engineer before the next three years, to start touching the world with my love for innovation, development and technology, making the internet a better place to be.<br/><br/>
                I am constantly learning new things. Things like Mixed Reality (Aurgumented Reality and Virtual Reality), Artificial Intelligence, Concept of Quantum Computing, Django and React Js. <br/><br/>
                My latest project, <b>Food n Blog</b>, is a Food/Health Blog/Platform. You can check it out <a rel="noopener noreferrer" target="_blank" href="http://www.google.com">here</a>, or on my <Link to="/projects">Project Page</Link>. It is being built with React JS and Django.<br/><br/>
                When I am not learning something new, then I am building on what I've known already or creating some Youtube Tutorials for Graphics Designing. You can find those <a  rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/channel/UCM1vsCzdEjSk8KrsOlSPLpQ/videos?view_as=subscriber">here</a>.
                </p>
            </AboutContent>

            <MyProgress/>

        </div>
    )
}


export default AboutPage;