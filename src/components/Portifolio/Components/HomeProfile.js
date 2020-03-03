import React from 'react';

import LineHeads3 from '../Components/LineHeads3';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



function HomeProfile() {
    return (

  <Container>
      <LineHeads3/>
      <Row className="justify-content-center p-4">

        <Col md={5} sm={12} className=" justify-content-center m-2" >
          <Card>
            <Card.Body>
                This is some text within a card body.
                </Card.Body>
          </Card>
        </Col>

        <Col md={5} sm={12} className=" justify-content-center m-2" >
          <Card>
            <Card.Body>This is some text within a card body.</Card.Body>
          </Card>
        </Col>

        <Col md={5} sm={12} className=" justify-content-center m-2" >
          <Card>
            <Card.Body>This is some text within a card body.</Card.Body>
          </Card>
        </Col>

        <Col md={5} sm={12} className=" justify-content-center m-2">
          <Card>
            <Card.Body>This is some text within a card body.</Card.Body>
          </Card>
        </Col>

        <Col md={5} sm={12} className=" justify-content-center m-2">
          <Card>
            <Card.Body>This is some text within a card body.</Card.Body>
          </Card>
        </Col>

        <Col md={5} sm={12} className=" justify-content-center m-2">
          <Card>
            <Card.Body>This is some text within a card body.</Card.Body>
          </Card>
        </Col>
      </Row>

  </Container>
    )
}

export default HomeProfile
