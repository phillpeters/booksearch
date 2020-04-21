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
  
  queryChanged(query) {
    this.setState({
      query
    });
  }

  printTypeChanged(printType) {
    this.setState({
      printType
    });
  }

  bookTypeChanged(bookType) {
    this.setState({
      bookType
    });
  }

  componentDidMount() {

  }
  
  render() {
    return (
      <div className='App'>
        <header className='App_header'>
          <h1>Google Book Search</h1>
        </header>
        <SearchBar
          setQuery={query => this.queryChanged(query)}
          query={this.state.query}
          apiKey={apiKey}
        />
        <FilterBar
          setPrintType={printType => this.printTypeChanged(printType)}
          setBookType={bookType => this.bookTypeChanged(bookType)}
        />
        <BookList />
      </div>
    );
  }
}

export default App;
