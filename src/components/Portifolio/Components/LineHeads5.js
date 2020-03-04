import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

let Progress = 'How Good Am I ?'




function LineHeads5() {
    return (
        <Container>
        <Row className="justify-content-center py-5">
        <Col md={4} sm={12}>
            <p  className="linehead">{Progress}</p>
        </Col>
    </Row>
        </Container>

    )
}

export default LineHeads5;
