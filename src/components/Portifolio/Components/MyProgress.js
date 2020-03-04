import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import LineHeads5 from '../Components/LineHeads5';


function MyProgress
() {
    return (
        <div name="MyProgress">
          
            <Container fluid={true}>

           <hr/>

         <LineHeads5/>
                
           <Row className="justify-content-center py-5" >
                <Col md={5} sm={12} className=" justify-content-center">
                    <hr/>
                    <p className="protitle">Adobe Photoshop</p>
                    <ProgressBar  striped variant="success" animated now={95} />
                </Col>


                <Col md={5} sm={12} className=" justify-content-center">
                    <hr/>
                    <p className="protitle">Adobe Lightroom</p>
                    <ProgressBar  striped variant="primary" animated now={60} />
                </Col>


                <Col md={5} sm={12} className=" justify-content-center">
                    <hr/>
                    <p className="protitle">Adobe Illustrator</p>
                    <ProgressBar  striped variant="primary" animated now={65} />
                </Col>


                <Col md={5} sm={12} className=" justify-content-center">
                    <hr/>
                    <p className="protitle">Adobe XD</p>
                    <ProgressBar  striped variant="success" animated now={70} />
                </Col>


                <Col md={5} sm={12} className=" justify-content-center">
                    <hr/>
                    <p className="protitle">Python/Django</p>
                    <ProgressBar  striped variant="warning" animated now={59} />
                </Col>


                <Col md={5} sm={12} className=" justify-content-center">
                    <hr/>
                    <p className="protitle">Adobe XD</p>
                    <ProgressBar  striped variant="success" animated now={75} />
                </Col>


                <Col md={5} sm={12} className=" justify-content-center">
                    <hr/>
                    <p className="protitle">Figma</p>
                    <ProgressBar  striped variant="primary" animated now={60} />
                </Col>


                <Col md={5} sm={12} className=" justify-content-center">
                    <hr/>
                    <p className="protitle">React Js</p>
                    <ProgressBar  striped variant="success" animated now={80} />
                </Col>


                <Col md={5} sm={12} className=" justify-content-center">
                    <hr/>
                    <p className="protitle">React Router</p>
                    <ProgressBar  striped variant="success" animated now={80} />
                </Col>


                <Col md={5} sm={12} className=" justify-content-center">
                    <hr/>
                    <p className="protitle">React Spring</p>
                    <ProgressBar  striped variant="primary" animated now={60} />
                </Col>


                <Col md={5} sm={12} className=" justify-content-center">
                    <hr/>
                    <p className="protitle">React-Bootstrap</p>
                    <ProgressBar  striped variant="success" animated now={90} />
                </Col>


                <Col md={5} sm={12} className=" justify-content-center">
                    <hr/>
                    <p className="protitle">Semantic UI React</p>
                    <ProgressBar  striped variant="success" animated now={75} />
                </Col>

                <Col md={5} sm={12} className=" justify-content-center">
                    <hr/>
                    <p className="protitle">Material UI React</p>
                    <ProgressBar  striped variant="success" animated now={75} />
                </Col>


                <Col md={5} sm={12} className=" justify-content-center">
                    <hr/>
                    <p className="protitle">Angular Js</p>
                    <ProgressBar  striped variant="danger" animated now={39} />
                </Col>


                <Col md={5} sm={12} className=" justify-content-center">
                    <hr/>
                    <p className="protitle">Node Js</p>
                    <ProgressBar  striped variant="warning" animated now={45} />
                </Col>


                <Col md={5} sm={12} className=" justify-content-center">
                    <hr/>
                    <p className="protitle">React Native</p>
                    <ProgressBar  striped variant="warning" animated now={50} />
                </Col>


                <Col md={5} sm={12} className=" justify-content-center">
                    <hr/>
                    <p className="protitle">MongoDB</p>
                    <ProgressBar  striped variant="warning" animated now={50} />
                </Col>
                

           </Row>
           <hr/>
           </Container>
        </div>
    )
}

export default MyProgress

