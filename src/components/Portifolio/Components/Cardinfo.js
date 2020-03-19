import React from 'react';
import {useSpring, animated} from 'react-spring';
import { BrowserRouter as Router,Route, Link } from "react-router-dom";





function CardInfo(props) {
    const style = useSpring({opacity: 1, from:{opacity: 0}});

    return (
      <animated.div className="g-card-info" style={style}>
        <p className="g-card-title"><b>{props.title}</b></p>
        <p className="g-card-sub-title">{props.subTitle}</p>
        <Link className="g-card-link" to="/projects"><a href={props.link}>View</a></Link>
      </animated.div>
    );
}

export default CardInfo;
