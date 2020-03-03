import React from 'react';
// import HeroContact from '../Components/HeroAbout';
import ContactContent from '../Components/AboutContent';
// import Hero from 'react-bootstrap/Hero';
// import Content from 'react-bootstrap/Contents';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import HeroContact from '../Components/HeroContact';


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
            emailSent: true
            
        })
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


                        {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                        {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}

                    </Form>
                </ContactContent>
            </div>
            
        );
    }
}

export default ContactPage;