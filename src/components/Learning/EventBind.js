import React, { Component } from 'react'


// rce for class snippet
// rconst for construction
class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello'
        }

        this.clickHandler =   this.clickHandler.bind(this)   //Approach 03         
    }
    // clickHandler() {
    //     this.setState({
    //         message:'GoodBye!'
    //     })
    //     console.log(this)
    // }

    clickHandler= () => {
        this.setState({
            message:'GoodBye!'
        })                                      //Approach 04
       
    }
    render() {
        return (
            <div>
            <div>{this.state.message}</div>
                {/*<button onClick={this.clickHandler.bind(this)}>Click Now</button>*/}           {/*Approch 01*/}
                {/*<button onClick={() =>this.clickHandler()}>Click Now</button> */}                        {/*Approch 02*/}
                <button onClick={ this.clickHandler}>Click Now</button>                         {/*Approch 03 the best option to use*/}

            </div>
        )
    }
}

export default EventBind
