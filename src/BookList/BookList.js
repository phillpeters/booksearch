import React from 'react';
import './BookList.css';

import Book from '../Book/Book';

class BookList extends React.Component {
  render() {
    return (
      <div>
        <Book books={this.props.books} />
      </div>
    );
  }
}

export default BookList;