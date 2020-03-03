import React from 'react'
import HeroProjects from '../Components/HeroProject'
import ProjectContent from '../Components/ProjectContent'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Badge from 'react-bootstrap/Badge'



function WebContent(props) {
    return (
        <div>
            <HeroProjects title={props.title}/>
            <ProjectContent>
                <div className="aboutConA">

                    <Accordion defaultActiveKey="0">
                        <Card>

                            <Accordion.Toggle as={Card.Header} eventKey="0">
                              Corn Design <Badge variant="success">New</Badge>
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0">
                                <Card.Body className="clickmade">
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                                        <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                        <ListGroupItem>Cras justo odio</ListGroupItem>
                                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                        <ListGroupItem>Vestibulum at eros</ListGroupItem>
                                        </ListGroup>
                                        <Card.Body>
                                        <Card.Link href="#">Card Link</Card.Link>
                                        <Card.Link href="#">Another Link</Card.Link>
                                        </Card.Body>
                                    </Card>
                                </Card.Body>
                            </Accordion.Collapse>

                        </Card>

                        <Card>

                            <Accordion.Toggle as={Card.Header} eventKey="1">
                             Food N Blog <Badge variant="success">New</Badge>
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="1">
                            <Card.Body className="clickmade">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                                    <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                    <ListGroupItem>Cras justo odio</ListGroupItem>
                                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                                    </ListGroup>
                                    <Card.Body>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                    </Card.Body>
                                </Card>
                            
                            </Card.Body>
                            </Accordion.Collapse>

                        </Card>

                        <Card>

                            <Accordion.Toggle as={Card.Header} eventKey="2">
                                Corn Ads <Badge variant="success">New</Badge>
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="2">
                            <Card.Body className="clickmade">
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                            <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                            <ListGroupItem>Cras justo odio</ListGroupItem>
                            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem>Vestibulum at eros</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                            
                            </Card.Body>
                            </Accordion.Collapse>
                            
                        </Card>

                        <Card>

                            <Accordion.Toggle as={Card.Header} eventKey="3">
                                MLSTYLES <Badge variant="success">New</Badge>
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="3">
                            <Card.Body className="clickmade">
                            
                            <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                                    <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                    <ListGroupItem>Cras justo odio</ListGroupItem>
                                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                                    </ListGroup>
                                    <Card.Body>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                    </Card.Body>
                                </Card>
                            
                            
                            </Card.Body>
                            </Accordion.Collapse>
                            
                        </Card>

                        <Card>

                            <Accordion.Toggle as={Card.Header} eventKey="4">
                                PDMFI <Badge variant="success">New</Badge>
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="4">
                            <Card.Body className="clickmade">
                            
                            
                            <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                                    <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                    <ListGroupItem>Cras justo odio</ListGroupItem>
                                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                                    </ListGroup>
                                    <Card.Body>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                    </Card.Body>
                                </Card>
                            
                            </Card.Body>
                            </Accordion.Collapse>

                            <Accordion.Toggle as={Card.Header} eventKey="5">
                            Corn Codes <Badge variant="success">New</Badge>
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="5">
                        <Card.Body className="clickmade">
                        
                        
                        <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                                <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                <ListGroupItem>Cras justo odio</ListGroupItem>
                                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                <ListGroupItem>Vestibulum at eros</ListGroupItem>
                                </ListGroup>
                                <Card.Body>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                        
                        </Card.Body>
                        </Accordion.Collapse>
                            
                        </Card>
                    </Accordion>
                </div>
            
            </ProjectContent>

        </div>
    )
}


export default WebContent;