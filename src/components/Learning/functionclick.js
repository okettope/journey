import React from 'react'


// rfce to call the codes without typing
function FunctionClick() {

    function clickHandler (){
        console.log('button clicked')
    }
    return (
        <div>
            <button onClick ={clickHandler}>click</button>
        </div>
    )
}

export default FunctionClick;
