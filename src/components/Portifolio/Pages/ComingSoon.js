import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function ComingSoon() {
    return (
        <Jumbotron fluid>
            <Container>
                <h1>Coming Soon!</h1>
                <p>
                    This page is under development, please check back later.
                </p>
            </Container>
        </Jumbotron>
    )
}

export default ComingSoon
