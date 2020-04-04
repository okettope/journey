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
                    <p className="protitle">Python/Django</p>
                    <ProgressBar  striped variant="primary" animated now={69} />
                </Col>


                <Col md={5} sm={12} className=" justify-content-center">
                    <hr/>
                    <p className="protitle">React Js</p>
                    <ProgressBar  striped variant="success" animated now={90} />
                </Col>



                <Col md={5} sm={12} className=" justify-content-center">
                    <hr/>
                    <p className="protitle">Node Js</p>
                    <ProgressBar  striped variant="primary" animated now={65} />
                </Col>
                

           </Row>
           <hr/>
           </Container>
        </div>
    )
}

export default MyProgress

