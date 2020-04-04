import React from 'react';
import HeroPortfolio from '../Components/HeroPortfolio'

function PortfolioPage(props) {
    return(

        <div>
            <HeroPortfolio title={props.title}/>
            <h3>Kindly check my designs <a target="_blank"  rel="noopener noreferrer" href="https://google.com">here</a></h3>
        </div>
    )
}
  
export default PortfolioPage;