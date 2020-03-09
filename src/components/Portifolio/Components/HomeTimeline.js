import React from 'react';
import LineHeads4 from'../Components/LineHeads4';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function HomeTimeline() {
    return (
        <Container>
            <LineHeads4/>

            <Row className="justify-content-center p-4">
            
              <Col md={3} sm={12} className="justify-content-center m-3">
                <Card bg="light" style={{ width: '18rem' }}>
                  <Card.Header>2010-2016</Card.Header>
                    <Card.Body>

                      <Card.Title>Student</Card.Title>

                      <Card.Text>
                        Perfect Digital Music and Film Industry, Oyo State, Nigeria
                      </Card.Text>

                      <Card.Text>
                    <b>Learnt Graphics Designing</b>
                      </Card.Text>
                  
                      </Card.Body>
                </Card>
              </Col>

              <Col md={3} sm={12} className="justify-content-around m-3">
                <Card bg="light" style={{ width: '18rem' }}>
                  <Card.Header>2016- till date</Card.Header>
                    <Card.Body>

                      <Card.Title>Graphics Designer</Card.Title>

                      <Card.Text>
                        Perfect Digital Music and Film Industry, Oyo State, Nigeria
                      </Card.Text>

                      <Card.Text>
                    <b>Part-time Job</b>
                      </Card.Text>
                  
                      </Card.Body>
                </Card>
              </Col>

              <Col md={3} sm={12} className="justify-content-around m-3">
                <Card bg="light" style={{ width: '18rem' }}>
                  <Card.Header>2017-2018</Card.Header>
                    <Card.Body>

                      <Card.Title>Student</Card.Title>

                      <Card.Text>
                        Alison Online Course | <a href="www.alison.com">www.alison.com</a>
                      </Card.Text>

                      <Card.Text>
                    <b>Diploma in Graphics Designing</b>
                      </Card.Text>
                  
                      </Card.Body>
                </Card>
              </Col>

              <Col md={3} sm={12} className="justify-content-around m-3">
                <Card bg="light" style={{ width: '18rem' }}>
                  <Card.Header>2017-2018</Card.Header>
                    <Card.Body>

                      <Card.Title>Student</Card.Title>

                      <Card.Text>
                        Alison Online Course | <a href="www.alison.com">www.alison.com</a>
                      </Card.Text>

                      <Card.Text>
                    <b>Diploma in Photography</b>
                      </Card.Text>
                  
                      </Card.Body>
                </Card>
              </Col>

              
              <Col md={3} sm={12} className="justify-content-around m-3">
                <Card bg="light" style={{ width: '18rem' }}>
                  <Card.Header>2018- till date</Card.Header>
                    <Card.Body>

                      <Card.Title>Graphics Designer / C.E.O</Card.Title>

                      <Card.Text>
                        Corn Design, University Of Ibadan, Nigeria
                      </Card.Text>
                      <br/>
                      </Card.Body>
                </Card>
              </Col>



              <Col md={3} sm={12} className="justify-content-around m-3">
                <Card bg="light" style={{ width: '18rem' }}>
                  <Card.Header>2019</Card.Header>
                    <Card.Body>

                      <Card.Title>Student</Card.Title>

                      <Card.Text>
                        Build Code Together, Ibadan, Nigeria
                      </Card.Text>

                      <Card.Text>
                    <b>Introduction to Web Development(HTML5, CSS, JavaScript & React Js)</b>
                      </Card.Text>
                  
                      </Card.Body>
                </Card>
              </Col>


              <Col md={3} sm={12} className="justify-content-around m-3">
                <Card bg="light" style={{ width: '18rem' }}>
                  <Card.Header>2020- till date</Card.Header>
                    <Card.Body>

                      <Card.Title>Student</Card.Title>

                      <Card.Text>
                        Alison Online Course | <a href="www.alison.com">www.alison.com</a>
                      </Card.Text>

                      <Card.Text>
                    <b>Diploma in E-Commerce Web Develpment</b>
                      </Card.Text>
        
                      </Card.Body>
                </Card>
              </Col>

            
            </Row>           


                      <hr/>
                      <Row className="justify-content-center p-4">
            
                      <Col md={3} sm={12} className="justify-content-center m-3">
                        <Card bg="dark" text ="white" style={{ width: '18rem' }}>
                          <Card.Header>April 2019</Card.Header>
                            <Card.Body>
        
                              <Card.Title>Ibadan, Nigeria</Card.Title>
        
                              <Card.Text>
                                Disability Hackathon Using Design Thinking
                              </Card.Text>
        
                              <Card.Text>
                                <b>Second Runner-up</b>
                              </Card.Text>
                          
                              </Card.Body>
                        </Card>
                      </Col>
        
                      <Col md={3} sm={12} className="justify-content-around m-3">
                        <Card bg="dark" text="white" style={{ width: '18rem' }}>
                          <Card.Header>November 2019</Card.Header>
                            <Card.Body>
        
                              <Card.Title>University of Ibadan, Nigeria</Card.Title>
        
                              <Card.Text>
                                IESA Thinkathon Challenge
                              </Card.Text>
        
                              <Card.Text>
                            <b>First Place</b>
                              </Card.Text>
                          
                              </Card.Body>
                        </Card>
                      </Col>
                    
                    </Row>      


        </Container>

       
    )
}

export default HomeTimeline
