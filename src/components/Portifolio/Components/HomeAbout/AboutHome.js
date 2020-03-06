import React from 'react';
import Container from 'react-bootstrap/Container';
import LineHeads from '../LineHeads2';
import Spinner from 'react-bootstrap/Spinner';
import { BrowserRouter as Router,Route, Link } from "react-router-dom";


function AboutHome() {
    return (
        <Container>
            
            <LineHeads/>
            <div className="aboutCon">
            <p>I am a young innovative and creative designer</p>
            <details>
                <summary>Continue Reading <Spinner animation="grow" /></summary>
               <hr/> <p> I am a Full Stack Developer and I use React Js, React-Bootstrap, Semantic UI React, Material UI React, Python/Django.</p><hr/>
                <p>I do Graphics Design with Adobe Photoshop|Adobe Illustrator|Adobe Lightroom, UI/UX/Product Design with Adobe XD|Figma.</p><hr/>
                <p><Link to="/about">Check my About Page<Spinner animation="grow" /></Link></p>
            </details>
                        
            </div>

        </Container>
    )
}

export default AboutHome
