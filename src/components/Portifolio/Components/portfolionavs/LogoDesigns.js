import React from 'react';

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Logo1 from '../../img/logo1.png';
import Logo2 from '../../img/logo2.png';
import Logo3 from '../../img/logo3.jpg';
import Logo4 from '../../img/logo4.jpg';

import LineHeads7 from '../LineHeads7';

import Badge from 'react-bootstrap/Badge';



function LogoDesigns() {
    return (
        <div>
             {/*LOGOS*/}

           <Container fluid={true}>     
           <LineHeads7/>           
              <Row className="justify-content-center py-5" >
                   <Col md={2} sm={8} className=" justify-content-center p-0 portfolio-col">
                      
                           <Card.Body>
                           <Badge variant="success">New</Badge><a href={Logo1}><Card.Img src={Logo1}/></a>
                           </Card.Body>
                       
                   </Col>
   
                   <Col md={2} sm={8} className=" justify-content-center p-0 portfolio-col">
                      
                           <Card.Body>
                           <a href={Logo2}><Card.Img src={Logo2}/></a><Badge variant="success">New</Badge>
                           </Card.Body>
                       
                   </Col>
   
                   <Col md={2} sm={8} className=" justify-content-center p-0 portfolio-col">
                      
                           <Card.Body>
                           <a href={Logo3}><Card.Img src={Logo3}/></a><Badge variant="success">New</Badge>
                           </Card.Body>
                       
                   </Col>
   
                   <Col md={2} sm={8} className=" justify-content-center p-0 portfolio-col">
                      
                           <Card.Body>
                           <a href={Logo4}><Card.Img src={Logo4}/></a><Badge variant="success">New</Badge>
                           </Card.Body>
                       
                   </Col>
                   
              </Row>
   
              </Container>
        </div>
    )
}

export default LogoDesigns
