import React, { Component } from 'react'
import childComponent from './childComponent'

class ParentComponent extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             parentName:'Parent'
        }
        this.greetParent = this.greetParent.bind   
    }

    greetParent(){
        alert(`Hello ${this.state.parentName}` )
    }
    
    render() {
        return (
            <div>
                <childComponent/>
            </div>
        )
    }
}

export default ParentComponent
