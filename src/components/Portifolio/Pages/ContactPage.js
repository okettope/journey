import React from 'react';
// import HeroContact from '../Components/HeroAbout';
import ContactContent from '../Components/AboutContent';
// import Hero from 'react-bootstrap/Hero';
// import Content from 'react-bootstrap/Contents';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import HeroContact from '../Components/HeroContact';
// import Axios from 'axios';

import Alert from 'react-bootstrap/Alert';


class ContactPage extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }

    handleChange = (event) => {

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name] :value
        })
    }


    handleSubmit =(event) => {
        event.preventDefault();

        this.setState({
            disabled: true,            
        });

        // Axios.post('http://localhost:3030/api/email', this.state)
        // .then(res => {
        //     if (res.data.success) {
        //         this.setState({
        //             disabled: false,
        //             emailSent: true
        //         });
        //     } else {
        //             this.setState({
        //                 disabled: false,
        //                 emailSent: false
        //             });
        //         }
        // })

        // .catch(err => {
        //     this.setState({
        //         disabled : false,
        //         emailSent : false
        //     });
        // })

    }

    render() {
        return (
            <div>
                <HeroContact  title={this.props.title}/>

                <ContactContent className="aboutConB">

                    <Form  onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="full-name">FullName</Form.Label>
                            <Form.Control id="full-name" name="name" type="text" required value={this.props.name} onChange={this.handleChange}/>
                        </Form.Group>

                         <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control id="email" name="email" type="email" required value={this.props.email} onChange={this.handleChange}/>
                        </Form.Group>
                        
                         <Form.Group>
                            <Form.Label htmlFor="Message">Message</Form.Label>
                            <Form.Control id="Message" name="Message" as="textarea" row="3" value={this.props.name} onChange={this.handleChange}/>
                        </Form.Group>

                        <Button ClassName="d-inline-block" variant="success" type="submit" disabled={this.state.disabled}>
                            Send
                        </Button>

                        
                        {this.state.emailSent === true &&
                        
                        <Alert variant="success" className="alertmsg-success" dismissible>
                            <Alert.Heading>Hey, your message was successfully sent</Alert.Heading>
                                <p>
                                    You will recieve a reply from me as soon as I get your message. Thank you <span role="img" aria-label="Happy">&#128578;</span>
                                </p>
                        </Alert>
                    }


                        {this.state.emailSent === false &&
                        
                            <Alert variant="danger" className="alertmsg-error" dismissible>
                                <Alert.Heading>Hey, an error occured</Alert.Heading>
                                    <p>
                                        Please refresh the page and try again. Thank you <span role="img" aria-label="Happy">&#128578;</span>
                                    </p>
                            </Alert>
                        }

                        
                        



                    </Form>
                </ContactContent>
            </div>
            
        );
    }
}

export default ContactPage;