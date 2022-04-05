import React from 'react'
import ReactDom from 'react-dom'

// JSX Rules
//return a single element
// div / section / article or Fragment
// use camelCase for html attribute
//className instead of class
//close every element
// formatting
// do not overuse div inside a div, use specific names

function First(){
  return (<React.Fragment>
  <div>
   <h3>First Program</h3>
   <ul>
     <li>
       <a href="#">hello world</a>
     </li>
    </ul>
   </div>
   </React.Fragment> 
   )   
}


function Second(){
  return (
  <div className="container">
   <h3>First Program</h3>
   <ul>
     <li>
       <a href="#">hello world</a>
     </li>
     <img src='' alt='' />
     <input type="text" name='' id='' />
    </ul>
   </div>
   )   
}

function Third(){
  return (<h1>
    Hello 
  </h1>

   )   
}
//function First(){
//  return <h4>This is my first component!</h4>
//}

//const First = () => {
//  return React.createElement('div',{}, React.createElement('h1',{},'first program'))
//}

ReactDom.render(<Third />, document.getElementById('root'))

