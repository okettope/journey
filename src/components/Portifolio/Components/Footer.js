import React from 'react'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import styles from '../../Portifolio/Components/Footer.css'


function Footer() {
    return (
     <footer className="mt-5 {styles.footer}">
        <Container fluid="true" >
            <Col className=" justify-content-between p-3">

                <Row className="p-2 m-0 d-flex justify-content-center" >
                    &copy; CornDesign 2020 - All Rights Reserved
                </Row>

                <Row className="p-2 m-0 d-flex justify-content-center" >
                    Developed by CornCodes[CC]
                </Row>
            </Col>


        </Container>
     </footer>
    )
}

export default Footer
