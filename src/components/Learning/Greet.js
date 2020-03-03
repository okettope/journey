import React, { Component } from 'react'


// Stateless Functional Component
// function Greet() {
//     return(
//         <h1>Hello</h1>
//     )
// }



// ES6 Arrow Function Syntax
// const Greet = () => <h1>Hello Cornelius</h1>


// const Greet = props => {
//     const {name, heroName} = props
//     return(
//         <div>
//             <h1>
//                 Hello {name} a.k.a {heroName}
//             </h1>
//         </div>
//     )
// }



class Greet extends Component {
    render() {
        const {name, heroName} = this.props
    return(
        <div>
            <h2>My firstname is {name} and my lastname is {heroName}</h2>
        </div>
    )
    }
    
}

export default Greet;