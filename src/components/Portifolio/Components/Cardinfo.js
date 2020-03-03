import React from 'react';
import {useSpring, animated} from 'react-spring';



function CardInfo(props) {
    const style = useSpring({opacity: 1, from:{opacity: 0}});

    return (
      <animated.div className="g-card-info" style={style}>
        <p className="g-card-title"><b>{props.title}</b></p>
        <p className="g-card-sub-title">{props.subTitle}</p>
        <a className="g-card-link" href={props.link} target="blank" rel="noopeener noreferral">View</a>
      </animated.div>
    );
}

export default CardInfo;
