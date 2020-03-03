import React from 'react'
import  Container from 'react-bootstrap/Container'
import  Row from 'react-bootstrap/Row'
import  Col from 'react-bootstrap/Col'


function ProjectContent(props) {
    return (
        <Container fluid={true}>
            <Row className="justify-content-center">
                <Col md={10}>
                    {props.children}
                </Col>
            </Row>
        </Container>
    )
}

export default ProjectContent
