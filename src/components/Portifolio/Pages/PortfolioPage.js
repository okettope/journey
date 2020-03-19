import React from 'react';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Navbar from 'react-bootstrap/Navbar';

import HeroPortfolio from '../Components/HeroPortfolio';
import FlyerDesigns from '../Components/portfolionavs/FlyerDesigns'
import LogoDesigns from '../Components/portfolionavs/LogoDesigns'


function PortfolioPage(props) {
    return(

        <div>
            <HeroPortfolio title={props.title}/>
            <Tabs defaultActiveKey="flyers" id="uncontrolled-tab-example">

                <Tab eventKey="flyers" title="flyers" className="Porttab">
                    <FlyerDesigns />
                </Tab>


                <Tab eventKey="logos" title="logos" className="Porttab">
                    <LogoDesigns />
                </Tab>
                
            </Tabs>
        </div>
    )
}
  
export default PortfolioPage;