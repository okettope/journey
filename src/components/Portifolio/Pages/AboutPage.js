import React from 'react';
import HeroAbout from '../Components/HeroAbout';
import AboutContent from '../Components/AboutContent';
// import Container from 'react-bootstrap/Container';



function AboutPage(props) {
    return (
        <div>
            <HeroAbout title={props.title}/>

            <AboutContent>
                <p className="aboutConA">Hello, my name is Cornelius and I am Twenty. I'm a full stack engineer with experience in JavaScript, React JS, Node JS, PHP, Laravel, Python and Django. I also do Graphics Design and Product Branding.<br/><br/>
                I've been learning web development languages, tools and technologies for more than one year and have working experience of less than one year. <br/><br/>
                I've learnt Graphics Designing for more than Six years and have working experience of not less than Four years. <br/><br/>
                My dream is to become a competent Software Engineer before the next three years, to start touching the world with my love for innovation, development and technology, making the world a better place to be. (Currently working on some ideas/projects).<br/><br/>
                I am constantly learning new things. Things like Mixed Reality (Aurgumented Reality and Virtual Reality), Artificial Intelligence, Concept of Quantum Computing, Django and React Js. <br/><br/>
                My latest project, <b>Food n Blog</b>, is a Food/Health Blog/Platform. You can check it out <a rel="noopener noreferrer" target="_blank" href="http://www.google.com">here</a>, or on my <a href="/projects">Project Page</a>. It is built Node JS, React JS, Django and a little of PHP.<br/><br/>
                When I am not learning something new, then I am building on what I've known already or creating some Youtube Tutorials for Graphics Designing. You can find those <a  rel="noopener noreferrer" target="_blank" href="http://www.google.com">here</a>.
                </p>
            </AboutContent>
        </div>
    )
}


export default AboutPage;