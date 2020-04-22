import React from 'react';
import './Book.css';

class Book extends React.Component {
  render() {
    const books = this.props.books.map(book => (
      <div className="Book">
        <img
          src={book.volumeInfo.imageLinks.thumbnail}
          alt={book.volumeInfo.title}
        />
        <div className="Book_info">
          <h1>{book.volumeInfo.title}</h1>
          <h4>Author: {book.volumeInfo.authors}</h4>
          {book.saleInfo.saleability === "FOR_SALE" ? <p>Price: ${book.saleInfo.retailPrice.amount}</p> : ''}
          <p>{book.volumeInfo.description}</p>
        </div>
      </div>
    ));

    return (
      <div>
        {books}
      </div>
    );
  }
}

export default Book;