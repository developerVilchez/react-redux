import React, { Component } from 'react';
import './ProductCategoryRow.css';

class ProductCategoryRow extends Component {
  render() {
    const { category } = this.props;
    return (
      <tr className="tr-category">
        <th colSpan="2">{category}</th>
      </tr>)
    }
}

export default ProductCategoryRow