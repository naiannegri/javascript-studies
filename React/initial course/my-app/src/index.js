import React from 'react'
import ReactDom from 'react-dom'
//Nested components, React tools

function BooksList(){
    return (
        <section>
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
        </section>
    )
}

const Book = () => {
  return <article>
    <Image></Image>
    <Title/>
    <Author/>
  </article>

}

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/41D3enj6JVS._SX324_BO1,204,203,200_.jpg" alt=""/>
const Title = () => <h1>The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma</h1>
const Author = () => <h4> Bessel van der Kolk M.D.</h4>

ReactDom.render(<BooksList />, document.getElementById('root'))