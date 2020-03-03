import React from 'react'

function Hello() {

// JSX- HTML SYNTAX
    // return(
    //     <div className='dummyClass'>
    //         <h1>Hello Developers</h1>
    //     </div>
    // )

// REACT NORMAL WAY OF ADDING HTML
    return React.createElement(
        'div',
         {id: 'Hello', className:'dummyClass' },
          React.createElement('h1', null, 'Hello Developers'))
}

export default Hello;