import React, { Component } from 'react'
import { BrowserRouter as Router,Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../src/components/Portifolio/img/logname.png'


import './App.css'
import Footer from './components/Portifolio/Components/Footer';
import HomePage from './components/Portifolio/Pages/HomePage'
import BlogPage from './components/Portifolio/Pages/ProjectsPage'
import AboutPage from './components/Portifolio/Pages/AboutPage'
import ContactPage from './components/Portifolio/Pages/ContactPage'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Ayoade Oketona',
      headerLinks: [
        {title: 'Home' , path:'/'},
        {title: 'Projects' , path:'/Projects'},
        {title: 'About' , path:'/about'},
        {title: 'Contact' , path:'/contact'},
      ],
      home:{
        title: 'Welcome to my Portfolio',
        subTitle: 'Ayoade Oketona',
        text: 'Find out what I do'
      },

      projects:{
        title: 'My Projects'
      },

     about:{
        title: 'About Me',
      },

     contact:{
        title: 'Let\'s talk',
      }


    }
  }
  render() {
    return (
      <Router>
        <Container  className="p-0" fluid={true}>
          <Navbar className="border-bottom {styles.navbar}" bg="light" expand="lg">
            <Navbar.Brand>
          <a href="/"><img src={Logo}/></a>
            </Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toogle">

              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/projects">Projects</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />}/>
          <Route path="/Projects" render={() => <BlogPage title={this.state.projects.title} />}/>
          <Route path="/about" render={() => <AboutPage title={this.state.about.title}  />}/>
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />}/>
          <Footer/>

        </Container>
      </Router>
    )
  }
}

export default App
