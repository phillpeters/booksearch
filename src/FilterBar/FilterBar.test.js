import React from 'react';
import ReactDOM from 'react-dom';
import FilterBar from './FilterBar';

describe('FilterBar Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FilterBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
});
