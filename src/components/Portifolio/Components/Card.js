import React from 'react'
import CardInfo from'./Cardinfo';

function Card(props) {
    return (
       <div className="d-inline-block g-card" onClick={(e) => props.click(props.item)}>

            <div className="g-card-image" src={props.item.Content} alt={props.item.Content}>
            <img className="" src={props.item.Content} alt={props.item.Content}/>
            </div> 
            {props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link}/>}
            
        
       </div>
    );
}

export default Card;
