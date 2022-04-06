import React from 'react'
import ReactDom from 'react-dom'

//css
import './index.css';
//Nested components, React tools

function BooksList(){
    return (
      <section class="bookList">
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
        </section>
    )
}



const Book = () => {
  return <article class="book">
    <Image></Image>
    <Title/>
    <Author/>
  </article>

}

const Image = () => <img src="https://m.media-amazon.com/images/I/61NdJMwAThS._AC_UL320_.jpg" alt=""/>
const Title = () => <h1>The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma</h1>
const Author = () => <h4> Bessel van der Kolk M.D.</h4>

ReactDom.render(<BooksList />, document.getElementById('root'))