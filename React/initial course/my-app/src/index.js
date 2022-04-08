import React from 'react'
import ReactDom from 'react-dom'

//css
import './index.css';
//Nested components, React tools
const books = [
{ id: 1,
  img: 'https://m.media-amazon.com/images/I/61NdJMwAThS._AC_UL320_.jpg',
  title: 'The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma',
  author: 'Bessel van der Kolk M.D.'
}
,
{ id: 2,
  img: 'https://m.media-amazon.com/images/I/611bb7KoLwL._AC_UL320_.jpg',
  title: 'AQUA BOOK DISNEY BABY',
  author: 'Culturama'
}
,
{ id: 3,
  img: 'https://images-na.ssl-images-amazon.com/images/I/61pj7RWKyVL._AC_UL160_SR160,160_.jpg',
  title: 'AQUA BOOK BABY SHARK',
  author: 'Culturama'
}
]


function BooksList(){
  return (
    <section className = 'bookList'>
      {books.map((book, index) => {
        return (
          <Book key={index} book={book}></Book>
        )
      })}
    </section>
  )
}

const Book = (props) => {
    const{img, title, author} = props.book

    return (
      <article className='book'>
        <img src={img} alt=""/>
        <h1>{title}</h1>
        <h4>{author}</h4>
      </article>
    )
}



ReactDom.render(<BooksList />, document.getElementById('root'))