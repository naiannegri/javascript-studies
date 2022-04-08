import React from 'react'
import ReactDom from 'react-dom'

//css
import './index.css';
//Nested components, React tools
const firstBook = {
  img: 'https://m.media-amazon.com/images/I/61NdJMwAThS._AC_UL320_.jpg',
  title: 'The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma',
  author: 'Bessel van der Kolk M.D.'
}

const secondBook = {
  img: 'https://m.media-amazon.com/images/I/611bb7KoLwL._AC_UL320_.jpg',
  title: 'AQUA BOOK DISNEY BABY',
  author: 'Culturama'
}

const thirdBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/61pj7RWKyVL._AC_UL160_SR160,160_.jpg',
  title: 'AQUA BOOK BABY SHARK',
  author: 'Culturama'
}

function BooksList(){
  return (
    <section className = 'bookList'>
      <Book 
      img ={firstBook.img} 
      title={firstBook.title} 
      author = {firstBook.author} 
      >
        <p>
          lorem ipsum dolor sit amet, consectetur adip
          </p>      
      </Book>
      <Book 
      img={secondBook.img} 
      title = {secondBook.title} 
      author = {secondBook.author} 
      />
      <Book 
      img={thirdBook.img} 
      title = {thirdBook.title} 
      author = {thirdBook.author} 
      />
    
    </section>
  )
}

const Book = (props) => {
    const{img, title, author} = props
    return (
      <article className='book'>
        <img src={img} alt=""/>
        <h1>{title}</h1>
        <h4>{author}</h4>
        {props.children}
      </article>
    )
}



ReactDom.render(<BooksList />, document.getElementById('root'))