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

      <Col md={2} sm={12} className=" justify-content-center m-2">
      <a href="https://www.linkedin.com/in/corndesign" className="linkscard" target="_blank" rel="noopener noreferrer">
       <Card style={{ width: 'auto', margin: '0'}} className="profilecons" >
         <Card.Body>
         <p className="profilelinks"><i class="fa fa-linkedin-square" aria-hidden="true"></i></p>
         </Card.Body>
       </Card>
      </a>
      </Col>


        <Col md={2} sm={12} className=" justify-content-center m-2">
        <a href="https://www.facebook.com/ayo.ade.58323431" className="linkscard" target="_blank" rel="noopener noreferrer">
         <Card style={{ width: 'auto', margin: '0'}} className="profilecons" >
           <Card.Body>
           <p className="profilelinks"> <i class="fa fa-facebook-square " aria-hidden="true"></i></p>
           </Card.Body>
         </Card>
        </a>
        </Col>


        <Col md={2} sm={12} className=" justify-content-center m-2">
        <a href="https://www.instagram.com/okettope/" className="linkscard" target="_blank" rel="noopener noreferrer">
         <Card style={{ width: 'auto', margin: '0'}} className="profilecons" >
           <Card.Body>
           <p className="profilelinks"> <i class="fa fa-instagram" aria-hidden="true"></i></p>
           </Card.Body>
         </Card>
        </a>
        </Col>

        <Col md={2} sm={12} className=" justify-content-center m-2">
        <a href="https://vimeo.com/user106637901" className="linkscard" target="_blank" rel="noopener noreferrer">
         <Card style={{ width: 'auto', margin: '0'}} className="profilecons" >
           <Card.Body>
           <p className="profilelinks"> <i class="fa fa-vimeo-square " aria-hidden="true"></i></p>
           </Card.Body>
         </Card>
        </a>
        </Col>

        <Col md={2} sm={12} className=" justify-content-center m-2">
        <a href="https://wa.me/2348109363734?text=Hello%20Cornelius!%20I'm%20interested%20in%20%20your%20services" className="linkscard" target="_blank" rel="noopener noreferrer">
         <Card style={{ width: 'auto', margin: '0'}} className="profilecons" >
           <Card.Body>
           <p className="profilelinks"> <i class="fa fa-whatsapp " aria-hidden="true"></i></p>
           </Card.Body>
         </Card>
        </a>
        </Col>

        <Col md={2} sm={12} className=" justify-content-center m-2">
        <a href="https://twitter.com/Okettope" className="linkscard" target="_blank" rel="noopener noreferrer">
         <Card style={{ width: 'auto', margin: '0'}} className="profilecons" >
           <Card.Body>
           <p className="profilelinks"> <i class="fa fa-twitter-square " aria-hidden="true"></i></p>
           </Card.Body>
         </Card>
        </a>
        </Col>

        <Col md={2} sm={12} className=" justify-content-center m-2">
        <a href="https://github.com/okettope" className="linkscard" target="_blank" rel="noopener noreferrer">
         <Card style={{ width: 'auto', margin: '0'}} className="profilecons" >
           <Card.Body>
           <p className="profilelinks"> <i class="fa fa-github-square" aria-hidden="true"></i></p>
           </Card.Body>
         </Card>
        </a>
        </Col>

        <Col md={2} sm={12} className=" justify-content-center m-2">
        <a href="tel:+2348109363734" className="linkscard" target="_blank" rel="noopener noreferrer">
         <Card style={{ width: 'auto', margin: '0'}} className="profilecons" >
           <Card.Body>
            <p className="profilelinks"> <i class="fa fa-phone-square " aria-hidden="true"></i></p>
           </Card.Body>
         </Card>
        </a>
        </Col>

        <Col md={2} sm={12} className=" justify-content-center m-2">
        <a href="https://www.pinterest.com/oketonaayoade/" className="linkscard" target="_blank" rel="noopener noreferrer">
         <Card style={{ width: 'auto', margin: '0'}} className="profilecons" >
           <Card.Body>
           <p className="profilelinks"> <i class="fa fa-pinterest-square" aria-hidden="true"></i></p>
           </Card.Body>
         </Card>
        </a>
        </Col>

        <Col md={2} sm={12} className=" justify-content-center m-2">
        <a href="https://t.me/okettope" className="linkscard" target="_blank" rel="noopener noreferrer">
         <Card style={{ width: 'auto', margin: '0'}} className="profilecons" >
           <Card.Body>
           <p className="profilelinks"> <i class="fa fa-telegram" aria-hidden="true"></i></p>
           </Card.Body>
         </Card>
        </a>
        </Col>

        <Col md={2} sm={12} className=" justify-content-center m-2">
        <a href="https://stackoverflow.com/cv/corndesign" className="linkscard" target="_blank" rel="noopener noreferrer">
         <Card style={{ width: 'auto', margin: '0'}} className="profilecons" >
           <Card.Body>
           <p className="profilelinks"> <i class="fa fa-stack-overflow " aria-hidden="true"></i></p>  
           </Card.Body>
         </Card>
        </a>
        </Col>

        <Col md={2} sm={12} className=" justify-content-center m-2">
         <a href="mailto:oketonaayoade@gmail.com" className="linkscard" target="_blank" rel="noopener noreferrer">
          <Card style={{ width: 'auto', margin: '0'}} className="profilecons" >
            <Card.Body>
            <p className="profilelinks"> <i className="fa fa-envelope" aria-hidden="true"></i></p>
            </Card.Body>
          </Card>
         </a>
        </Col>
      </Row>

  </Container>
    )
}

export default HomeProfile
