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
                                        <Card.Title><p className="projtitle">Corn Design</p></Card.Title>
                                        <Card.Text>
                                                Corn Design is a web app developed by CornCodes, built with React Js for front end and
                                                 Django for back end. 
                                        </Card.Text>
                                        <Card.Title><p className="projtitle">Description</p></Card.Title>
                                        
                                        <Card.Text>
                                           Corn Design is a web app that enables people to have best
                                            experience in describing the kind of design they want. <br/><br/>With the app, they can sketch,
                                             drag and drop components they want on the design.<br/><br/>
                                            They can select color and the kind of layout they want.<br/><br/>
                                            They can also select out of thousands of design template, the one they want.                                        
                                        </Card.Text>
                                        
                                        </Card.Body>
                                    
                                        <Card.Body>
                                        <Card.Link href="#">Go to website <Spinner animation="grow" size="sm" /></Card.Link>
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
                                <Card.Img variant="top" src={Graphicsp} />
                                <Card.Body>
                                <Card.Title><p className="projtitle">Food N Blog</p></Card.Title>
                                <Card.Text>
                                        Corn Design is a web app developed by CornCodes, built with React Js for front end and
                                         Django for back end. 
                                </Card.Text>
                                <Card.Title><p className="projtitle">Description</p></Card.Title>
                                
                                <Card.Text>
                                   Corn Design is a web app that enables people to have best
                                    experience in describing the kind of design they want. <br/><br/>With the app, they can sketch,
                                     drag and drop components they want on the design.<br/><br/>
                                    They can select color and the kind of layout they want.<br/><br/>
                                    They can also select out of thousands of design template, the one they want.                                        
                                </Card.Text>
                                
                                </Card.Body>
                            
                                <Card.Body>
                                    <Card.Link href="#">Go to website <Spinner animation="grow" size="sm" /></Card.Link>
                                </Card.Body>
                                <ProgressBar striped variant="warning" animated now={35} />
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
                                    <Card>
                                        <Card.Img variant="top" src={Graphicsp} />
                                        <Card.Body>
                                        <Card.Title><p className="projtitle">Corn Design</p></Card.Title>
                                        <Card.Text>
                                                Corn Design is a web app developed by CornCodes, built with React Js for front end and
                                                 Django for back end. 
                                        </Card.Text>
                                        <Card.Title><p className="projtitle">Description</p></Card.Title>
                                        
                                        <Card.Text>
                                           Corn Design is a web app that enables people to have best
                                            experience in describing the kind of design they want. <br/><br/>With the app, they can sketch,
                                             drag and drop components they want on the design.<br/><br/>
                                            They can select color and the kind of layout they want.<br/><br/>
                                            They can also select out of thousands of design template, the one they want.                                        
                                        </Card.Text>
                                        
                                        </Card.Body>
                                    
                                        <Card.Body>
                                            <Card.Link href="#">Go to website <Spinner animation="grow" size="sm" /></Card.Link>
                                        </Card.Body>
                                        <ProgressBar striped variant="success" animated now={30} />
                                    </Card>
                                </Card.Body>
                            </Accordion.Collapse>
                            
                        </Card>

                        <Card>

                            <Accordion.Toggle as={Card.Header} eventKey="3">
                                MLSTYLES_I <Badge variant="success">New</Badge>
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="3">
                            <Card.Body className="clickmade">
                                    <Card>
                                        <Card.Img variant="top" src={Graphicsp} />
                                        <Card.Body>
                                        <Card.Title><p className="projtitle">MLSTYLES_I</p></Card.Title>
                                        <Card.Text>
                                                Corn Design is a web app developed by CornCodes, built with React Js for front end and
                                                 Django for back end. 
                                        </Card.Text>
                                        <Card.Title><p className="projtitle">Description</p></Card.Title>
                                        
                                        <Card.Text>
                                           Corn Design is a web app that enables people to have best
                                            experience in describing the kind of design they want. <br/><br/>With the app, they can sketch,
                                             drag and drop components they want on the design.<br/><br/>
                                            They can select color and the kind of layout they want.<br/><br/>
                                            They can also select out of thousands of design template, the one they want.                                        
                                        </Card.Text>
                                        
                                        </Card.Body>
                                    
                                        <Card.Body>
                                            <Card.Link href="#">Go to website <Spinner animation="grow" size="sm" /></Card.Link>
                                        </Card.Body>
                                        <ProgressBar striped variant="success" animated now={100} />
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
                            <Card>
                                <Card.Img variant="top" src={Graphicsp} />
                                <Card.Body>
                                <Card.Title><p className="projtitle">PDMFI</p></Card.Title>
                                <Card.Text>
                                        Corn Design is a web app developed by CornCodes, built with React Js for front end and
                                         Django for back end. 
                                </Card.Text>
                                <Card.Title><p className="projtitle">Description</p></Card.Title>
                                
                                <Card.Text>
                                   Corn Design is a web app that enables people to have best
                                    experience in describing the kind of design they want. <br/><br/>With the app, they can sketch,
                                     drag and drop components they want on the design.<br/><br/>
                                    They can select color and the kind of layout they want.<br/><br/>
                                    They can also select out of thousands of design template, the one they want.                                        
                                </Card.Text>
                                
                                </Card.Body>
                            
                                <Card.Body>
                                    <Card.Link href="#">Go to website <Spinner animation="grow" size="sm" /></Card.Link>
                                </Card.Body>
                                <ProgressBar striped variant="success" animated now={80} />
                            </Card>
                        </Card.Body>
                            </Accordion.Collapse>

                            <Accordion.Toggle as={Card.Header} eventKey="5">
                            Corn Codes <Badge variant="success">New</Badge>
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="5">
                        <Card.Body className="clickmade">
                        <Card>
                            <Card.Img variant="top" src={Graphicsp} />
                            <Card.Body>
                            <Card.Title><p className="projtitle">Corn Codes</p></Card.Title>
                            <Card.Text>
                                    Corn Design is a web app developed by CornCodes, built with React Js for front end and
                                     Django for back end. 
                            </Card.Text>
                            <Card.Title><p className="projtitle">Description</p></Card.Title>
                            
                            <Card.Text>
                               Corn Design is a web app that enables people to have best
                                experience in describing the kind of design they want. <br/><br/>With the app, they can sketch,
                                 drag and drop components they want on the design.<br/><br/>
                                They can select color and the kind of layout they want.<br/><br/>
                                They can also select out of thousands of design template, the one they want.                                        
                            </Card.Text>
                            
                            </Card.Body>
                        
                            <Card.Body>
                                <Card.Link href="#">Go to website <Spinner animation="grow" size="sm" /></Card.Link>
                            </Card.Body>
                            <ProgressBar striped variant="success" animated now={50} />
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


export default ProjectsPage;