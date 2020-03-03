import React from 'react'
import Container from 'react-bootstrap/Container'
import LineHeads from '../LineHeads2'
import Spinner from 'react-bootstrap/Spinner'

function AboutHome() {
    return (
        <Container>
            
            <LineHeads/>
            <div className="aboutCon">
            <p>I am a young innovative and creative designer</p>
            <details>
                <summary>Continue Reading <Spinner animation="grow" /></summary>
               <hr/> <p> I am a Web Developer(FullStack) -React Js, ReactBootstrap, Semantic UI React, PHP, Laravel, Python and Django.</p><hr/>
                <p>I do Graphics Design with Adobe Photoshop|Adobe Illustrator|Adobe Lightroom, UI/UX/Product Design -Adobe XD|Figma</p><hr/>
                <p><a href="/about">Check my About Page<Spinner animation="grow" /></a></p>
            </details>
                        
            </div>

        </Container>
    )
}

export default AboutHome
