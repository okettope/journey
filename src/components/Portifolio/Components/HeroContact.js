import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function HeroContact(props) {
    return (
        <Jumbotron className="bg-light jumbotron-fluid p-3" >
            <Container fluid={true}>
                <Row className="justify-content-center py-5" >
                    <Col md={5} sm={12} className=" justify-content-center hcona">
                        {props.title && <h3 className="display-3 font-weight-bolder">{props.title}</h3>}
                    </Col>
                </Row>
                
                <Row>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default HeroContact