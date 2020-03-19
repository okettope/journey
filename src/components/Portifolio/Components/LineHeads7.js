import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

let Logo_Designs = 'Logos'




function LineHeads7() {
    return (
        <Container>
        <Row className="justify-content-center py-5">
        <Col md={4} sm={12}>
            <p  className="linehead">{Logo_Designs}</p>
        </Col>
    </Row>
        </Container>

    )
}

export default LineHeads7;
