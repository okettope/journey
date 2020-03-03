import React from 'react'

// function Props(props) {

//     console.log(props)
//     return(
//         <h1>This is {props.name}</h1>
//     );
// }

const Props = props => {
    const {name, heroName}= props
    return(
        <div>
            <h1>This is Arrow function for {name} and {heroName}</h1>
            {props.children}

        </div>
    )
}

export default Props;