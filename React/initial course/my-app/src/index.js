import React from 'react'
import ReactDom from 'react-dom'
//Nested components, React tools

function Tools(){
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}

ReactDom.render(<Tools />, document.getElementById('root'))

