import React from 'react';
// import Tab from 'react-bootstrap/Tab'
// import Nav from 'react-bootstrap/Nav'

import HeroPortfolio from '../Components/HeroPortfolio';
import FlyerDesigns from '../Components/portfolionavs/FlyerDesigns'
import LogoDesigns from '../Components/portfolionavs/LogoDesigns'


function PortfolioPage(props) {
    return(

        <div>
            <HeroPortfolio title={props.title}/>

        </div>
    )
}
  
export default PortfolioPage;