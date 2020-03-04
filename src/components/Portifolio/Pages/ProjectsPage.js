import React from 'react'
import HeroProjects from '../Components/HeroProject'
import ProjectContent from '../Components/ProjectContent'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
// import ListGroup from 'react-bootstrap/ListGroup'
// import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Badge from 'react-bootstrap/Badge'
import Graphicsp from '../img/graphicsd.jpg'
import Spinner from 'react-bootstrap/Spinner'
import ProgressBar from 'react-bootstrap/ProgressBar'

import Portfolio001 from '../img/portfolio001.jpg'
import FoodBlog from '../img/Food-Blog.jpg'
import DesignWave from '../img/designwave.jpg'

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
                <div className="aboutConA">

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
                                           It was built purely with React Js using React-Bootstrap, React Spring, React Router and Material UI React.<br/><br/>
                                           Other languages/tools employed are Django and SendGrid.<br/><br/>
                                           &copy; CornCodes 2020                                       
                                        </Card.Text>
                                        
                                        </Card.Body>
                                    
                                        <Card.Body>
                                        <Card.Link href="/">Go to website <Spinner animation="grow" size="sm" /></Card.Link>
                                        </Card.Body>
                                        <ProgressBar striped variant="success" animated now={70} />
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
                            <Card>
                                <Card.Img variant="top" src={FoodBlog} />
                                <Card.Body>
                            
                                <Card.Title><p className="projtitle">Description</p></Card.Title>
                                
                                <Card.Text>
                                   Food N Blog is a project under development. <br/><br/>
                                   It is not a food blog but something beyond.  <br/><br/>
                                   It is being built with React js using React-Bootstrap, React Spring, React Router and Material UI React.<br/><br/>
                                   Other languages/tools employed are Django and SendGrid.<br/><br/>
                                   &copy; CornCodes 2020              
                                    <br/><br/>
                                   WATCH OUT!                                     
                                </Card.Text>
                                
                                </Card.Body>
                            
                                <Card.Body>
                                    <Card.Link href="#">Go to website <Spinner animation="grow" size="sm" /></Card.Link>
                                </Card.Body>
                                <ProgressBar striped variant="danger" animated now={2} />
                            </Card>
                        </Card.Body>
                            </Accordion.Collapse>

                        </Card>

                        <Card>

                            <Accordion.Toggle as={Card.Header} eventKey="2">
                                Design Wave <Badge variant="success">New</Badge>
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="2">
                            <Card.Body className="clickmade">
                                    <Card>
                                        <Card.Img variant="top" src={DesignWave} />
                                        <Card.Body>
                                        
                                        <Card.Title><p className="projtitle">Description</p></Card.Title>
                                        
                                        <Card.Text>
                                        -Design wave gives to the customers, for the first time, to make actual description of the design they want     <br/><br/>
                                        &copy; CornCodes 2020                                                 
                                        </Card.Text>
                                        
                                        </Card.Body>
                                    
                                        <Card.Body>
                                            <Card.Link href="#">Go to website <Spinner animation="grow" size="sm" /></Card.Link>
                                        </Card.Body>
                                        <ProgressBar striped variant="danger" animated now={1} />
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