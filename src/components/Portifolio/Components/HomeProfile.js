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
                <p className=""><i className="fa fa-linkedin-square profilelinks" aria-hidden="true"></i> LinkedIn</p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5} sm={12} className=" justify-content-center m-2" >
          <Card>
            <Card.Body>
              <p className=""><i className="fa fa-facebook-square profilelinks" aria-hidden="true"></i> Facebook</p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5} sm={12} className=" justify-content-center m-2" >
          <Card>
            <Card.Body>
            <p className=""><i className="fa fa-instagram profilelinks" aria-hidden="true"></i> Instagram</p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5} sm={12} className=" justify-content-center m-2">
          <Card>
            <Card.Body>
              <p className=""><i className="fa fa-vimeo-square profilelinks" aria-hidden="true"></i> Vimeo</p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5} sm={12} className=" justify-content-center m-2">
          <Card>
            <Card.Body>
              <p className=""><i className="fa fa-whatsapp profilelinks" aria-hidden="true"></i> WhatsApp</p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5} sm={12} className=" justify-content-center m-2">
          <Card>
            <Card.Body>
            <p className=""><i className="fa fa-twitter-square profilelinks" aria-hidden="false"></i> Twitter</p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5} sm={12} className=" justify-content-center m-2">
          <Card>
            <Card.Body>
            <p className=""><i className="fa fa-github-square profilelinks" aria-hidden="true"></i> GitHub</p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5} sm={12} className=" justify-content-center m-2">
          <Card>
            <Card.Body>
            <p className=""><i className="fa fa-phone-square profilelinks" aria-hidden="true"></i> Phone</p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5} sm={12} className=" justify-content-center m-2">
          <Card>
            <Card.Body>
            <p className=""><i class="fa fa-pinterest-square profilelinks" aria-hidden="true"></i> Pinterest</p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5} sm={12} className=" justify-content-center m-2">
          <Card>
            <Card.Body>
            <p className=""><i className="fa fa-telegram profilelinks" aria-hidden="true"></i> Telegram</p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5} sm={12} className=" justify-content-center m-2">
          <Card>
            <Card.Body>
            <p className=""><i class="fa fa-stack-overflow profilelinks" aria-hidden="true"></i> Stackoverflow</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

  </Container>
    )
}

export default HomeProfile
