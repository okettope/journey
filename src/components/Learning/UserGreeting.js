import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {

            ///METHOD 04 CONDITIONAL RENDERING --- SHORT CIRCUIT METHOD///

            return this.state.isLoggedIn && <div>Welcome User</div>



            ///METHOD 03 CONDITIONAL RENDERING///

            // return(
            //     this.state.isLoggedIn ?
            //     <div>Welcome User</div>:
            //     <div>Welcome Guest</div>
            // )




            ///METHOD 02 CONDITIONAL RENDERING///
            
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome User</div>
        // } else {
        //         message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>




            ///METHOD 01 CONDITIONAL RENDERING///
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             Welcome User
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>Welcome Guest</div>
        //     )
        // }
        // return (
        //     <div>
        //        <div>Welcome User</div>
        //        <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
