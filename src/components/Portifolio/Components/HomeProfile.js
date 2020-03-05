import React from 'react';

import LineHeads3 from '../Components/LineHeads3';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


///POPOVER///
import Example1 from './HomePopovers/Popover1'
import Example2 from './HomePopovers/Popover2'
import Example3 from './HomePopovers/Popover3'
import Example4 from './HomePopovers/Popover4'
import Example5 from './HomePopovers/Popover5'
import Example6 from './HomePopovers/Popover6'
import Example7 from './HomePopovers/Popover7'
import Example8 from './HomePopovers/Popover8'
import Example9 from './HomePopovers/Popover9'
import Example10 from './HomePopovers/Popover10'
import Example11 from './HomePopovers/Popover11'
import Example12 from './HomePopovers/Popover12'


function HomeProfile() {
    return (

  <Container>
      <LineHeads3/>
      <Row className="justify-content-center p-4">

        <Col md={5} sm={12} className=" justify-content-center m-2" >
          <Card style={{ width: '18rem' }} className="profilecons">
            <Card.Body>
                <p className=""><i className="fa fa-linkedin-square profilelinks" aria-hidden="true"></i> LinkedIn      <Example1/> </p> 
                
            </Card.Body>
            
          </Card>
        </Col>

        <Col md={5} sm={12} className=" justify-content-center m-2" >
          <Card style={{ width: '18rem' }} className="profilecons">
            <Card.Body>
              <p className=""><i className="fa fa-facebook-square profilelinks" aria-hidden="true"></i> Facebook  <Example2/> </p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5} sm={12} className=" justify-content-center m-2" >
          <Card style={{ width: '18rem' }} className="profilecons">
            <Card.Body>
            <p className=""><i className="fa fa-instagram profilelinks" aria-hidden="true"></i> Instagram   <Example3/></p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5} sm={12} className=" justify-content-center m-2">
          <Card style={{ width: '18rem' }} className="profilecons">
            <Card.Body>
              <p className=""><i className="fa fa-vimeo-square profilelinks" aria-hidden="true"></i> Vimeo  <Example4/></p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5} sm={12} className=" justify-content-center m-2">
          <Card style={{ width: '18rem' }} className="profilecons">
            <Card.Body>
              <p className=""><i className="fa fa-whatsapp profilelinks" aria-hidden="true"></i> WhatsApp  <Example5/></p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5} sm={12} className=" justify-content-center m-2">
          <Card style={{ width: '18rem' }} className="profilecons">
            <Card.Body>
            <p className=""><i className="fa fa-twitter-square profilelinks" aria-hidden="false"></i> Twitter   <Example6/></p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5} sm={12} className=" justify-content-center m-2">
          <Card style={{ width: '18rem' }} className="profilecons">
            <Card.Body>
            <p className=""><i className="fa fa-github-square profilelinks" aria-hidden="true"></i> GitHub <Example7/></p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5} sm={12} className=" justify-content-around m-2">
          <Card style={{ width: '18rem' }} className="profilecons">
            <Card.Body>
            <p className=""><i className="fa fa-phone-square profilelinks" aria-hidden="true"></i> Phone  <Example8/></p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5} sm={12} className=" justify-content-center m-2">
          <Card style={{ width: '18rem' }} className="profilecons">
            <Card.Body>
            <p className=""><i class="fa fa-pinterest-square profilelinks" aria-hidden="true"></i> Pinterest   <Example9/></p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5} sm={12} className=" justify-content-center m-2">
          <Card style={{ width: '18rem' }} className="profilecons">
            <Card.Body>
            <p className=""><i className="fa fa-telegram profilelinks" aria-hidden="true"></i> Telegram  <Example10/></p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5} sm={12} className=" justify-content-center m-2">
          <Card style={{ width: '18rem' }} className="profilecons">
            <Card.Body>
            <p className=""><i class="fa fa-stack-overflow profilelinks" aria-hidden="true"></i> Stackoverflow   <Example11/></p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5} sm={12} className=" justify-content-center m-2">
          <Card style={{ width: '18rem' }} className="profilecons">
            <Card.Body>
            <p className=""> <i class="fa fa-bitbucket-square profilelinks" aria-hidden="true"></i> Bitbucket <Example12/></p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

  </Container>
    )
}

export default HomeProfile
