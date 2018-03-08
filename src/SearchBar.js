import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
        <form className = "form">
          <input type="text" placeholder="Search..." />
          <p>
            <input type="checkbox" />
            {' '}
            Only show products in stock
          </p>
        </form>
      );
  }
}

export default SearchBar