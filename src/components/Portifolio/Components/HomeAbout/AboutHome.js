import React from 'react';
import Container from 'react-bootstrap/Container';
import LineHeads from '../LineHeads2';
import Spinner from 'react-bootstrap/Spinner';


function AboutHome() {
    return (
        <Container>
            
            <LineHeads/>
            <div className="aboutCon">
            <p>I am a young innovative and creative designer</p>
            <details>
                <summary>Continue Reading <Spinner animation="grow" /></summary>
               <hr/> <p> I am a Full Stack Developer and I use React Js, React-Bootstrap, Semantic UI React, Material UI React, Python/Django.</p><hr/>
                <p>I do Graphics Design with Adobe Photoshop|Adobe Illustrator|Adobe Lightroom.</p><hr/>
            </details>
                        
            </div>

        </Container>
    )
}

export default AboutHome
