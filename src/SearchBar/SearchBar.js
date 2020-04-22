import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  handleSubmit(e) {
    e.preventDefault();

    const { queryParams, apiKey } = this.props;

    const url = new URL('https://www.googleapis.com/books/v1/volumes');
    Object.keys(queryParams).forEach(key => {
      if (queryParams[key]) {
        url.searchParams.append(key, queryParams[key])
      }
    });
    url.searchParams.append('apiKey', apiKey);

    fetch(url, { method: 'GET' })
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong, please try again later');
        }
        return res.json();
      })
      .then(data => this.props.setBookData(data))
      .catch(err => {
        console.log(err.message);
      });
  }
  
  render() {
    return (
      <div className='SearchBar'>
        <form className='SearchBar__form' onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="search">Search: </label>
          <input
            type="text"
            name='search'
            id='search'
            placeholder='e.g. title, author, genre'
            onChange={e => this.props.setQuery(e.target.value)}
          />
          <button type='submit'>Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;