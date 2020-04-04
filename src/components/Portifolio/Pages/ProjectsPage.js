import React from 'react'
import HeroProjects from '../Components/HeroProject'
import ProjectContent from '../Components/ProjectContent'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
// import ListGroup from 'react-bootstrap/ListGroup'
// import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Badge from 'react-bootstrap/Badge'
import Spinner from 'react-bootstrap/Spinner'
import ProgressBar from 'react-bootstrap/ProgressBar'

import Portfolio001 from '../img/portfolio001.jpg'
import CornChat from '../img/cornchat.png'

//FOR THE PROGRESS BAR: FOR WHEN THE PERCENT-RANGE
                                    //SUCCESS = 70%-100%
                                    //INFO = 60%-69%
                                    //WARNING = 40%-59%
                                    //DANGER = 0%-39%




function ProjectsPage(props) {
    return (
        <div>
            <HeroProjects title={props.title}/>
            <ProjectContent>
                <div>

                    <Accordion defaultActiveKey="0">
                        <Card>

                            <Accordion.Toggle as={Card.Header} eventKey="0">
                              Ayoade Oketona <Badge variant="success">New</Badge> 
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0">
                                <Card.Body className="clickmade">
                                    <Card>
                                        <Card.Img variant="top" src={Portfolio001} />
                                        <Card.Body>

                                        <Card.Title><p className="projtitle">Description</p></Card.Title>
                                        
                                        <Card.Text>
                                           Ayoade Oketona, my first project, is a portfolio website.<br/><br/>
                                           It was built purely with React Js using React-Bootstrap, React Spring, React Router and Node Js|Express Js.<br/><br/>
                                           Other languages/tools employed are Django and SendGrid.<br/><br/>
                                           &copy; CornCodes 2020                                       
                                        </Card.Text>
                                        
                                        </Card.Body>
                                    
                                        <Card.Body>
                                        <Card.Link href="/">Go to website <Spinner animation="grow" size="sm" /></Card.Link>
                                        </Card.Body>
                                        <ProgressBar striped variant="success" animated now={95} />
                                    </Card>
                                </Card.Body>
                            </Accordion.Collapse>

                        </Card>

                        <Card>

                            <Accordion.Toggle as={Card.Header} eventKey="1">
                             Corn Chat <Badge variant="success">New</Badge>
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="1">
                            <Card.Body className="clickmade">
                            <Card>
                                <Card.Img variant="top" src={CornChat} />
                                <Card.Body>
                            
                                <Card.Title><p className="projtitle">Description</p></Card.Title>
                                
                                <Card.Text>
                                   Corn Chat is a chat app that is very easy to use. <br/><br/>
                                   It is not a just a chat app but something beyond.  <br/><br/>
                                   It is being built with React Js, Node Js and Socket io.<br/><br/>
                                   It is best for secrecy and privacy<br/><br/>
                                   &copy; CornCodes 2020              
                                </Card.Text>
                                
                                </Card.Body>
                            
                                <Card.Body>
                                    <Card.Link href="https://cornchat.netlify.com">Go to website <Spinner animation="grow" size="sm" /></Card.Link>
                                </Card.Body>
                                <ProgressBar striped variant="success" animated now={98} />
                            </Card>
                        </Card.Body>
                            </Accordion.Collapse>

                        </Card>

                        <Card>

                           
                            
                        </Card>
                    </Accordion>
                </div>
            
            </ProjectContent>

        </div>
    )
}


export default ProjectsPage;