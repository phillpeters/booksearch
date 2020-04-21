import React from 'react';
import './FilterBar.css';

class FilterBar extends React.Component {
  render() {
    return (
      <div className='FilterBar'>
        <form className='FilterBar__form'>
          <label htmlFor="print-type">Print Type: </label>
          <select
            name="print-type"
            id="print-type"
            onChange={e => this.props.setPrintType(e.target.value)}
          >
            <option value="all">All</option>
            <option value="books">Books</option>
            <option value="magazines">Magazines</option>
          </select>
          <label htmlFor='book-type'>Book Type: </label>
          <select
            name='book-type'
            id='book-type'
            onChange={e => this.props.setBookType(e.target.value)}
          >
            <option value=''>No Filter</option>
            <option value='ebooks'>All eBooks</option>
            <option value='free-ebooks'>Free eBooks</option>
            <option value='paid-ebooks'>Paid eBooks</option>
          </select>
        </form>
      </div>
    );
  }
}

export default FilterBar;