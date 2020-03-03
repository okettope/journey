import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

let Timeline = 'My Timeline'




function LineHeads4() {
    return (
        <Container>
        <Row className="justify-content-center py-5">
        <Col md={4} sm={12}>
            <p  className="linehead">{Timeline}</p>
        </Col>
    </Row>
        </Container>

    )
}

export default LineHeads4;
