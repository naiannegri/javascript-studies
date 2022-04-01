import React from 'react'
import ReactDom from 'react-dom'

function First(){
  return <h4>This is my first component!</h4>
}

ReactDom.render(<First />, document.getElementById('root'))

