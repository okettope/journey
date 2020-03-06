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

      <Col md={3} sm={12} className=" justify-content-center m-2">
      <a href="https://www.linkedin.com/in/corndesign" className="linkscard" target="_blank" rel="noopener noreferrer">
       <Card style={{ width: '14rem' }} className="profilecons" >
         <Card.Body>
         <p> <i class="fa fa-linkedin-square profilelinks" aria-hidden="true"></i> LinkedIn</p>
         </Card.Body>
       </Card>
      </a>
      </Col>


        <Col md={3} sm={12} className=" justify-content-center m-2">
        <a href="https://www.facebook.com/ayo.ade.58323431" className="linkscard" target="_blank" rel="noopener noreferrer">
         <Card style={{ width: '14rem' }} className="profilecons" >
           <Card.Body>
           <p> <i class="fa fa-facebook-square profilelinks" aria-hidden="true"></i> Facebook</p>
           </Card.Body>
         </Card>
        </a>
        </Col>


        <Col md={3} sm={12} className=" justify-content-center m-2">
        <a href="https://www.instagram.com/okettope/" className="linkscard" target="_blank" rel="noopener noreferrer">
         <Card style={{ width: '14rem' }} className="profilecons" >
           <Card.Body>
           <p> <i class="fa fa-instagram profilelinks" aria-hidden="true"></i> Insatgram</p>
           </Card.Body>
         </Card>
        </a>
        </Col>

        <Col md={3} sm={12} className=" justify-content-center m-2">
        <a href="https://vimeo.com/user106637901" className="linkscard" target="_blank" rel="noopener noreferrer">
         <Card style={{ width: '14rem' }} className="profilecons" >
           <Card.Body>
           <p> <i class="fa fa-vimeo-square profilelinks" aria-hidden="true"></i> Vimeo</p>
           </Card.Body>
         </Card>
        </a>
        </Col>

        <Col md={3} sm={12} className=" justify-content-center m-2">
        <a href="https://wa.me/2348109363734?text=Hello%20Cornelius!%20I'm%20interested%20in%20%20your%20services" className="linkscard" target="_blank" rel="noopener noreferrer">
         <Card style={{ width: '14rem' }} className="profilecons" >
           <Card.Body>
           <p> <i class="fa fa-whatsapp profilelinks" aria-hidden="true"></i> WhatsApp</p>
           </Card.Body>
         </Card>
        </a>
        </Col>

        <Col md={3} sm={12} className=" justify-content-center m-2">
        <a href="https://twitter.com/Okettope" className="linkscard" target="_blank" rel="noopener noreferrer">
         <Card style={{ width: '14rem' }} className="profilecons" >
           <Card.Body>
           <p> <i class="fa fa-twitter-square profilelinks" aria-hidden="true"></i> Twitter</p>
           </Card.Body>
         </Card>
        </a>
        </Col>

        <Col md={3} sm={12} className=" justify-content-center m-2">
        <a href="https://github.com/okettope" className="linkscard" target="_blank" rel="noopener noreferrer">
         <Card style={{ width: '14rem' }} className="profilecons" >
           <Card.Body>
           <p> <i class="fa fa-github-square profilelinks" aria-hidden="true"></i> GitHub </p>
           </Card.Body>
         </Card>
        </a>
        </Col>

        <Col md={3} sm={12} className=" justify-content-center m-2">
        <a href="tel:+2348109363734" className="linkscard" target="_blank" rel="noopener noreferrer">
         <Card style={{ width: '14rem' }} className="profilecons" >
           <Card.Body>
            <p> <i class="fa fa-phone-square profilelinks" aria-hidden="true"></i> Phone </p>
           </Card.Body>
         </Card>
        </a>
        </Col>

        <Col md={3} sm={12} className=" justify-content-center m-2">
        <a href="https://www.pinterest.com/oketonaayoade/" className="linkscard" target="_blank" rel="noopener noreferrer">
         <Card style={{ width: '14rem' }} className="profilecons" >
           <Card.Body>
           <p> <i class="fa fa-pinterest-square profilelinks" aria-hidden="true"></i> Pinterest </p>
           </Card.Body>
         </Card>
        </a>
        </Col>

        <Col md={3} sm={12} className=" justify-content-center m-2">
        <a href="https://t.me/okettope" className="linkscard" target="_blank" rel="noopener noreferrer">
         <Card style={{ width: '14rem' }} className="profilecons" >
           <Card.Body>
           <p> <i class="fa fa-telegram profilelinks" aria-hidden="true"></i> Telegram </p>
           </Card.Body>
         </Card>
        </a>
        </Col>

        <Col md={3} sm={12} className=" justify-content-center m-2">
        <a href="https://stackoverflow.com/cv/corndesign" className="linkscard" target="_blank" rel="noopener noreferrer">
         <Card style={{ width: '14rem' }} className="profilecons" >
           <Card.Body>
           <p> <i class="fa fa-stack-overflow profilelinks" aria-hidden="true"></i> StackOverflow </p>  
           </Card.Body>
         </Card>
        </a>
        </Col>

        <Col md={3} sm={12} className=" justify-content-center m-2">
         <a href="mailto:oketonaayoade@gmail.com" className="linkscard" target="_blank" rel="noopener noreferrer">
          <Card style={{ width: '14rem' }} className="profilecons" >
            <Card.Body>
            <p> <i className="fa fa-envelope profilelinks" aria-hidden="true"></i> Email </p>
            </Card.Body>
          </Card>
         </a>
        </Col>
      </Row>

  </Container>
    )
}

export default HomeProfile
