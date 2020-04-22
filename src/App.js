import React from 'react';
import './App.css';

import SearchBar from './SearchBar/SearchBar';
import FilterBar from './FilterBar/FilterBar';
import BookList from './BookList/BookList';

const apiKey = 'AIzaSyCpj1vD4_wO4yme1GnxnyII8D6N5Jis3e0';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      q: '',
      printType: 'all',
      filter: ''
    };
  }
  
  queryChanged(q) {
    this.setState({
      q
    });
  }

  printTypeChanged(printType) {
    this.setState({
      printType
    });
  }

  bookTypeChanged(filter) {
    this.setState({
      filter
    });
  }

  setBookData(data) {
    this.setState({
      books: data
    });
  }
  
  render() {
    const bookList = this.state.books
      ? <BookList books={this.state.books.items} />
      : '';

    return (
      <div className='App'>
        <header className='App_header'>
          <h1>Google Book Search</h1>
        </header>
        <SearchBar
          setQuery={q => this.queryChanged(q)}
          queryParams={this.state}
          apiKey={apiKey}
          setBookData={data => this.setBookData(data)}
        />
        <FilterBar
          setPrintType={printType => this.printTypeChanged(printType)}
          setBookType={bookType => this.bookTypeChanged(bookType)}
        />
        {bookList}
      </div>
    );
  }
}

export default App;
